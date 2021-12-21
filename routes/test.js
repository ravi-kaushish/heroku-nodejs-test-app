const express = require("express");
const router = express.Router();
const { getTest, postTest, putTest } = require("../controllers/test");
const { checkAuth } = require("../middlewares/test");

router.get("/", checkAuth, getTest);
router.post("/", checkAuth, postTest);
router.put("/", checkAuth, putTest);
module.exports = router;