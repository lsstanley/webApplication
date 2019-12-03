var recipeName=[];
var recipeDescription=[];
var recipeMethod=[];
var recipeIngredients=[];
var src=[];
var counter=0;
var ul=document.getElementById("ingredients/method");
var title=document.getElementById("title");
var desc=document.getElementById("decription");
let T=document.createElement('H1');
let D=document.createElement('p');
let img=document.getElementByClass("reciPic");
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
    src[counter]=`${recipe.picture}`;
    recipeIngredients[counter]=`${recipe.Ingredients}`.split(",");
    recipeMethod[counter]=`${recipe.method}`.split(",");
    for (var i = 0; i < recipeIngredients[0].length ; i++) {
    if(counter==0){
      let Li=document.createElement('li');
      Li.innerHTML=recipeIngredients[counter][i];
      ul.appendChild(Li);
    }
    }
    counter++;
    img.src=src[0];
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
  ul.innerHTML = "";
  if (counter<recipeName.length){
    counter++
  }
  else{
    counter=0;
  }
  for (var i = 0; i < recipeIngredients[counter].length; i++) {
    let Li=document.createElement('li');
    Li.innerHTML=recipeIngredients[counter][i];
    img.src=src[counter];
    ul.appendChild(Li);
  }

  T.innerHTML=recipeName[counter];
  title.appendChild(T);

}
function changeLastRecipe(){
  ul.innerHTML = "";
  if (counter!==0){
    counter--;
  }
  else{
    counter=recipeName.length;
  }
  for (var i = 0; i < recipeIngredients[counter].length; i++) {
    let Li=document.createElement('li');
    Li.innerHTML=recipeIngredients[counter][i];
    ul.appendChild(Li);
  }
  img.src=src[counter];
  T.innerHTML=recipeName[counter];
  title.appendChild(T);

}
function changeMethod(){
  ul.innerHTML = "";
  for (var i = 0; i < recipeMethod[0].length ; i++) {
    let Li=document.createElement('li');
    Li.innerHTML=recipeMethod[counter][i];
    ul.appendChild(Li);
  }

}
function changeIngredients(){
  ul.innerHTML = "";
  for (var i = 0; i < recipeIngredients[0].length ; i++) {
    let Li=document.createElement('li');
    Li.innerHTML=recipeIngredients[counter][i];
    ul.appendChild(Li);
  }
}
