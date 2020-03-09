//var todos = document.querySelector("ul");

var liNodeList = document.querySelectorAll("li");

function mouseOverFunc(){
    console.log("mouseover");
    this.id ="selected";
 }
function mouseOutFunc(){
    console.log("mouseout");
    this.id ="deselected";
    this.textContent = "Not Focused"
}
function clickFunc(){
    console.log("clicked");
    this.id ="click";
    this.textContent = "Focused"
}
for(var i = 0; i < liNodeList.length; i++){
   let e = liNodeList[i];
   console.log(i, e.id);
   e.addEventListener("mouseover", mouseOverFunc);

   e.addEventListener("mouseout", mouseOutFunc);

   e.addEventListener("click", clickFunc);
}

