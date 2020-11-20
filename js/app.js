document.addEventListener('DOMContentLoaded', () => {
    const newBreakfastItem = document.querySelector('#breakfast-form');
    newBreakfastItem.addEventListener('submit', handleNewBreakfastItem);
    console.log('Breakfast Creator Initialised');
})