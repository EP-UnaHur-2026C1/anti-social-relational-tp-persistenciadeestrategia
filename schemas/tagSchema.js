const Joi = require("joi");

const tagSchema = Joi.object({
  name: Joi.string().trim().min(2).max(30).required().messages({
    "string.base": "El nombre debe ser texto",
    "string.empty": "El nombre es obligatorio",
    "string.min": "El nombre debe tener al menos 2 caracteres",
    "string.max": "El nombre no puede superar los 30 caracteres",
    "any.required": "El nombre es obligatorio",
  }),
});

module.exports = tagSchema;
