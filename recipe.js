var recipeName=[];
var recipeDescription=[];
var recipePic=[];
var recipeMethod=[];
var recipeIngredients=[];
var counter=0;
var ul=document.getElementById("ingredients/method");
var title=document.getElementById("title");
var desc=document.getElementById("decription");
let T=document.createElement('H1');
let D=document.createElement('p');

fetch("https://raw.githubusercontent.com/lsstanley/webApplication/jacks_dev/recipe.json")
  .then((resp)=>resp.json())
  .then(function(data){
    console.log(data);
     let info=data.recipes;
    return info.map(function(recipe){
    recipeIngredients[counter]=[];
    recipeMethod[counter]=[];
    recipeName[counter]=`${recipe.recipename}`;
    recipeDescription[counter]=`${recipe.desc}`;
    recipePic[counter]=`${recipe.picture}`;
    recipeIngredients[counter]=`${recipe.Ingredients}`;
    recipeMethod[counter]=`${recipe.Method}`;
    //for (var i = 0; i < recipeIngredients[0].length ; i++) {
    if(counter==0){
      let Li=document.createElement('li');
      Li.innerHTML=recipeIngredients[counter];
      ul.appendChild(Li);
    }
    //}
    counter++;
    T.innerHTML=recipeName[0];
    D.innerHTML=recipeDescription[0];
    desc.appendChild(D);
    title.appendChild(T);
  })
})
.catch(function(error){
  console.log(error);
});

function changeNextRecipe(){
  if (counter<recipeName.length){
    counter++
  }
  else{
    counter=0;
  }
  //for (var i = 0; i < recipeIngredients[counter].length; i++) {
    let Li=document.createElement('li');
    Li.innerHTML=recipeIngredients[counter];
    ul.appendChild(Li);
  //}

  T.innerHTML=recipeName[counter];

  title.appendChild(T);

}
function changeLastRecipe(){
  if (counter!==0){
    counter--;
  }
  else{
    counter=recipeName.length;
  }
  //for (var i = 0; i < recipeIngredients[counter].length; i++) {
    let Li=document.createElement('li');
    Li.innerHTML=recipeIngredients[counter];
    ul.appendChild(Li);
  //}
  T.innerHTML=recipeName[counter];
  title.appendChild(T);

}
function changeMethod(){
  //for (var i = 0; i < recipeMethod[0].length ; i++) {
    let Li=document.createElement('li');
    Li.innerHTML=recipeMethod[counter];
    ul.appendChild(Li);
  //}
}
function changeIngredients(){
  //for (var i = 0; i < recipeIngredients[0].length ; i++) {
    let Li=document.createElement('li');
    Li.innerHTML=recipeIngredients[counter];
    ul.appendChild(Li);
  //}
}
