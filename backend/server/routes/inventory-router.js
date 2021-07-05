const express = require("express");

const InventoryCtrl = require("../controllers/inventory-ctrl");

const router = express.Router();

router.post("/item", InventoryCtrl.createItem);
router.put("/item/:id", InventoryCtrl.updateItem);
router.delete("/item/:id", InventoryCtrl.deleteItem);
router.get("/item/:id", InventoryCtrl.getItemById);
router.get("/consoles", InventoryCtrl.getAllConsoles);
router.get("/consoles/playstation", InventoryCtrl.getPsConsoles);
router.get("/consoles/xbox", InventoryCtrl.getXboxConsoles);
router.get("/consoles/nintendo", InventoryCtrl.getNintendoConsoles);
router.get("/accessories/playstation", InventoryCtrl.getPsAccessories);
router.get("/accessories/xbox", InventoryCtrl.getXboxAccessories);
router.get("/accessories/nintendo", InventoryCtrl.getNintendoAccessories);
router.get("/games/playstation", InventoryCtrl.getPsGames);
router.get("/games/xbox", InventoryCtrl.getXboxGames);
router.get("/games/nintendo", InventoryCtrl.getNintendoGames);

module.exports = router;
