const router = require('express').Router();

const blogRoutes = require('./blogRoutes');
const userRoutes = require('./user-routes');


router.use('/blog', blogRoutes);
router.use('/users', userRoutes);

module.exports = router;