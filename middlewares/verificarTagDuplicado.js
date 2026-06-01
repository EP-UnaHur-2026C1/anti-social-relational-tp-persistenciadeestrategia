const { Tag } = require("../models");

const verificarTagDuplicado = async (req, res, next) => {
  try {
    const { name } = req.body;

    const tagExistente = await Tag.findOne({ where: { name } });

    if (tagExistente) {
      return res.status(400).json({ message: "El tag ya existe" });
    }

    next();
  } catch (error) {
    res.status(500).json({ error: "Error al verificar el tag" });
  }
};

module.exports = verificarTagDuplicado;
