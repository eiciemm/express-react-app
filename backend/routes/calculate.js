const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
  const width = req.body.width;
  const height = req.body.height;
  const result = (width * height) / 2
  //   res.json(req.body)
  res.json({ result });
});

module.exports = router;
