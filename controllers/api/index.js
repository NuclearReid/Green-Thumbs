const router = require('express').Router();

const blogRoutes = require('./blogRoutes');
const userRoutes = require('./user-routes');
const plantRoutes = require('./plantRoutes');

router.use('/plant', plantRoutes);
router.use('/users', userRoutes);
router.use('/blog', blogRoutes);



module.exports = router;