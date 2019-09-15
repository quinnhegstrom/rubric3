var myDemo = document.getElementById("demoparent");
console.log(myDemo.childNodes.length);

var myDemoTags = document.getElementsByTagName("li");

console.log ("Number of li links: " + myDemoTags.length );

var linksInMenu = myDemo.getElementsByTagName("li");

console.log ("Number of Li items in Menu: " + linksInMenu.length);

var myComments = document.getElementById("commantary1");

myComments.setAttribute("align", "right");

myComments.setAttribute("style", "color: blue");

var newItem = document.createElement("li");
var newText = document.createTextNode("Hey, this wasn't here before!");

myDemo.appendChild(newItem);
newItem.appendChild(newText);
function myFunction(){
    var txt;
        txt = "You are awesome!";
    document.getElementById("surprise").innerHTML = txt;
     }