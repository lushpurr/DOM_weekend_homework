document.addEventListener('DOMContentLoaded', () => {
    console.log('Breakfast Creator Initialised');

    const newBreakfastChoice = document.querySelector('#breakfast-form');
    newBreakfastChoice.addEventListener('submit', handleBreakfastChoiceSubmit)

    // const firstFood = document.querySelector('#first-food');
    // firstFood.addEventListener('input' , handleFirstFood);


    });

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

    const firstFood = document.createElement('h2');
    firstFood.textContent = form.firstFood.value; // tried to use first-food here as id and didnt like it
    console.log(firstFood);
    breakfastListItem.appendChild(firstFood);

    const secondFood = document.createElement('h2');
    console.log(secondFood);

    secondFood.textContent = form.secondFood.value;
    breakfastListItem.appendChild(secondFood);

    const sauce = document.createElement('h2');
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
