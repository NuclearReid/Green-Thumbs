const router = require('express').Router();

const plantRoutes = require('./plantRoutes');
const userRoutes = require('./user-routes');

router.use('/plant', plantRoutes);
router.use('/users', userRoutes);

module.exports = router;