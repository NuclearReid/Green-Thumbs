const cron = require('node-cron');
const { Plant } = require('../models'); // Adjust the path as necessary
const readline = require('readline');
const { Op } = require('sequelize'); // Import Op for advanced operators

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to determine the current season in southern hemisphere
function getCurrentSeason() {
    const now = new Date();
    const year = now.getFullYear();
    const summerStart = new Date(year, 11, 1); // December 1
    const autumnStart = new Date(year, 2, 1);  // March 1
    const winterStart = new Date(year, 5, 1);  // June 1
    const springStart = new Date(year, 8, 1);  // September 1

    if (now >= summerStart || now < autumnStart) return "Summer";
    if (now >= autumnStart && now < winterStart) return "Autumn";
    if (now >= winterStart && now < springStart) return "Winter";
    if (now >= springStart && now < summerStart) return "Spring";
}

function askUserForState(callback) {
    console.log("\nChoose your state (type the abbreviation): \n- NSW\n- VIC\n- QLD\n- TAS\n- NT\n- SA\n- ACT\n- WA");
    rl.question("State: ", answer => {
        callback(answer.toUpperCase());
    });
}

async function findPlantsForSeasonAndState(season, state) {
    try {
        const plants = await Plant.findAll({
            where: {
                plantSeason: {
                    [Op.like]: `%${season}%` // AR note: I don't think this is right 
                },
                plantLocation: {
                    [Op.like]: `%${state}%` // AR note: I don't think this is right 
                }
            }
        });

        if (plants && plants.length > 0) {
            console.log(`\nIt's ${season}! Let's review what you can plant in ${state}:`);
            plants.forEach(plant => {
                console.log(`- ${plant.plantName} (${plant.plantType}): ${plant.plantDescription}`);
            });
        } else {
            console.log(`No plants found for ${season} in ${state}.`);
        }

        rl.close();
    } catch (error) {
        console.error('Error fetching plants:', error);
        rl.close();
    }
}

function alertForNewSeasonPlants() {
    const currentSeason = getCurrentSeason();
    askUserForState(state => {
        findPlantsForSeasonAndState(currentSeason, state);
    });
}

// Scheduling tasks for the start of each season at 00:00 on the first day

// December 1 - Start of Summer
cron.schedule('0 0 1 12 *', () => {
    console.log("It's the start of a new season!");
    alertForNewSeasonPlants();
});

// March 1 - Start of Autumn
cron.schedule('0 0 1 3 *', () => {
    console.log("It's the start of a new season!");
    alertForNewSeasonPlants();
});

// June 1 - Start of Winter
cron.schedule('0 0 1 6 *', () => {
    console.log("It's the start of a new season!");
    alertForNewSeasonPlants();
});

// September 1 - Start of Spring
cron.schedule('0 0 1 9 *', () => {
    console.log("It's the start of a new season!");
    alertForNewSeasonPlants();
});
