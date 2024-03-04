const newPlantFormHandler = async (event) => {
    event.preventDefault();
    console.log('start of the form');

    const plantName = document.querySelector("#plantName-input").value;
    const plantDescription = document.querySelector("#plantDescription-input").value;

    const plantTypeCheckboxes = document.querySelectorAll('.check-plantType');
    const checkedPlantTypes = Array.from(plantTypeCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const plantLocationCheckboxes = document.querySelectorAll('.check-plantLocation');
    const checkedPlantLocations = Array.from(plantLocationCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const plantSeasonCheckboxes = document.querySelectorAll('.check-plantSeason');
    const checkedPlantSeasons = Array.from(plantSeasonCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    console.log(`The plant name: ${plantName}`);
    console.log(`The plant description: ${plantDescription}`);
    console.log(`The checked plant types are: ${checkedPlantTypes}`);
    console.log(`The checked plant locations are: ${checkedPlantLocations}`);
    console.log(`The checked plant seasons are: ${checkedPlantSeasons}`);

    const response = await fetch("/api/plant/newPlant", {
        method: 'POST',
        body: JSON.stringify({ plantName, plantDescription, plantType: checkedPlantTypes, plantLocation: checkedPlantLocations, plantSeason: checkedPlantSeasons }),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        document.location.replace('/profile');
    }
};

document
    .querySelector(".newPlant")
    .addEventListener("submit", newPlantFormHandler);












  
