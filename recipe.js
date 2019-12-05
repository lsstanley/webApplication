//declares global variables used to store information from the json file as arrays so that we can store more than one recipe easily
var recipeName = [];
var recipeDescription = [];
var recipeMethod = [];
var recipeIngredients = [];
var src = [];
//decares counter which allows the user to navigate through the arrays of recipe information
var counter = 0;
//declares variables which hold refrences to the html elements with the that id
var ul = document.getElementById("ingredients/method");
var title = document.getElementById("title");
var desc = document.getElementById("decription");
let img = document.getElementById("reciPic");
//creates elements to put information into
let T = document.createElement('H1');
let D = document.createElement('p');
//fetch function asyncrinously takes information from the online json file
fetch("https://raw.githubusercontent.com/lsstanley/webApplication/master/recipe.json")
  //turns the response from the fetch into a readable json file
  .then((resp) => resp.json())
  //function logs all the json data then stores json data into arrays that are specific for each variable in the json
  .then(function(data) {
    console.log(data);
    let info = data.recipes;
    //repeats code until all json data is stored
    return info.map(function(recipe) {
      //declares current iteration of ingredients and method array as an array to store the arrays from the json
      recipeIngredients[counter] = [];
      recipeMethod[counter] = [];
      //allocates current element of each array to thier json counterpart
      recipeName[counter] = `${recipe.recipename}`;
      recipeDescription[counter] = `${recipe.desc}`;
      src[counter] = `${recipe.picture}`;
      //split function used to create an array of the strings ingredients and method
      recipeIngredients[counter] = `${recipe.Ingredients}`.split(",");
      recipeMethod[counter] = `${recipe.method}`.split(",");
      //creates an list item element for each string in ingredients array and puts each element inside the inner HTML for the list item the appends it to the list
      for (var i = 0; i < recipeIngredients[0].length; i++) {
        if (counter == 0) {
          let Li = document.createElement('li');
          Li.innerHTML = recipeIngredients[counter][i];
          ul.appendChild(Li);
        }
      }
      //adds one to counter for the next iteration
      counter++;
      //assigns the intial source for the image ,name and description to its src/inner html then appends it to its place in the html
      img.src = src[0];
      T.innerHTML = recipeName[0];
      D.innerHTML = recipeDescription[0];
      desc.appendChild(D);
      title.appendChild(T);

    })
  })
  //catch method catchs when any error occurs
  .catch(function(error) {
    console.log(error);
  });
//function used to move to the next recipe and update the html corresondingly
function changeNextRecipe() {
  //resets the lists html
  ul.innerHTML = "";
  //adds one to the counter or if the counter is going too far it resets it to 0
  if (counter < recipeName.length - 1) {
    counter++
  } else {
    counter = 0;
  }
  //creates an list item element for each string in ingredients array and puts each element inside the inner HTML for the list item the appends each one to the list
  for (var i = 0; i < recipeIngredients[counter].length; i++) {
    let Li = document.createElement('li');
    Li.innerHTML = recipeIngredients[counter][i];
    ul.appendChild(Li);
  }
  //sets new src for the current recipe
  img.src = src[counter];
  //changes the name and description to the current recipe
  T.innerHTML = recipeName[counter];
  title.appendChild(T);
  D.innerHTML = recipeDescription[0];
  desc.appendChild(D);

}

function changeLastRecipe() {
  //resets the lists html
  ul.innerHTML = "";
  //takes one from the counter or if the counter is going too low it resets it to the max position
  if (counter !== 0) {
    counter--;
  } else {
    counter = recipeName.length - 1;
  }
  //creates an list item element for each string in ingredients array and puts each element inside the inner HTML for the list item the appends each one to the list
  for (var i = 0; i < recipeIngredients[counter].length; i++) {
    let Li = document.createElement('li');
    Li.innerHTML = recipeIngredients[counter][i];
    ul.appendChild(Li);
  }
    //sets new src for the current recipe
  img.src = src[counter];
  //changes the name and description to the current recipe
  T.innerHTML = recipeName[counter];
  title.appendChild(T);
  D.innerHTML = recipeDescription[0];
  desc.appendChild(D);

}
//this function resets the list and changes it from ingredients to method
function changeMethod() {
  //if statement only applicable at start where counter is set to one above the max and corrects it
  if (counter == recipeName.length) {
    counter = 0;
  }
  //clears list inner html so that no other list items exist inside
  ul.innerHTML = "";
  //creates an list item element for each string in method array and puts each element inside the inner HTML for the list item the appends each one to the list
  for (var i = 0; i < recipeMethod[counter].length; i++) {
    let Li = document.createElement('li');
    Li.innerHTML = recipeMethod[counter][i];
    ul.appendChild(Li);
  }

}
//this function resets list of method and changes it to ingredients
function changeIngredients() {
  //if statement only applicable at start where counter is set to one above the max and corrects it
  if (counter == recipeName.length) {
    counter = 0;
  }
  //clears list inner html so that no other list items exist inside
  ul.innerHTML = "";
  //creates an list item element for each string in ingredients array and puts each element inside the inner HTML for the list item the appends each one to the list
  for (var i = 0; i < recipeIngredients[counter].length; i++) {
    let Li = document.createElement('li');
    Li.innerHTML = recipeIngredients[counter][i];
    ul.appendChild(Li);
  }
}
