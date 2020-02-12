const express = require("express");
const router = express.Router();

const {
  addData,
  getAll,
  getOne,
  updateById,
  deleteById
} = require("./controller");

router.post("/", addData);

router.get("/", getAll);
router.get("/id/:id", getOne);

router.put("/id/:id", updateById);
router.delete("/id/:id", deleteById);

module.exports = router;
