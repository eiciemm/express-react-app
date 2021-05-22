const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
  const text = req.body.message;
  //   res.json(req.body)
  res.json({
    message: text.toUpperCase()
  });
});

module.exports = router;
