const { Router } = require("express");
const tagsController = require("../controllers/tagController");

const validarTag = require("../middlewares/validarTag");
const validarTagId = require("../middlewares/validarTagId");
const verificarTagDuplicado = require("../middlewares/verificarTagDuplicado");

const router = Router();

router.get("/", tagsController.obtenerTags);

router.get("/:id", validarTagId, tagsController.obtenerTag);

router.post("/", validarTag, verificarTagDuplicado, tagsController.crearTag);

router.put(
  "/:id",
  validarTagId,
  validarTag,
  verificarTagDuplicado,
  tagsController.actualizarTag,
);

router.delete("/:id", validarTagId, tagsController.eliminarTag);

module.exports = router;
