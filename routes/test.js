const express = require("express");
const router = express.Router();
const { getTest, postTest } = require("../controllers/test");
const { checkAuth } = require("../middlewares/test");

router.get("/", checkAuth, getTest);
router.post("/", postTest);
module.exports = router;