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
});


router.get('/signup', (req, res) => {
    try {
        res.render('signup');
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/profile', (req, res) => {
    try {
        res.render('profile')
    } catch (error) {;
    }
})

router.get('/cool', (req, res) => {
    try {
        res.render('cool');
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get('/hot', (req, res) => {
    try {
        res.render('hot');
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get('/subTropic', (req, res) => {
    try {
        res.render('subTropic');
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get('/tropic', (req, res) => {
    try {
        res.render('tropic');
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get('/warm', (req, res) => {
    try {
        res.render('warm');
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get('/addPlant', (req, res) => {
    try {
        res.render('addPlant');
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;