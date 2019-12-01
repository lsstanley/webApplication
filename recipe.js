var recipeName=[];
var recipeDescription=[];
var recipePic=[];
var recipeMethod=[];
var recipeIngredients=[];
var counter=0;
var text=document.getElementById("ingredients/method");
var title=document.getElementById("title");
var desc=document.getElementById("desc");
let P=document.createElement('p');
let T=document.createElement('H1');
let D=document.createElement('p');

fetch("https://raw.githubusercontent.com/lsstanley/webApplication/temp/concepts/recipe.json")
  .then((resp)=>resp.json())
  .then(function(data){
    console.log(data);
     let info=data.recipes;
    return info.map(function(recipe){
    recipeName[counter]=`${recipe.recipename}`;
    recipeDescription[counter]=`${recipe.desc}`;
    recipePic[counter]=`${recipe.picture}`;
    recipeMethod[counter]=`${recipe.method}`;
    recipeIngredients[counter]=`${recipe.Ingredients}`;
    counter++;
    P.innerHTML=recipeMethod[0];
    T.innerHTML=recipeName[0];
    D.innerHTML-recipeDescription[0];
    desc.appendChild(D);
    text.appendChild(P);
    title.appendChild(T);
  })
})
.catch(function(error){
  console.log(error);
});

function changeNextRecipe(){
  if (counter<5){
    counter++
  }
  else{
    counter=0;
  }
  P.innerHTML=recipeIngredients[counter];
  T.innerHTML=recipeName[counter];
  text.appendChild(P);
  title.appendChild(T);

}
function changeLastRecipe(){
  if (counter!=0){
    counter--
  }
  else{
    counter=5;
  }
  P.innerHTML=recipeIngredients[counter];
  T.innerHTML=recipeName[counter];
  text.appendChild(P);
  title.appendChild(T);

}
function changeMethod(){
  P.innerHTML=recipeMethod[counter];
  text.appendChild(P);
}
function changeIngredients(){
  P.innerHTML=recipeIngredients[counter];
  text.appendChild(P);
}
