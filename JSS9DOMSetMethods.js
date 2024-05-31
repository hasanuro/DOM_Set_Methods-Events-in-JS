//-----------------------------------------------DOM SET METHODS-------------------------------------------------------
let ele; //decalare

//1-INNERTEXT
// ele = document.getElementById("k").innerText="<H1>HELLOOO!</H1>";
// console.log(ele);

//2-INNERHTML
// ele = document.getElementById("k").innerHTML="<H1>HELLOOO!</H1>";
// console.log(ele);

//3-setattrribute
// ele = document.getElementById("k").setAttribute("style","border:5px dotted green"); //set attribute
// ele = document.getElementById("k").getAttribute("class");//get attribute
// console.log(ele);

//4-attribute
ele = document.getElementById("k").attributes[0].value="UroojBaji"; //set attribute
ele = document.getElementById("k").getAttribute("class");//get attribute
console.log(ele);

//5-remove attribute
// ele = document.getElementById("dz").removeAttribute("class") //set attribute
// console.log(ele);