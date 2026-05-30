const { Tag } = require("../models");

const obtenerTags = async (req, res) => {
  try {
    const tags = await Tag.findAll({
      attributes: ["id", "name"],
    });
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const obtenerTag = async (req, res) => {
  const tag = req.tag;
  res.status(200).json(tag);
};

const crearTag = async (req, res) => {
  try {
    const { name } = req.body;
    const nuevoTag = await Tag.create({
      name,
    });
    res.status(201).json(nuevoTag);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear el tag",
    });
  }
};

const actualizarTag = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const tag = req.tag;

    await tag.update({ name });
    res.status(200).json(tag);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar el tag",
    });
  }
};

const eliminarTag = async (req, res) => {
  try {
    const { id } = req.params;
    const tag = req.tag;

    await tag.destroy();
    res.status(200).json({
      message: "Tag eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar el tag",
    });
  }
};

module.exports = {
  obtenerTags,
  obtenerTag,
  crearTag,
  actualizarTag,
  eliminarTag,
};
