const express = require('express');
const router = express.Router();

router.get('/', (req , res) => {
    res.end('hello word')
});


module.exports = router;