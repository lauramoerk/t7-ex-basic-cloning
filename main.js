//This is the object that you should use to "populate" the template
const gitHop = {
  name: "GitHop",
  imgSrc: "githop.png",
  description: "FooBar's Venom Ale",
};

//Step 1: Chose the <template>'s content
const templateElement = document.querySelector("#myBeerTemplate").content;

//Make a clone
const myClone = templateElement.cloneNode(true);

//Step 3: Change the content of the clone

myClone.querySelector("h1").textContent = `${gitHop.name}`;
myClone.querySelector("img").src = `${gitHop.imgSrc}`;
myClone.querySelector("p").textContent = `${gitHop.description}`;

//use the data from the object above (you can do this when the rest is working)

//Step 4: Chose the new "parent" element
//Append it to main

const parentElement = document.querySelector("main");
parentElement.appendChild(myClone);

//Step 5: Add (Append) the clone to the DOM

