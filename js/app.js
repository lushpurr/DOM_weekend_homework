document.addEventListener('DOMContentLoaded', () => {
    console.log('Breakfast Creator Initialised');

    const firstFood = document.querySelector('#first-food');
    firstFood.addEventListener('input' , handleFirstFood);


    });




const handleFirstFood = function (event) {
    console.log(event);
    const NewBreakfastChoice = document.createElement('li');
    NewBreakfastChoice.textContent = event.target.value ; 

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
