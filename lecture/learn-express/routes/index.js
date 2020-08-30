const express = require('express');
const path = require('path');

const router = express.Router();

// GET / 라우터
router.get('/', (req, res, next) => {
    // res.send('Hello, Express');
    // res.sendFile(path.join(__dirname, '../index.html'));
    // res.render('index', {title: 'Express'});
    res.locals.title = 'Express';
    res.locals.file_flag = file_flag;
    res.render('main');
});

module.exports = router;