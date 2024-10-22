const recipesData = {
    "South Indian Dishes": [
        { name: "Masala Dosa", ingredients: ["rice", "urad dal", "potato", "onion", "curry leaves", "mustard seeds", "ghee"], link: "recipe.html?id=masala-dosa", image: "images/2.png", calories: 200, fat: 9, carbohydrates: 32 },
        { name: "Idli", ingredients: ["rice", "urad dal", "fenugreek seeds", "salt", "water"], link: "recipe.html?id=idli", image: "images/4.png", calories: 60, fat: 0.8, carbohydrates: 13 },
        { name: "Sambar", ingredients: ["toor dal", "tamarind", "tomato", "carrot", "onion", "curry leaves", "sambar powder"], link: "recipe.html?id=Sambar", image: "images/3.png", calories: 80, fat: 0.9, carbohydrates: 33 },
        { name: "Coconut Chutney", ingredients: ["coconut", "green chili", "curry leaves", "urad dal", "mustard seeds"], link: "recipe.html?id=Coconut-Chutney",image: "images/1.png", calories: 71, fat: 0.5, carbohydrates: 22},
        { name: "Lemon Rice", ingredients: ["rice", "lemon", "curry leaves", "mustard seeds", "peanuts"], link: "recipe.html?id=Lemon Rice", image: "images/7.png", calories: 300, fat: 9, carbohydrates: 42 },
    ],
    "North Indian Dishes": [
        { name: "Butter Chicken", ingredients: ["chicken", "butter", "cream", "tomato puree", "garam masala", "ginger-garlic paste"], link: "recipe.html?id=Butter-Chicken", image:"images/8.png", calories: 50, fat: 0.76, carbohydrates: 13 },
        { name: "Paneer Tikka", ingredients: ["paneer", "yogurt", "bell peppers", "onion", "tikka masala"], link: "recipe.html?id=Panner-Tikka", image :"images/10.png", calories: 40, fat: 0.77, carbohydrates: 18 },
        { name: "Biryani", ingredients: ["basmati rice", "chicken", "yogurt", "onions", "spices"], link: "recipe.html?id=Biryani", image :"images/6.png", calories: 30, fat: 0.78, carbohydrates: 14 },
        { name: "Chole Bhature", ingredients: ["chickpeas", "onion", "tomato", "spices", "flour"], link: "recipe.html?id=Chole-Bhature", image :"images/5.png", calories: 40, fat: 0.82, carbohydrates: 12 },
        { name: "Aloo Paratha", ingredients: ["potatoes", "wheat flour", "green chili", "cumin seeds", "butter"], link: "recipe.html?id=Aloo-Paratha", image :"images/11.png", calories: 50, fat: 0.5, carbohydrates: 11 }
    ],
    "Italian Dishes": [
        { name: "Spaghetti Carbonara", ingredients: ["spaghetti", "eggs", "parmesan cheese", "guanciale", "black pepper"], link: "recipe.html?id=Spaghetti-Carbonara", image :"images/9.png", calories: 50, fat: 0.66, carbohydrates: 12 },
        { name: "Margherita Pizza", ingredients: ["pizza dough", "tomato sauce", "fresh mozzarella", "fresh basil", "olive oil"], link: "recipe.html?id=Margherita-Pizza", image :"images/25.png", calories: 50, fat: 0.96, carbohydrates: 12 },
        { name: "Risotto", ingredients: ["arborio rice", "chicken broth", "onion", "parmesan cheese", "white wine"], link: "recipe.html?id=Risotto", image :"images/13.png", calories: 30, fat: 0.86, carbohydrates: 14},
        { name: "Lasagna", ingredients: ["lasagna noodles", "ground meat", "tomato sauce", "ricotta cheese", "mozzarella cheese"], link: "recipe.html?id=Lasagna", image :"images/14.png", calories: 60, fat: 0.66, carbohydrates: 13},
        { name: "Tiramisu", ingredients: ["coffee", "ladyfingers", "mascarpone cheese", "eggs", "cocoa powder"], link: "recipe.html?id=Tiramisu", image :"images/15.png", calories: 55, fat: 0.76, carbohydrates: 13}
    ],
    "Chinese Dishes": [
        { name: "Fried Rice", ingredients: ["cooked rice", "soy sauce", "vegetables", "eggs", "green onions"], link: "recipe.html?id=Fried-Rice", image :"images/12.png", calories: 180, fat: 9, carbohydrates: 22},
        { name: "Kung Pao Chicken", ingredients: ["chicken", "peanuts", "bell peppers", "soy sauce", "chili peppers"], link: "recipe.html?id=Kung-Pao-Chicken", image :"images/16.png", calories: 200, fat: 10, carbohydrates: 23},
        { name: "Dumplings", ingredients: ["ground meat", "cabbage", "ginger", "garlic", "dumpling wrappers"], link: "recipe.html?id=Dumplings", image :"images/17.png",calories: 160, fat: 8, carbohydrates: 42},
        { name: "Sweet and Sour Pork", ingredients: ["pork", "pineapple", "bell peppers", "soy sauce", "vinegar"], link: "recipe.html?id=Sweet-and-Sour-Pork", image :"images/18.png", calories: 140, fat: 7, carbohydrates: 12},
        { name: "Mapo Tofu", ingredients: ["tofu", "ground pork", "doubanjiang", "garlic", "green onions"], link: "recipe.html?id=Mapo-Tofu", image :"images/19.png", calories: 150, fat: 10, carbohydrates: 11}
    ],
    "Japanese Dishes": [
        { name: "Sushi", ingredients: ["sushi rice", "nori", "fish", "vegetables", "soy sauce"], link: "recipe.html?id=Sushi", image :"images/20.png", calories: 120, fat: 8, carbohydrates: 21},
        { name: "Ramen", ingredients: ["ramen noodles", "broth", "green onions", "nori", "soft-boiled eggs"], link: "recipe.html?id=Ramen", image :"images/21.png", calories: 10, fat: 9, carbohydrates: 32},
        { name: "Tempura", ingredients: ["vegetables", "shrimp", "tempura batter", "oil"], link: "recipe.html?id=Tempura", image :"images/22.png", calories: 80, fat: 13, carbohydrates: 24},
        { name: "Takoyaki", ingredients: ["takoyaki flour", "octopus", "green onions", "pickled ginger", "takoyaki sauce"], link: "recipe.html?id=Takoyaki", image :"images/23.png", calories: 90, fat: 14, carbohydrates: 20},
        { name: "Miso Soup", ingredients: ["miso paste", "tofu", "seaweed", "green onions", "dashi"], link: "recipe.html?id=Miso Soup", image :"images/24.png", calories: 100, fat: 19, carbohydrates: 28}
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    // Don't display recipes initially; wait for user input
});

