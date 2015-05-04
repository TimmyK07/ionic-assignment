angular.module('starter.data', [])

.factory('Foods', function() {
  // Might use a resource here that returns a JSON array

  // food data. Food (& Activity) objects (with properties) stored in foods array
  var foods = [{
    id: 0,
    name: 'Cereals',
	image: 'img/breakfast-cereal.jpg',
	calories: 150,
	isBreakfastCat: true,
    Description: 'Includes: Cornflakes, Rice-crispies, Wheatabix, Shredded-Wheat, Special-K, Porridge',
    icon: 'img/ion-icons/plus-circled.png'
	
  }, {
    id: 1,
    name: 'Pastries',
	image: 'img/breakfast-croissants.jpg',
	calories: 245,
	isBreakfastCat: true,
    Description: 'Includes: Croissants, Danish, Lattice, Pan de Chocolate, Doenut, Sausage-Roll',
    icon: 'img/ion-icons/plus-circled.png'
  }, {
    id: 2,
    name: 'Cooked',
	image: 'img/breakfast-fryup.jpg',
	calories: 800,
	isBreakfastCat: true,
    Description: 'Includes: Fried Breakfast, French Toast, Scrambled Eggs, Breakfast Sandwich',
    icon: 'img/ion-icons/plus-circled.png'
  }, {
    id: 3,
    name: 'Breads',
	image: 'img/breakfast-bread.jpg',
	calories: 75,
	isBreakfastCat: true,
    Description: 'Includes: Brown bread, Toast, Bagal',
    icon: 'img/ion-icons/plus-circled.png'
  }, {
    id: 4,
    name: 'Fruit',
	image: 'img/breakfast-fruit.jpg',
	calories: 50,
	isBreakfastCat: true,
    Description: 'Includes: Bannana, Apple, Orange, Grapefruit, Berries',
    icon: 'img/ion-icons/plus-circled.png'
  },{
    id: 5,
    name: 'Other',
	image: 'img/breakfast-egg.jpg',
	calories: 65,
	isBreakfastCat: true,
    Description: 'Includes: Yogurt, Smoked Salmon, Boiled Egg',
    icon: 'img/ion-icons/plus-circled.png'
  }
  ,{
    id: 6,
    name: 'Sandwiches',
	image: 'img/lunch-sandwich.jpg',
	calories: 350,
	isLunchCat: true,
    Description: 'Includes: Rolls, Baps, Baguettes, Loaves, Wraps, Toasted sandwiches, Bagals',
    icon: 'img/ion-icons/plus-circled.png'
	
  }, {
    id: 7,
    name: 'Combos',
	image: 'img/lunch-soup-sandwich.jpg',
	calories: 500,
	isLunchCat: true,
    Description: 'Includes: Soup & Sambo, Crisps & Sambo, Chips & Sambo, Sambo & Salad',
    icon: 'img/ion-icons/plus-circled.png'
  }, {
    id: 8,
    name: 'Hot Meals',
	image: 'img/lunch-lasagne.jpg',
	calories: 800,
	isLunchCat: true,
    Description: 'Includes: Pasta, Lasagne, Roast, Chicken & Chips',
    icon: 'img/ion-icons/plus-circled.png'
  }, {
    id: 9,
    name: 'Hot Snacks',
	image: 'img/lunch-pizza.jpg',
	calories: 350,
	isLunchCat: true,
	isDinnerCat: true,
    Description: 'Includes: Baked Potatos, Pizza Slice, Chips, Sausage-Roll, Savoury Pies',
    icon: 'img/ion-icons/plus-circled.png'
  }, {
    id: 10,
    name: 'Salads',
	image: 'img/lunch-salad.jpg',
	calories: 200,
	isLunchCat: true,
	isDinnerCat: true,
    Description: 'Includes: Ceasar Salad, Tuna Nicoise, Greek Salad, Mediteranean Salad, Ploughmans',
    icon: 'img/ion-icons/plus-circled.png'
  },
  
  {
    id: 11,
    name: 'Roast',
	image: 'img/dinner-roast.jpg',
	calories: 700,
	isDinnerCat: true,
    Description: 'Includes: Roast Beef, Roast Chicken, Pork, Bacon & Cabbage, Corned-Beef Hash',
    icon: 'img/ion-icons/plus-circled.png'
  }, {
    id: 12,
    name: 'Steak',
	image: 'img/dinner-steak.jpg',
	calories: 750,
	isDinnerCat: true,
    Description: 'Includes: Steak & Chips, Steak & Potatoes, Steak & Eggs, Steak Sandwich',
    icon: 'img/ion-icons/plus-circled.png'
  }, {
    id: 13,
    name: 'Fish',
	image: 'img/dinner-fish.jpg',
	calories: 550,
	isDinnerCat: true,
    Description: 'Includes: Fish & Chips, Fish & Potatoes, Fish Dinner, Fish & Eggs, Fish Supper',
    icon: 'img/ion-icons/plus-circled.png'
  }, {
    id: 14,
    name: 'Pasta',
	image: 'img/dinner-bolognese.jpg',
	calories: 650,
	isDinnerCat: true,
    Description: 'Includes: Spaghetti Bolognese, Lasagne, Pasta Dinner, Carbonara',
    icon: 'img/ion-icons/plus-circled.png'
  }, {
    id: 15,
    name: 'Curry',
	image: 'img/dinner-curry.jpg',
	calories: 550,
	isDinnerCat: true,
    Description: 'Includes: Thai with Rice, Indian with Rice, Indian with Naan, Indian with Rice & Chips, Indian with Chips',
    icon: 'img/ion-icons/plus-circled.png'
  }, {
    id: 16,
    name: 'Mexican',
	image: 'img/dinner-fajitas.jpg',
	calories: 950,
	isDinnerCat: true,
	isLunchCat: true,
    Description: 'Includes: Tacos, Fajitas, Borittos, Chimichangas, Quesadias',
    icon: 'img/ion-icons/plus-circled.png'
  }, {
    id: 17,
    name: 'Desert',
	image: 'img/desert-chocolate-fondant.jpg',
	calories: 350,
	isDinnerCat: true,
	isLunchCat: true,
	isSnackCat: true,
    Description: 'Includes: Chocolate Pudding, Profiterrolls, Ice-Cream, Spotted Dick, Sticky Toffee Pudding, Cheesecake, Apple Pie',
    icon: 'img/ion-icons/plus-circled.png'
  },
  {
    id: 18,
    name: 'Cold Snacks',
	image: 'img/snacks-crisps.jpg',
	calories: 530,
	isSnackCat: true,
    Description: 'Includes: Crisps, Chocolate Bars, Sweets, Ice-Creams, Iced-Buns, Biscuits.',
    icon: 'img/ion-icons/plus-circled.png'
  },
  {
    id: 19,
    name: 'Alcoholic',
	image: 'img/drinks-wine.jpg',
	calories: 180,
	isDrinkCat: true,
    Description: 'Includes: Pint of Beer, Glass of Wine, Spirits with mixer, alchopops',
    icon: 'img/ion-icons/plus-circled.png'
  },{
    id: 20,
	image: 'img/drinks-soft.jpg',
	calories: 140,
    name: 'Minerals',
	isDrinkCat: true,
    Description: 'Includes: Orange Juice, Can of fizzy drink, Dilutted Fruit Drink',
    icon: 'img/ion-icons/plus-circled.png'
  }, 
  //Activities
  {
    id: 21,
    name: 'Running',
	image: 'img/activities-running.jpg',
	calories: 850,
	isActivity: true,
    Description: 'Calories Score based on 30 minutes of running whether inside or outside.',
    icon: 'img/ion-icons/plus-circled.png'
  },
  {
    id: 22,
    name: 'Swimming',
	image: 'img/activities-swimming.jpg',
	calories: 1000,
	isActivity: true,
    Description: 'Calories Score based on 30 minutes of swimming whether inside or outside.',
    icon: 'img/ion-icons/plus-circled.png'
  },
  {
    id: 23,
    name: 'Cycling',
	image: 'img/activities-cycling.jpg',
	calories: 750,
	isActivity: true,
    Description: 'Calories Score based on 30 minutes of cycling whether inside or outside.',
    icon: 'img/ion-icons/plus-circled.png'
  },{
    id: 24,
	image: 'img/activities-gym.jpg',
	calories: 800,
    name: 'Gym',
	isActivity: true,
    Description: 'Calories Score based on 30 minutes of any form of gym activities.',
    icon: 'img/ion-icons/plus-circled.png'
  } ];
  
  

  return {
    all: function() {
      return foods;
    },
    remove: function(food) {
      foods.splice(foods.indexOf(food), 1);
    },
    get: function(foodId) {
      for (var i = 0; i < foods.length; i++) {
        if (foods[i].id === parseInt(foodId)) {
          return foods[i];
        }
      }
      return null;
    }
  };
});


  
