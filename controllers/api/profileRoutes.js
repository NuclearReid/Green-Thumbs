// profileRoutes.js
const router = require('express').Router();
const path = require('path');
const { User } = require('../../models');

// // Route for the profile page
// router.get('/profile', async (req, res) => {
//   try {
//     // Assuming the user ID is stored in the session after login
//     const userId = req.session.user_id;

//     if (!userId) {
//       return res.redirect('/login'); // Redirect to login if user is not logged in
//     }

//     // Fetch user details from the database
//     const user = await User.findByPk(userId);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Render the profile page with user data
//     res.render('profile', { user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json(error);
//   }
// });

// module.exports = router;


router.get('/profile/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.render('profile', { user });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});
