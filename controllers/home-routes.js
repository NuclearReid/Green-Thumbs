const router = require('express').Router();
// const {blogPost, Comment, User} = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('landing');
})

module.exports = router;