const express = require("express");
const Item = require("../db/models/inventory-model");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

createItem = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide an item",
    });
  }

  const item = new Item(body);

  if (!item) {
    return res.status(400).json({ success: false, error: err });
  }

  item
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: item._id,
        message: "Item created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Item not created!",
      });
    });
};

updateItem = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Item.findOne({ _id: req.params.id }, (err, item) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Item not found!",
      });
    }

    item.name = req.body.name;
    item.main_category = req.body.main_category;
    item.sub_category = req.body.sub_category;
    item.genre = body.genre;
    item.release_date = body.release_date;
    item.description = body.description;
    item.image = body.image;
    item.metacritic_rating = body.metacritic_rating;
    item.on_stock = req.body.on_stock;
    item.nr_on_stock = req.body.nr_on_stock;
    item.price = body.price;
    item
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: item._id,
          message: "Item updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Item not updated!",
        });
      });
  });
};

deleteItem = async (req, res) => {
  await Item.findOneAndDelete({ _id: req.params.id }, (err, item) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!item) {
      return res.status(404).json({ success: false, error: `Item not found` });
    }

    return res.status(200).json({ success: true, data: item });
  }).catch((err) => console.log(err));
};

getItemById = async (req, res) => {
  await Item.findOne({ _id: req.params.id }, (err, item) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!item) {
      return res.status(404).json({ success: false, error: `Item not found` });
    }
    return res.status(200).json({ success: true, data: item });
  }).catch((err) => console.log(err));
};

getAllConsoles = async (req, res) => {
  await Item.find({ sub_category: "consoles" }, (err, items) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!items.length) {
      return res.status(404).json({ success: false, error: `Item not found` });
    }
    return res.status(200).json({ success: true, data: items });
  }).catch((err) => console.log(err));
};

getPsConsoles = async (req, res) => {
  await Item.find(
    { sub_category: "consoles", main_category: "PlayStation" },
    (err, items) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!items.length) {
        return res
          .status(404)
          .json({ success: false, error: `Item not found` });
      }
      return res.status(200).json({ success: true, data: items });
    }
  ).catch((err) => console.log(err));
};

getXboxConsoles = async (req, res) => {
  await Item.find(
    { sub_category: "consoles", main_category: "Xbox" },
    (err, items) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!items.length) {
        return res
          .status(404)
          .json({ success: false, error: `Item not found` });
      }
      return res.status(200).json({ success: true, data: items });
    }
  ).catch((err) => console.log(err));
};

getNintendoConsoles = async (req, res) => {
  await Item.find(
    { sub_category: "consoles", main_category: "Nintendo" },
    (err, items) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!items.length) {
        return res
          .status(404)
          .json({ success: false, error: `Item not found` });
      }
      return res.status(200).json({ success: true, data: items });
    }
  ).catch((err) => console.log(err));
};

getPsAccessories = async (req, res) => {
  await Item.find(
    { sub_category: "accessories", main_category: "PlayStation" },
    (err, items) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!items.length) {
        return res
          .status(404)
          .json({ success: false, error: `Item not found` });
      }
      return res.status(200).json({ success: true, data: items });
    }
  ).catch((err) => console.log(err));
};

getXboxAccessories = async (req, res) => {
  await Item.find(
    { sub_category: "accessories", main_category: "Xbox" },
    (err, items) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!items.length) {
        return res
          .status(404)
          .json({ success: false, error: `Item not found` });
      }
      return res.status(200).json({ success: true, data: items });
    }
  ).catch((err) => console.log(err));
};

getNintendoAccessories = async (req, res) => {
  await Item.find(
    { sub_category: "accessories", main_category: "Nintendo" },
    (err, items) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!items.length) {
        return res
          .status(404)
          .json({ success: false, error: `Item not found` });
      }
      return res.status(200).json({ success: true, data: items });
    }
  ).catch((err) => console.log(err));
};

getPsGames = async (req, res) => {
  await Item.find(
    { sub_category: "games", main_category: "PlayStation" },
    (err, items) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!items.length) {
        return res
          .status(404)
          .json({ success: false, error: `Item not found` });
      }
      return res.status(200).json({ success: true, data: items });
    }
  ).catch((err) => console.log(err));
};

getXboxGames = async (req, res) => {
  await Item.find(
    { sub_category: "games", main_category: "Xbox" },
    (err, items) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!items.length) {
        return res
          .status(404)
          .json({ success: false, error: `Item not found` });
      }
      return res.status(200).json({ success: true, data: items });
    }
  ).catch((err) => console.log(err));
};

getNintendoGames = async (req, res) => {
  await Item.find(
    { sub_category: "games", main_category: "Nintendo" },
    (err, items) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!items.length) {
        return res
          .status(404)
          .json({ success: false, error: `Item not found` });
      }
      return res.status(200).json({ success: true, data: items });
    }
  ).catch((err) => console.log(err));
};

getSearchedItems = async (req, res) => {
  await Item.find({ $text: { $search: req.params.input } }, (err, items) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!items.length) {
      return res.status(404).json({ success: false, error: `Item not found` });
    }
    return res.status(200).json({ success: true, data: items });
  }).catch((err) => console.log(err));
};

module.exports = {
  createItem,
  updateItem,
  deleteItem,
  getItemById,
  getAllConsoles,
  getPsConsoles,
  getXboxConsoles,
  getNintendoConsoles,
  getPsAccessories,
  getXboxAccessories,
  getNintendoAccessories,
  getPsGames,
  getXboxGames,
  getNintendoGames,
  getSearchedItems,
};
