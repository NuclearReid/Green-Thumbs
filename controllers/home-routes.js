const router = require("express").Router();
const { Blog, Plant, User } = require("../models");
// const withAuth = require('../utils/auth');

router.get("/", (req, res) => {
  try {
    res.render("landing");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/profile", (req, res) => {
  try {
    res.render("profile");
  } catch (error) {}
});

// the states routes
router.get("/vic", async (req, res) => {
  try {
    const dbVicPlantData = await Plant.findAll(
        // {
    //    where:{
    //         plantLocation: {
    //             [Op.contains]: ["VIC"] // Check if 'VIC' is in the plantLocation array
    //         },
    //     },
    // }
    );
    const vicPlants = dbVicPlantData.map((plant) =>
      plant.get({ plain: true })
    );
    res.render("vic", {
      vicPlants: vicPlants,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/qld", (req, res) => {
  try {
    res.render("qld");
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/sa", (req, res) => {
  try {
    res.render("subTropic");
  } catch (error) {
    res.status(500).json(error);
  }
});

// wa
router.get("/wa", async (req, res) => {
    try {
        const dbAllPlantData = await Plant.findAll();      
        
        const statePlants = dbAllPlantData
        .map((plant) => plant.get({ plain: true }))
        .filter((plant) => plant.plantLocation.includes("WA"));
        
        // if plantSeason == 'spring'
        // spring = true
        // else if 
            //summer = true

        res.render("wa", {
          statePlants: statePlants,
          // spring 
          //sumer


        });
      } catch (error) {
        res.status(500).json(error);
      }
});




router.get("/nsw", (req, res) => {
  try {
    res.render("nsw");
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/tas", (req, res) => {
  try {
    res.render("tas");
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/act", (req, res) => {
  try {
    res.render("act");
  } catch (error) {
    res.status(500).json(error);
  }
});

// add a plant page
router.get("/addPlant", (req, res) => {
  try {
    res.render("addPlant");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
