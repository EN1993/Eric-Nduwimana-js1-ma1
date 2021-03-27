
// Answer question 1

const cat = [
{
  complain: "Meow!"
}
];
console.log(cat);



// Answer question 2

const heading = document.querySelector ("h3");

heading.innerHTML ="Updated heading";



// Answer question 3

heading.style.fontSize = "2em";



// Answer question 4

heading.className ="subheading";



// Answer question 5

const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);
 
 for (let i=0; i < paragraphs.length; i++){
  
 paragraphs[i].style.color = "red"; 
 };
 
 
  
 //Answer question 6

 const resultsContainer = document.querySelector(".results");

   resultsContainer.innerHTML = "<p>New paragraph</p>";
   resultsContainer.style.background = "yellow";

 

//Answer question 7

function animalList (list) {

  const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

  for (i = 0; i < cats.length; i++){
    console.log(cats[i].name);
  }
}

animalList("list");


// Answer question 8

const cats = [
  {
      name: "Blob",
      age: 10
  },
  {
      name: "Harold",
  },
  {
      name: "Blurt",
      age: 21
  }
];

const assignCatsConteiner = document.querySelector (".cat-container");

let html = "";

for (let i = 0; i < cats.length; i++) {
  
let unknown =  "Age unknown"  ;

if (cats[i].age !==cats[i].age ) {
 
  unknown = cats[i].age;
}

html += `<div>
          <h5> Name: ${cats[i].name} </h5>
          <p> Age:  ${cats[i].age} </p>
        </div>
        `;

assignCatsConteiner.innerHTML = html;          
}


