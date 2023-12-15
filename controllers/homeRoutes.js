const router = require('express').Router();
const { Plant, User, UserPlants } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all plants and JOIN with user data
    const plantData = await Plant.findAll({
      // include: [
      //   {
      //     model: User,
      //     attributes: ['plant_name'],
      //   },
      // ],
    });

    // Serialize data so the template can read it
    const plants = plantData.map((plant) => plant.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { plants });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/plant/:id', async (req, res) => {
  try {
    const plantData = await Plant.findByPk(req.params.id, {
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });

    const plant = plantData.get({ plain: true });

    res.render('plant', {
      ...plant,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: UserPlants }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }

  res.render('login');
});

module.exports = router;