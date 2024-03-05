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
        const dbAllPlantData = await Plant.findAll();      
        
        const statePlants = dbAllPlantData
        .map((plant) => plant.get({ plain: true }))
        .filter((plant) => plant.plantLocation.includes("VIC"));

        res.render("vic", {
          statePlants: statePlants,
        });
      } catch (error) {
        res.status(500).json(error);
      }
});

router.get("/qld", async (req, res) => {
    try {
        const dbAllPlantData = await Plant.findAll();      
        
        const statePlants = dbAllPlantData
        .map((plant) => plant.get({ plain: true }))
        .filter((plant) => plant.plantLocation.includes("QLD"));

        res.render("qld", {
          statePlants: statePlants,
        });
      } catch (error) {
        res.status(500).json(error);
      }
});
router.get("/sa", async (req, res) => {
    try {
        const dbAllPlantData = await Plant.findAll();      
        
        const statePlants = dbAllPlantData
        .map((plant) => plant.get({ plain: true }))
        .filter((plant) => plant.plantLocation.includes("SA"));

        res.render("sa", {
          statePlants: statePlants,
        });
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

        res.render("wa", {
          statePlants: statePlants,
        });
      } catch (error) {
        res.status(500).json(error);
      }
});




router.get("/nsw", async (req, res) => {
    try {
        const dbAllPlantData = await Plant.findAll();      
        
        const statePlants = dbAllPlantData
        .map((plant) => plant.get({ plain: true }))
        .filter((plant) => plant.plantLocation.includes("NSW"));

        res.render("nsw", {
          statePlants: statePlants,
        });
      } catch (error) {
        res.status(500).json(error);
      }
});


router.get("/tas", async (req, res) => {
    try {
        const dbAllPlantData = await Plant.findAll();      
        
        const statePlants = dbAllPlantData
        .map((plant) => plant.get({ plain: true }))
        .filter((plant) => plant.plantLocation.includes("TAS"));

        res.render("tas", {
          statePlants: statePlants,
        });
      } catch (error) {
        res.status(500).json(error);
      }
});
router.get("/act", async (req, res) => {
    try {
        const dbAllPlantData = await Plant.findAll();      
        
        const statePlants = dbAllPlantData
        .map((plant) => plant.get({ plain: true }))
        .filter((plant) => plant.plantLocation.includes("ACT"));

        res.render("act", {
          statePlants: statePlants,
        });
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
