document.addEventListener('DOMContentLoaded', () => {
    console.log('Breakfast Creator Initialised');

    const newBreakfastChoice = document.querySelector('#breakfast-form');
    newBreakfastChoice.addEventListener('submit', handleBreakfastChoiceSubmit)

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);


    });
const handleDeleteAllClick = function(event) {
    const breakfastList = document.querySelector('#breakfast-list');
    breakfastList.innerHTML = '';

}

const handleBreakfastChoiceSubmit = function(event) {
    console.log(event);
    event.preventDefault();
    const breakfastListItem = createBreakfastListItem(event.target);
    const breakfastList = document.querySelector('#breakfast-list'); 
    breakfastList.appendChild(breakfastListItem);
    event.target.reset(); // empties our form
}

const createBreakfastListItem = function (form) {
    const breakfastListItem = document.createElement('li'); // creates our li element
    breakfastListItem.classList.add('breakfast-list-item'); // adds our breakfast item, and gives it a class

    const firstFood = document.createElement('h3');
    console.log(firstFood);
    firstFood.textContent = form.firstFood.value; // tried to use first-food here as id and didnt like it
    breakfastListItem.appendChild(firstFood); // appends first food <h3>firstFood</h3> to li

    const secondFood = document.createElement('h3');
    console.log(secondFood);

    secondFood.textContent = form.secondFood.value;
    breakfastListItem.appendChild(secondFood);

    const sauce = document.createElement('h3');
    sauce.textContent = form.sauce.value;
    breakfastListItem.appendChild(sauce);

    return breakfastListItem;




};



            // const outputSpan = document.querySelector('#awesome-output');
            // outputSpan.innerText = event.target.value;
        //   }

          //     const newListItem = document.createElement('li');
//     newListItem.innerText = `I've been added to the DOM by a button!`;










//   handleButtonClick = function () {
//     const newListItem = document.createElement('li');
//     newListItem.innerText = `I've been added to the DOM by a button!`;


  
//     // Text input
  
//     const textInput = document.querySelector("#awesome-input");
//     textInput.addEventListener('input', handleInput);
  
//       // Buttons
//       const button = document.querySelector('#cool-button');
//       button.addEventListener('click', handleButtonClick);
    
//       const secondButton = document.querySelector('#second-button');
//       secondButton.addEventListener('click', handleButtonClick);
      
    
  
  
//   })
  
//   handleInput = function (event) {
//     console.log(event);
//       const outputSpan = document.querySelector('#awesome-output');
//       outputSpan.innerText = event.target.value;
//   }
  
//   handleButtonClick = function () {
//     const newListItem = document.createElement('li');
//     newListItem.innerText = `I've been added to the DOM by a button!`;
    
//     const list = document.querySelector('#cool-list');
//     list.appendChild(newListItem); 
