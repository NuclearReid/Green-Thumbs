const newPlantFormHandler = async (event) => {
  event.preventDefault();
  console.log("start of the form");

  // gets the value of what has been typed in for the plant name & description
  const plantName = document.querySelector("#plantName-input").value;
  const plantDescription = document.querySelector(
    "#plantDescription-input"
  ).value;

  // this just gets the value of what has been selected from the drop down
  const plantTypeDropdown = document.querySelector("#plantType");
  const plantType = plantTypeDropdown.value;

  // gets the info from the checkboxes                              v-- works by selecting the checkboxes with ids end in '-checkboxState'
  const plantLocationCheckboxes = document.querySelectorAll(
    '[id$="-checkboxState"]'
  );
  // makes an array of value of those chcheckboxes
  const checkedPlantLocations = Array.from(plantLocationCheckboxes)
    // filters out the unchecked ones
    .filter((checkbox) => checkbox.checked)
    // maps those values over a new array
    .map((checkbox) => checkbox.value);

  const plantSeasonCheckboxes = document.querySelectorAll(
    '[id$="-checkboxSeason'
  );
  const checkedPlantSeasons = Array.from(plantSeasonCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  // just some logs to make sure we're getting the correct data
  console.log(`The plant name: ${plantName}`);
  console.log(`The plant description: ${plantDescription}`);
  console.log(`The plant types are: ${plantType}`);
  console.log(`The checked plant locations are: ${checkedPlantLocations}`);
  console.log(`The checked plant seasons are: ${checkedPlantSeasons}`);

  // the POST to the api, to add to the database
  const response = await fetch("/api/plant/newPlant", {
    method: "POST",
    body: JSON.stringify({
      // sending all the data to the plant table
      plantName,
      plantDescription,
      plantType: plantType,
      plantLocation: checkedPlantLocations,
      plantSeason: checkedPlantSeasons,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    // document.location.replace("/profile");
  }
};

document
  .querySelector(".newPlant")
  .addEventListener("submit", newPlantFormHandler);
