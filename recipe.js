const recipesData = {
    "masala-dosa": {
        name: "Masala Dosa",
        ingredients: ["rice", "urad dal", "potato", "onion", "curry leaves", "mustard seeds", "ghee"],
        image: "images/2.png",
        calories: 200,
        fat: 9,
        carbohydrates: 32
    },
    "idli": {
        name: "Idli",
        ingredients: ["rice", "urad dal", "fenugreek seeds", "salt", "water"],
        image: "images/4.png",
        calories: 60,
        fat: 0.8,
        carbohydrates: 13
    },
    "Sambar": {
        name: "Sambar",
        ingredients: ["toor dal", "tamarind", "tomato", "carrot", "onion", "curry leaves", "sambar powder"],
        image: "images/3.png",
        calories: 80,
        fat: 0.9,
        carbohydrates: 33
    },
    "Coconut-Chutney": {
        name: "Coconut Chutney",
        ingredients: ["coconut", "green chili", "curry leaves", "urad dal", "mustard seeds"],
        image: "images/1.png",
        calories: 71,
        fat: 0.5,
        carbohydrates: 22
    },
    "Lemon-Rice": {
        name: "Lemon Rice",
        ingredients: ["rice", "lemon", "curry leaves", "mustard seeds", "peanuts"],
        image: "images/7.png",
        calories: 300,
        fat: 9,
        carbohydrates: 42
    },
    "Butter-Chicken": {
        name: "Butter Chicken",
        ingredients: ["chicken", "butter", "cream", "tomato puree", "garam masala", "ginger-garlic paste"],
        image: "images/8.png",
        calories: 50,
        fat: 0.76,
        carbohydrates: 13
    },
    "Paneer-Tikka": {
        name: "Paneer Tikka",
        ingredients: ["paneer", "yogurt", "bell peppers", "onion", "tikka masala"],
        image: "images/10.png",
        calories: 40,
        fat: 0.77,
        carbohydrates: 18
    },
    "Biryani": {
        name: "Biryani",
        ingredients: ["basmati rice", "chicken", "yogurt", "onions", "spices"],
        image: "images/6.png",
        calories: 30,
        fat: 0.78,
        carbohydrates: 14
    },
    "Chole-Bhature": {
        name: "Chole Bhature",
        ingredients: ["chickpeas", "onion", "tomato", "spices", "flour"],
        image: "images/5.png",
        calories: 40,
        fat: 0.82,
        carbohydrates: 12
    },
    "Aloo-Paratha": {
        name: "Aloo Paratha",
        ingredients: ["potatoes", "wheat flour", "green chili", "cumin seeds", "butter"],
        image: "images/11.png",
        calories: 50,
        fat: 0.5,
        carbohydrates: 11
    },
    "Spaghetti-Carbonara": {
        name: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "eggs", "parmesan cheese", "guanciale", "black pepper"],
        image: "images/9.png",
        calories: 50,
        fat: 0.66,
        carbohydrates: 12
    },
    "Margherita-Pizza": {
        name: "Margherita Pizza",
        ingredients: ["pizza dough", "tomato sauce", "fresh mozzarella", "fresh basil", "olive oil"],
        image: "images/25.png",
        calories: 50,
        fat: 0.96,
        carbohydrates: 12
    },
    "Risotto": {
        name: "Risotto",
        ingredients: ["arborio rice", "chicken broth", "onion", "parmesan cheese", "white wine"],
        image: "images/13.png",
        calories: 30,
        fat: 0.86,
        carbohydrates: 14
    },
    "Lasagna": {
        name: "Lasagna",
        ingredients: ["lasagna noodles", "ground meat", "tomato sauce", "ricotta cheese", "mozzarella cheese"],
        image: "images/14.png",
        calories: 60,
        fat: 0.66,
        carbohydrates: 13
    },
    "Tiramisu": {
        name: "Tiramisu",
        ingredients: ["coffee", "ladyfingers", "mascarpone cheese", "eggs", "cocoa powder"],
        image: "images/15.png",
        calories: 55,
        fat: 0.76,
        carbohydrates: 13
    },
    "fried-rice": {
        name: "Fried Rice",
        ingredients: ["cooked rice", "soy sauce", "vegetables", "eggs", "green onions"],
        image: "images/12.png",
        calories: 300,
        fat: 9,
        carbohydrates: 42
    },
    "Kung-Pao-Chicken": {
        name: "Kung Pao Chicken",
        ingredients: ["chicken", "peanuts", "bell peppers", "soy sauce", "chili peppers"],
        image: "images/16.png",
        calories: 200,
        fat: 10,
        carbohydrates: 23
    },
    "Dumplings": {
        name: "Dumplings",
        ingredients: ["ground meat", "cabbage", "ginger", "garlic", "dumpling wrappers"],
        image: "images/17.png",
        calories: 160,
        fat: 8,
        carbohydrates: 42
    },
    "Sweet-and-Sour-Pork": {
        name: "Sweet and Sour Pork",
        ingredients: ["pork", "pineapple", "bell peppers", "soy sauce", "vinegar"],
        image: "images/18.png",
        calories: 140,
        fat: 7,
        carbohydrates: 12
    },
    "Mapo-Tofu": {
        name: "Mapo Tofu",
        ingredients: ["tofu", "ground pork", "doubanjiang", "garlic", "green onions"],
        image: "images/15.png",
        calories: 150,
        fat: 10,
        carbohydrates: 11
    },
    "Sushi": {
        name: "Sushi",
        ingredients: ["sushi rice", "nori", "fish", "vegetables", "soy sauce"],
        image: "images/20.png",
        calories: 120,
        fat: 8,
        carbohydrates: 21
    },
    "Ramen": {
        name: "Ramen",
        ingredients: ["ramen noodles", "broth", "green onions", "nori", "soft-boiled eggs"],
        image: "images/21.png",
        calories: 10,
        fat: 9,
        carbohydrates: 32
    },
    "Tempura": {
        name: "Tempura",
        ingredients: ["vegetables", "shrimp", "tempura batter", "oil"],
        image: "images/22.png",
        calories: 80,
        fat: 13,
        carbohydrates: 24
    },
    "Takoyaki": {
        name: "Takoyaki",
        ingredients: ["takoyaki flour", "octopus", "green onions", "pickled ginger", "takoyaki sauce"],
        image: "images/23.png",
        calories: 90,
        fat: 14,
        carbohydrates: 20
    },
    "Miso-soup": {
        name: "Miso Soup",
        ingredients: ["miso paste", "tofu", "seaweed", "green onions", "dashi"],
        image: "images/24.png",
        calories: 100,
        fat: 19,
        carbohydrates: 28
    }
};


