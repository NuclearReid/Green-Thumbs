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
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize season flags for each plant
            plantData.spring = false;
            plantData.summer = false;
            plantData.winter = false;
            plantData.autumn = false;
            return plantData;
        }).filter((plant) => plant.plantLocation.includes("VIC"));
    
        // I had to do a loop in a loop to go over each spot in the season array individually
    statePlants.forEach(plant => {
      plant.plantSeason.forEach(season => {
        if (season === 'Spring') {
          plant.spring = true;
        } else if (season === 'Summer') {
          plant.summer = true;
        } else if (season === 'Winter') {
          plant.winter = true;
        } else if (season === 'Autumn') {
          plant.autumn = true;
        }
      });
    });
    res.render("vic", { statePlants });
} catch (error) {
    res.status(500).json(error);
}
});

router.get("/qld", async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const statePlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize season flags for each plant
            plantData.spring = false;
            plantData.summer = false;
            plantData.winter = false;
            plantData.autumn = false;
            return plantData;
        }).filter((plant) => plant.plantLocation.includes("QLD"));
    // I had to do a loop in a loop to go over each spot in the season array individually

    statePlants.forEach(plant => {
      // console.log(plantSeasonArray);
      plant.plantSeason.forEach(season => {

        console.log('whatever');
        console.log('plant.plantSeason ',plant.plantSeason);
        if (season === 'Spring') {
          plant.spring = true;
        } else if (season === 'Summer') {
          plant.summer = true;
        } else if (season === 'Winter') {
          plant.winter = true;
        } else if (season === 'Autumn') {
          plant.autumn = true;
        }
      });
    });


    res.render("qld", { statePlants });
  } catch (error) {
      res.status(500).json(error);
  }
});

router.get("/sa", async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const statePlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize season flags for each plant
            plantData.spring = false;
            plantData.summer = false;
            plantData.winter = false;
            plantData.autumn = false;
            return plantData;
        }).filter((plant) => plant.plantLocation.includes("SA"));
    // I had to do a loop in a loop to go over each spot in the season array individually

    statePlants.forEach(plant => {
      // console.log(plantSeasonArray);
      plant.plantSeason.forEach(season => {

        console.log('whatever');
        console.log('plant.plantSeason ',plant.plantSeason);
        if (season === 'Spring') {
          plant.spring = true;
        } else if (season === 'Summer') {
          plant.summer = true;
        } else if (season === 'Winter') {
          plant.winter = true;
        } else if (season === 'Autumn') {
          plant.autumn = true;
        }
      });
    });


    res.render("sa", { statePlants });
  } catch (error) {
      res.status(500).json(error);
  }
});


router.get("/wa", async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const statePlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize season flags for each plant
            plantData.spring = false;
            plantData.summer = false;
            plantData.winter = false;
            plantData.autumn = false;
            return plantData;
        }).filter((plant) => plant.plantLocation.includes("WA"));
    // I had to do a loop in a loop to go over each spot in the season array individually

    statePlants.forEach(plant => {
      // console.log(plantSeasonArray);
      plant.plantSeason.forEach(season => {

        console.log('whatever');
        console.log('plant.plantSeason ',plant.plantSeason);
        if (season === 'Spring') {
          plant.spring = true;
        } else if (season === 'Summer') {
          plant.summer = true;
        } else if (season === 'Winter') {
          plant.winter = true;
        } else if (season === 'Autumn') {
          plant.autumn = true;
        }
      });
    });


    res.render("wa", { statePlants });
  } catch (error) {
      res.status(500).json(error);
  }
});

router.get("/nsw", async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const statePlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize season flags for each plant
            plantData.spring = false;
            plantData.summer = false;
            plantData.winter = false;
            plantData.autumn = false;
            return plantData;
        }).filter((plant) => plant.plantLocation.includes("NSW"));
    // I had to do a loop in a loop to go over each spot in the season array individually

    statePlants.forEach(plant => {
      // console.log(plantSeasonArray);
      plant.plantSeason.forEach(season => {

        console.log('whatever');
        console.log('plant.plantSeason ',plant.plantSeason);
        if (season === 'Spring') {
          plant.spring = true;
        } else if (season === 'Summer') {
          plant.summer = true;
        } else if (season === 'Winter') {
          plant.winter = true;
        } else if (season === 'Autumn') {
          plant.autumn = true;
        }
      });
    });


    res.render("nsw", { statePlants });
  } catch (error) {
      res.status(500).json(error);
  }
});


router.get("/tas", async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const statePlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize season flags for each plant
            plantData.spring = false;
            plantData.summer = false;
            plantData.winter = false;
            plantData.autumn = false;
            return plantData;
        }).filter((plant) => plant.plantLocation.includes("TAS"));
    // I had to do a loop in a loop to go over each spot in the season array individually

    statePlants.forEach(plant => {
      // console.log(plantSeasonArray);
      plant.plantSeason.forEach(season => {

        console.log('whatever');
        console.log('plant.plantSeason ',plant.plantSeason);
        if (season === 'Spring') {
          plant.spring = true;
        } else if (season === 'Summer') {
          plant.summer = true;
        } else if (season === 'Winter') {
          plant.winter = true;
        } else if (season === 'Autumn') {
          plant.autumn = true;
        }
      });
    });


    res.render("tas", { statePlants });
  } catch (error) {
      res.status(500).json(error);
  }
});

router.get("/act", async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const statePlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize season flags for each plant
            plantData.spring = false;
            plantData.summer = false;
            plantData.winter = false;
            plantData.autumn = false;
            return plantData;
        }).filter((plant) => plant.plantLocation.includes("ACT"));
    // I had to do a loop in a loop to go over each spot in the season array individually

    statePlants.forEach(plant => {
      // console.log(plantSeasonArray);
      plant.plantSeason.forEach(season => {

        console.log('whatever');
        console.log('plant.plantSeason ',plant.plantSeason);
        if (season === 'Spring') {
          plant.spring = true;
        } else if (season === 'Summer') {
          plant.summer = true;
        } else if (season === 'Winter') {
          plant.winter = true;
        } else if (season === 'Autumn') {
          plant.autumn = true;
        }
      });
    });


    res.render("act", { statePlants });
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
