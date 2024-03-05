// var title = document.firstElementChild.lastElementChild.firstElementChild;

var list = document.getElementsByTagName("li");
var button = document.getElementsByClassName("btn");
var title = document.getElementById("title");
var ul = document.querySelector("#list");
var bing = document.querySelector("#list a");
var div = document.createElement("div")

// title.innerHTML = "hello FSW 1 luar biasa !!!"
// title.style.color = "blue"

coba.textContent = "halo falah"

list[1].style.color = "green";
list[0].style.color = "red";
list[1].style.fontSize = "50px";
list[0].style.fontSize = "60px";

button[0].style.color = "purple";

title.style.color = "blue";
title.innerHTML = "Kalian luar biasa";
title.textContent = "Hellow FSW 1"

bing.style.borderBottom = "thick solid black";
bing.classList.add("bg-yellow");

console.log(list.length);