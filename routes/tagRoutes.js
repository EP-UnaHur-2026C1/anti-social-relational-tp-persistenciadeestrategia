const { Router } = require("express");
const tagController = require("../controllers/tagController");
const validarTag = require("../middlewares/validarTag");
const validarTagId = require("../middlewares/validarTagId");
const router = Router();

router.get("/", tagController.obtenerTags);
router.get("/:id", validarTagId, tagController.obtenerTag);
router.post("/", validarTag, tagController.crearTag);
router.put("/:id", validarTagId, validarTag, tagController.actualizarTag);
router.delete("/:id", validarTagId, tagController.eliminarTag);

module.exports = router;
