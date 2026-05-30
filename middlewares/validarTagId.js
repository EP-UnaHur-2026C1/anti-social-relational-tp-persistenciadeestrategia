const { Tag } = require("../models");

const validarTagId = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (isNaN(id)) {
      return res.status(400).json({ message: "El id debe ser numérico" });
    }
    const tag = await Tag.findByPk(id);
    if (!tag) {
      return res.status(404).json({ message: "Tag no encontrado" });
    }
    req.tag = tag;
    next();
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener el tag",
    });
  }
};

module.exports = validarTagId;
