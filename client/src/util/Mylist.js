export const myFoodListItems = JSON.parse(localStorage.getItem('list')) || []

export const myFoodItemCount = myFoodListItems.length