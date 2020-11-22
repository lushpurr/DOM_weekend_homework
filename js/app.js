document.addEventListener('DOMContentLoaded', () => {
    console.log('Breakfast Creator Initialised');

    const newBreakfastChoice = document.querySelector('#breakfast-form');
    newBreakfastChoice.addEventListener('submit', handleBreakfastChoiceSubmit)


    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);


    // search
    const searchBox = document.querySelector('#search');
    searchBox.addEventListener('submit', handleSearchSubmit);



    });

const handleSearchSubmit = function(event) {
    const searchResults = document.querySelector('#breakfast-list');
    // (1) Wait for page to be fully loaded
window.addEventListener("load", function(){
    // (2) Attach key up listener to the search box
    document.getElementById("search").addEventListener("keyup", function(){
      // (3) Get the search term
      var search = this.value.toLowerCase();
  
      // (4) Get all list items
      var all = document.querySelectorAll("#breakfast-list")
  
      // (5) Loop through list items
      // * Show only items that match search term
      for (let i of all) {
        let item = i.innerHTML.toLowerCase();
        if (item.indexOf(search) == -1) {
          i.classList.add("hide");
        } else {
          i.classList.remove("hide");
        }
      }
    });
  });
}

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
    // firstFood.textContent = form.firstFood.value; // tried to use first-food here as id and didnt like it
    breakfastListItem.appendChild(firstFood); // appends first food <h3>firstFood</h3> to li


    const coffee = document.createElement('h3');
    // coffee.textContent = form.coffee.value;
    breakfastListItem.appendChild(coffee);


    const topping = document.createElement('h3');
    // topping.innerText =  form.topping.value;
    breakfastListItem.appendChild(topping);

    const order = document.createElement('p');
    order.innerText = ` Your order is ${this.firstFood.value} pie with ${form.topping.value} on top, and a cup of ${this.coffee.value} coffee!`;
    breakfastListItem.append(order);

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
