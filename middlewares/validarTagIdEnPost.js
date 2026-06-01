const { Tag } = require("../models");

const validarTagIdEnPost = async (req, res, next) => {
  try {
    const { tagId } = req.params;

    if (isNaN(tagId)) {
      return res
        .status(400)
        .json({ message: "El id del tag debe ser numérico" });
    }

    const tag = await Tag.findByPk(tagId);

    if (!tag) {
      return res.status(404).json({ message: "Tag no encontrado" });
    }

    req.tag = tag;

    next();
  } catch (error) {
    res.status(500).json({ error: "Error al validar el tag" });
  }
};

module.exports = validarTagIdEnPost;
