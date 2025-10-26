const colorInputField = document.getElementById("colorInputField");
const mainColorDisplay = document.getElementById("mainColorDisplay");
const hiddenColorPicker = document.getElementById('hiddenColorPicker');
const blueButton = document.getElementById("blueButton");
const greenButton = document.getElementById("greenButton");
const amberButton = document.getElementById("amberButton");

function updateMainColor(colorvalue){
    mainColorDisplay.style.backgroundColor = colorvalue;
    colorInputField.value = colorvalue;
    document.body.style.backgroundColor = colorvalue;
}

colorInputField.addEventListener("input", function(){
  const enteredcolor = colorInputField.value;
  updateMainColor(enteredcolor);
});

mainColorDisplay.addEventListener('click', function(){
     hiddenColorPicker.click();
})

hiddenColorPicker.addEventListener('input', function(){
    const chosenHex = hiddenColorPicker.value;
    updateMainColor(chosenHex);
})
function handleButtonClick(event){
    const buttonId = event.currentTarget.id;
    let colorName;
    if (buttonId === "blueButton"){
        colorName = 'blue';
    }else if (buttonId === 'greenButton'){
        colorName = 'green';
    }else if (buttonId === 'amberButton'){
        colorName = 'amber';
    }

    if ( colorName){
        updateMainColor(colorName);
    }
}

blueButton.addEventListener('click', handleButtonClick);
greenButton.addEventListener('click', handleButtonClick);
amberButton.addEventListener('click', handleButtonClick);

updateMainColor('black');