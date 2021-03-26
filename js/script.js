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

const assignCatsConteiner = document.querySelector (".cat-container");

function createCats(cats) {
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



for (let i = 0; i < cats.length; i++) {
  
let html = "";

let unkownAge =  "Age unknown"  ;
if (cats[i].age !== cats[i].age) {
  unkownAge = cats[i].age;
}
 
html +=  '<div class="pet">'
               
            "<h5> §{cats[i].name}</h5> "
          
            "<p> §{cats[i].age}</p>"
              
          '</div>';
        

}
return html
}

createCats(cats);
assignCatsConteiner.innerHTML = html;
