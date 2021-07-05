import React, { useState, useEffect } from "react";
import api from "../api/api";
import SingleItemComponent from "../components/SingleItemComponent";

export function XboxConsoles(props) {
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    let isMounted = true;
    api.getXboxConsoles().then((res) => {
      if (isMounted) {
        setItems(Object.values(res.data.data));
        if (
          typeof items !== "undefined" &&
          items !== null &&
          items.length !== 0
        ) {
          setShowItems(true);
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, [items]);

  if (showItems) {
    return items
      .slice(0, props.size)
      .map((item) => (
        <SingleItemComponent
          key={item._id}
          imgSrc={item.image[0]}
          imgAlt={item.name}
          itemName={item.name}
          itemPrice={item.price}
        />
      ));
  } else return null;
}

export function XboxAccessories(props) {
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    let isMounted = true;
    api.getXboxAccessories().then((res) => {
      if (isMounted) {
        setItems(Object.values(res.data.data));
        if (
          typeof items !== "undefined" &&
          items !== null &&
          items.length !== 0
        ) {
          setShowItems(true);
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, [items]);

  if (showItems) {
    return items
      .slice(0, props.size)
      .map((item) => (
        <SingleItemComponent
          key={item._id}
          imgSrc={item.image[0]}
          imgAlt={item.name}
          itemName={item.name}
          itemPrice={item.price}
        />
      ));
  } else return null;
}

export function XboxGames(props) {
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    let isMounted = true;
    api.getXboxGames().then((res) => {
      if (isMounted) {
        setItems(Object.values(res.data.data));
        if (
          typeof items !== "undefined" &&
          items !== null &&
          items.length !== 0
        ) {
          setShowItems(true);
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, [items]);

  if (showItems) {
    return items
      .slice(0, props.size)
      .map((item) => (
        <SingleItemComponent
          key={item._id}
          imgSrc={item.image[0]}
          imgAlt={item.name}
          itemName={item.name}
          itemPrice={item.price}
        />
      ));
  } else return null;
}

export function NintendoConsoles(props) {
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    let isMounted = true;
    api.getNintendoConsoles().then((res) => {
      if (isMounted) {
        setItems(Object.values(res.data.data));
        if (
          typeof items !== "undefined" &&
          items !== null &&
          items.length !== 0
        ) {
          setShowItems(true);
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, [items]);

  if (showItems) {
    return items
      .slice(0, props.size)
      .map((item) => (
        <SingleItemComponent
          key={item._id}
          imgSrc={item.image[0]}
          imgAlt={item.name}
          itemName={item.name}
          itemPrice={item.price}
        />
      ));
  } else return null;
}

export function NintendoAccessories(props) {
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    let isMounted = true;
    api.getNintendoAccessories().then((res) => {
      if (isMounted) {
        setItems(Object.values(res.data.data));
        if (
          typeof items !== "undefined" &&
          items !== null &&
          items.length !== 0
        ) {
          setShowItems(true);
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, [items]);

  if (showItems) {
    return items
      .slice(0, props.size)
      .map((item) => (
        <SingleItemComponent
          key={item._id}
          imgSrc={item.image[0]}
          imgAlt={item.name}
          itemName={item.name}
          itemPrice={item.price}
        />
      ));
  } else return null;
}

export function NintendoGames(props) {
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    let isMounted = true;
    api.getNintendoGames().then((res) => {
      if (isMounted) {
        setItems(Object.values(res.data.data));
        if (
          typeof items !== "undefined" &&
          items !== null &&
          items.length !== 0
        ) {
          setShowItems(true);
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, [items]);

  if (showItems) {
    return items
      .slice(0, props.size)
      .map((item) => (
        <SingleItemComponent
          key={item._id}
          imgSrc={item.image[0]}
          imgAlt={item.name}
          itemName={item.name}
          itemPrice={item.price}
        />
      ));
  } else return null;
}

export function PsConsoles(props) {
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    let isMounted = true;
    api.getPsConsoles().then((res) => {
      if (isMounted) {
        setItems(Object.values(res.data.data));
        if (
          typeof items !== "undefined" &&
          items !== null &&
          items.length !== 0
        ) {
          setShowItems(true);
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, [items]);

  if (showItems) {
    return items
      .slice(0, props.size)
      .map((item) => (
        <SingleItemComponent
          key={item._id}
          imgSrc={item.image[0]}
          imgAlt={item.name}
          itemName={item.name}
          itemPrice={item.price}
        />
      ));
  } else return null;
}

export function PsAccessories(props) {
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    let isMounted = true;
    api.getPsAccessories().then((res) => {
      if (isMounted) {
        setItems(Object.values(res.data.data));
        if (
          typeof items !== "undefined" &&
          items !== null &&
          items.length !== 0
        ) {
          setShowItems(true);
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, [items]);

  if (showItems) {
    return items
      .slice(0, props.size)
      .map((item) => (
        <SingleItemComponent
          key={item._id}
          imgSrc={item.image[0]}
          imgAlt={item.name}
          itemName={item.name}
          itemPrice={item.price}
        />
      ));
  } else return null;
}

export function PsGames(props) {
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    let isMounted = true;
    api.getPsGames().then((res) => {
      if (isMounted) {
        setItems(Object.values(res.data.data));
        if (
          typeof items !== "undefined" &&
          items !== null &&
          items.length !== 0
        ) {
          setShowItems(true);
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, [items]);

  if (showItems) {
    return items
      .slice(0, props.size)
      .map((item) => (
        <SingleItemComponent
          key={item._id}
          imgSrc={item.image[0]}
          imgAlt={item.name}
          itemName={item.name}
          itemPrice={item.price}
        />
      ));
  } else return null;
}
