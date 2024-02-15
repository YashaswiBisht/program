// Data models
class User {
    constructor(name) {
      this.name = name;
      this.shoppingLists = [];
      this.pantry = [];
    }
  }
  
  class Ingredient {
    constructor(name, expirationDate) {
      this.name = name;
      this.expirationDate = expirationDate;
    }
  }
  
  class PantryItem {
    constructor(ingredient, quantity) {
      this.ingredient = ingredient;
      this.quantity = quantity;
    }
  }
  
  class Recipe {
    constructor(name, ingredients) {
      this.name = name;
      this.ingredients = ingredients;
    }
  }
  
  // User interface functions
  function createShoppingList(user) {
    const list = new ShoppingList(user);
    user.shoppingLists.push(list);
    return list;
  }
  
  function addItemToShoppingList(list, itemName) {
    list.items.push(itemName);
  }
  
  function suggestRecipes(user, ingredients) {
    // Fetch recipes from an API or use a local dataset
    const recipes = getRecipesBasedOnIngredients(ingredients);
    return recipes;
  }
  
  function checkForExpiringPantryItems(user) {
    const today = new Date();
    user.pantry.forEach(item => {
      if (item.ingredient.expirationDate < today) {
        displayNotification(`${item.ingredient.name} is expiring soon!`);
      }
    });
  }
  
  // Main application
  const user = new User('John Doe');
  const shoppingList = createShoppingList(user);
  addItemToShoppingList(shoppingList, 'Apples');
  
  const ingredients = ['Chicken', 'Garlic', 'Onion'];
  const recipes = suggestRecipes(user, ingredients);
  console.log('Recipes:', recipes);
  
  checkForExpiringPantryItems(user);