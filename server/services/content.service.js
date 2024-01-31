const { error } = require("@hapi/joi/lib/base");
const { Content } = require("../models/content");

const createContent = async (title, description, contentLink) => {
  try {
    const content = new Content({ title, description, contentLink });
    await content.save();
    return content;
  } catch (error) {
    throw error;
  }
};

const getContent = async () => {
  try {
    const content = await Content.find({}).sort({ createdAt: "desc" }).limit(10);
    return content;
  } catch {
    throw error;
  }
};

module.exports = { createContent, getContent };
