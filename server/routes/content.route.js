const express = require("express");
const router = express.Router();
const contentController = require("../controllers/content.controller");

router.post("/create", contentController.createContent);

router.get("/getallcontent", contentController.getAllContent);

module.exports = router;
