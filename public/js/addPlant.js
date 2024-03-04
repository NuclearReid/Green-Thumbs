const newPlantFormHandler = async (event) => {
  event.preventDefault();
  const plantName = document.querySelector("#plantName-input");
  const plantDescription = document.querySelector("#plantDescription-input");
  const plantType = document.querySelector("#plantType");


  // this should be good to return each of the plant type boxes checked
  const plantCheckboxes = document.querySelectorAll('.check-plantType');
    const typeSelectedValues = [];
    plantCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                typeSelectedValues.push(this.value);
            } else {
                const index = typeSelectedValues.indexOf(this.value);
                if (index !== -1) {
                    typeSelectedValues.splice(index, 1);
                }
            }
            console.log(typeSelectedValues); // You can use the selectedValues array as needed
        });
    });


};

document
  .querySelector("newPlant")
  .addEventListener("submit", newPlantFormHandler);


  function getCheckboxValue() {
    var checkbox = document.getElementById('myCheckbox');

    if (checkbox.checked) {
        var checkboxValue = checkbox.value;
        console.log('Checkbox value: ' + checkboxValue);
    } else {
        console.log('Checkbox is not checked');
    }
}