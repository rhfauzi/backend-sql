const express = require("express");
const router = express.Router();

const {
  addData,
  getAll,
  getOne,
  updateById,
  deleteById,

  getByCountryId,
  countTokoh,
  likeName
} = require("./controller");

router.post("/", addData);

router.get("/", getAll);
router.get("/id/:id", getOne);
router.get("/country/:id", getByCountryId);
router.get("/count", countTokoh);
router.get("/like/:name", likeName);

router.put("/id/:id", updateById);
router.delete("/id/:id", deleteById);

module.exports = router;
