const router = require('express').Router();
const { User } = require('../../models');


// end route is /api/users

router.get('/', async (req, res) => {
    try {
        const allUsers = await User.findAll();
        if(!allUsers){
            res.status(404).json({message: 'no users found'});
            return;
        }
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json(error);
    }
});

// userRoutes.js
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.redirect(`/profile/${userData.id}`);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });

      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }

      const validPassword = await userData.checkPassword(req.body.password);

      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.json({ user: userData, message: 'You are now logged in!' });
      });

    } catch (err) {
      res.status(400).json(err);
    }
  });

//   router.post('/logout', (req, res) => {
//     // console.log('in POST logout');
//     if (req.session.logged_in) {
//         // console.log('in POST logout');
//       req.session.destroy(() => {
//         res.status(204).end();
//       });
//     } else {
//       res.status(404).end();
//     }
//   });


module.exports = router;