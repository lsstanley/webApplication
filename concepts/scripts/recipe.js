


var ul=document.getElementById("texty");
fetch("https://raw.githubusercontent.com/lsstanley/webApplication/temp/concepts/recipe.json")
  .then((resp)=>resp.json())
  .then(json => console.log(json))
  .then(function(data){
     let info=data.recipe;
    return info.map(function(info){
    let li=document.createElement(li);
    li.innerHtml='${info.recipename} ';
    ul.appendChild(li);
  })
})
.catch(function(error){
  console.log(error);
});

// changeNextRecipe(){
//
// }
// changeLastRecipe(){
//
// }
// changeMethod(){
//
// }
// changeIngredients(){
//
// }
