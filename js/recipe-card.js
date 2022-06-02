// // Create an object to hold information on your favorite recipe. 
// // It should have properties for title (a string), servings (a number), and ingredients (an array of strings). 
// // Your object should have a publicly available method that when called, will log out the recipe within the console so that the recipe information looks like this:

// // Kbbq
// // Serves: 5
// // Ingredients: 
// // - 10pould back lib
// // - 1 onion
// // - 1 Teaspoon garlic
// // - 1/2 Cup Onion
// // - 3 Tablespoons soy sauce
// // - 1 green onion
// // - 4 Teaspoon sugar
// // - 1 sesane oil

	

class Recipe {
	constructor(title, servings, ingredients)  {
		this.title = title;
		this.servings = servings;
		this.ingredients = ingredients;
		console.log(`${this.title} 
Serves: ${this.servings} 
Ingredients: ${this.ingredients}`);
	}
}
const recipe1 = new Recipe('Kbbq', 
- 10pould back lib, '\n - 1 onion \n - 1 Teaspoon garlic  \n - 1/2 Cup Onion\n - 3 Tablespoons soy sauce\n - 1 green onion \n- 4 Teaspoon sugar \n - 1 sesane oil');
console.log('Directions: \n Marinaid all of mixed ingredients into the back-lib one the bowl, and keep it for 2hours in refregerator. and cook it')