const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('id');
const recipe = recipesData[recipeId];

document.addEventListener('DOMContentLoaded', function () {
    if (recipe) {
        document.getElementById('recipe-title').textContent = recipe.name;
        document.getElementById('recipe-ingredients').textContent = `Ingredients: ${recipe.ingredients.join(', ')}`;
        document.getElementById('recipe-image').src = recipe.image;
    }
});

document.getElementById('start-test').addEventListener('click', function () {
    const video = document.getElementById('camera-stream');
    video.classList.remove('camera-hidden');

    // Request access to the camera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;

            // Simulate an allergy test result after 3 seconds
            setTimeout(() => {
                const allergyPercentage = Math.floor(Math.random() * 101);
                const allergyResult = document.getElementById('allergy-result');
                allergyResult.textContent = `Allergy Risk: ${allergyPercentage}%`;
                allergyResult.classList.remove('hidden');

                // Display nutritional information
                document.getElementById('calories-info').textContent = `Calories: ${recipe.calories} kcal`;
                document.getElementById('fat-info').textContent = `Fat: ${recipe.fat}g`;
                document.getElementById('carbs-info').textContent = `Carbohydrates: ${recipe.carbohydrates}g`;
                document.getElementById('calories-section').classList.remove('hidden');

                // Stop the video stream after the test
                stream.getTracks().forEach(track => track.stop());
                video.classList.add('camera-hidden');
            }, 3000);
        })
        .catch((error) => {
            console.error('Camera access error:', error);
            alert('Unable to access the camera. Please check permissions.');
        });
});
