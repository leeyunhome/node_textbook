const express = require('express')

const router = express.Router();

// GET /user 라우터
router.get('/', (req, res) => {
    // res.send('Hello, User').
    res.redirect('/some/path');
});

module.exports = router;