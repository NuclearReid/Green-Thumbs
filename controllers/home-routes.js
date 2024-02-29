const router = require('express').Router();
// const {blogPost, Comment, User} = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', (req, res) =>{
    try {
        res.render('landing');
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/login', (req, res) => {
    try {
        res.render('login');
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;