document.getElementById('ingredient-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const ingredientsInput = document.getElementById('ingredients').value.trim().toLowerCase();
    if (!ingredientsInput) {
        // If no input is provided, clear the recipe list
        const recipeList = document.getElementById('recipe-list');
        recipeList.innerHTML = '<li class="list-group-item">Please enter ingredients to search for recipes.</li>';
        return;
    }

    const ingredients = ingredientsInput.split(',').map(ingredient => ingredient.trim().toLowerCase());

    // Filter recipes based on user input
    const filteredRecipes = {};
    for (const [category, recipes] of Object.entries(recipesData)) {
        filteredRecipes[category] = recipes.filter(recipe =>
            ingredients.every(ingredient =>
                recipe.ingredients.some(recipeIngredient =>
                    recipeIngredient.toLowerCase().includes(ingredient)
                )
            )
        );
    }

    displayRecipes(filteredRecipes);
});

function displayRecipes(data) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    for (const [category, recipes] of Object.entries(data)) {
        if (recipes.length > 0) {
            // Add the category name as a list header
            const categoryItem = document.createElement('li');
            categoryItem.className = 'list-group-item active';
            categoryItem.textContent = category;
            recipeList.appendChild(categoryItem);

            // Add each recipe under the category
            recipes.forEach(recipe => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.innerHTML = `
                    <h5>${recipe.name}</h5>
                    <img src="${recipe.image}" alt="${recipe.name}" class="img-thumbnail mb-2" style="max-width: 150px;">
                    <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
                    <a href="${recipe.link}" class="btn btn-sm btn-secondary">View Recipe</a>
                `;
                recipeList.appendChild(listItem);
            });
        }
    }

    // Show a message if no recipes match the filter
    if (!recipeList.innerHTML) {
        recipeList.innerHTML = '<li class="list-group-item">No recipes found.</li>';
    }
}
