const Joi = require("@hapi/joi");

const urlRegex =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;

const contentValidationSchema = Joi.object({
  title: Joi.string().min(2).max(225).required(),
  description: Joi.string().max(225).required(),
  contentLink: Joi.string()
    .pattern(new RegExp(urlRegex))
    .error(new Error("Invalid URL"))
    .required(),
});

module.exports = { contentValidationSchema };
