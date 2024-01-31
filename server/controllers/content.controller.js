const { error } = require("@hapi/joi/lib/base");
const httpStatus = require("http-status");
const { contentValidationSchema } = require("../Validations/content.validations");
const services = require("../services");

const contentController = {
  async createContent(req, res, next) {
    try {
      let values = await contentValidationSchema.validateAsync(req.body);

      let content = await services.contentService.createContent(
        values.title,
        values.description,
        values.contentLink
      );

      res.status(httpStatus.OK).send(content);
    } catch (error) {
      next(error);
    }
  },

  async getAllContent(req, res, next) {
    try {
      let allContent = await services.contentService.getContent();

      res.status(httpStatus.OK).send(allContent);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = contentController;
