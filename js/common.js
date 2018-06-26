function recipeList() {

	var recipes, recipeCount, recipeListWrap, i;

	recipes = [
		{
			type: "Mains",
			nationality: "Thai",
			date: "5th March 2016",
			title: "Thai Yellow Curry Noodles with Shiitake Mushrooms",
			img: "recipe1.jpg"
		},
		{
			type: "Mains",
			nationality: "Italian",
			date: "17th March 2016",
			title: "Cappellini with Cherry Tomatoes and Fresh Basil",
			img: "recipe2.jpg"
		},
		{
			type: "Mains",
			nationality: "Italian",
			date: "4th April 2016",
			title: "Baked Turkey Sausage and Mascarpone Stuffed Shells",
			img: "recipe3.jpg"
		},
		{
			type: "Mains",
			nationality: "Italian",
			date: "24th May 2016",
			title: "Caramelised Apple and Herb Fiocchi",
			img: "recipe4.jpg"
		},
		{
			type: "Mains",
			nationality: "Spanish",
			date: "25th May 2016",
			title: "Pumpkin Beer Cheese Soup",
			img: "recipe5.jpg"
		},
		{
			type: "Mains",
			nationality: "Thai",
			date: "22nd September 2016",
			title: "Yum Woon Sen with Shrimp (Glass noodle salad with Shrimp)",
			img: "recipe6.jpg"
		},
		{
			type: "Mains",
			nationality: "Thai",
			date: "5th March 2016",
			title: "Beef Satay",
			img: "recipe7.jpg"
		},
		{
			type: "Mains",
			nationality: "French",
			date: "29th October 2016",
			title: "Creamy French Onion Soup Dip in a Bread Bowl",
			img: "recipe8.jpg"
		},
		{
			type: "Mains",
			nationality: "Spanish",
			date: "11th November 2016",
			title: "Bocadillo Bites",
			img: "recipe9.jpg"
		},
		{
			type: "Mains",
			nationality: "Spanish",
			date: "12th November 2016",
			title: "Paella",
			img: "recipe10.jpg"
		},
		{
			type: "Mains",
			nationality: "Thai",
			date: "24th December 2016",
			title: "Spicy Black Bean Burger",
			img: "recipe11.jpg"
		},
		{
			type: "Mains",
			nationality: "Italian",
			date: "5th January 2017",
			title: "Fresh Fig and Pistachio Salad",
			img: "recipe12.jpg"
		},
	];

	recipeCount = recipes.length;
	recipeListWrap = document.getElementById('recipeListWrap');

	for (i = 0; i < recipeCount; i++) {
	    recipeListItem = document.createElement('li');

	    recipeListItem.innerHTML = "<div class='list-inner" + " " + recipes[i].nationality + " " + recipes[i].type + "'><div class='recipe-content'><div class='recipe-details'><p class='date'>" + recipes[i].date + "</p><p class='nationality'>" + recipes[i].nationality + "</p></div><p class='recipe-title'>" + recipes[i].title + "</p></div><div class='recipe-img' style='background-image: url(img/" + recipes[i].img + "'></div></div>";
	    recipeListItem.classList.add(recipes[i].nationality,recipes[i].type,"show");
	    recipeListWrap.appendChild(recipeListItem);
	}
}

function filterRecipes() {
	var italian = document.getElementById('italian'),	
		french = document.getElementById('french'),
		spanish = document.getElementById('spanish'),
		peruvian = document.getElementById('peruvian'),
		chinese = document.getElementById('chinese'),
		indian = document.getElementById('indian'),
		thai = document.getElementById('thai'),
		norwegian = document.getElementById('norwegian'),
		polish = document.getElementById('polish'),
		danish = document.getElementById('danish'),
		belgian = document.getElementById('belgian'),
		persian = document.getElementById('persian');

	if (italian.checked == true) {	
		var recipeItems = document.getElementsByClassName('show');

		for (i = 0; i < recipeItems; i++) {
			if(recipeItems.classList.contains('Italian')) {
				recipeItems.classList.add('show');
			} else {
				recipeItems.classList.remove('show');
			}
		}
	}
}

recipeList();
filterRecipes();

function mobileNav() {
	var nav = document.getElementById('Nav');
    nav.classList.add('active');
    return false;
}

function closeNav() {
	var nav = document.getElementById('Nav');
    nav.classList.remove('active');
    return false;
}

function toggleFilter() {
	var filter = document.getElementById('filterBottom');
	var filterBtn = document.getElementById('filterIcon');
	filter.classList.toggle('hide-filter');
	filterBtn.classList.toggle('fa-plus');
	return false;
}