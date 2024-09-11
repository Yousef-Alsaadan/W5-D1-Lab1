//Q1
let h1Tage = document.getElementsByClassName("h1_tag")[0].style;

h1Tage.color = "white";
h1Tage.backgroundColor = "green";


//Q2
let pTag = document.getElementById("p_tag");

pTag.style.fontWeight = "Bold";
pTag.classList.add("change_color");


//Q3
document.getElementsByTagName("img")[0].src = "https://i.pinimg.com/originals/f9/25/3d/f9253df87c7b020e9461e4c64ee99704.jpg";


//Q4
let listTag = document.querySelector("ul");

for (let i = 1; i <= 3; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `item ${i}`; 
    let listStyle = listTag.appendChild(listItem);
    listStyle.style.color = "green";
    listStyle.style.border = "1px solid black";
}


//Q5
let tableMain = document.getElementsByClassName("table_main")[0];

for (let i = 0 ; i < 2; i++) {
    let row = tableMain.insertRow();
    for (j = 0; j < 3; j++) {
        let col = row.insertCell();
        row.style.border = "1px solid black";
        col.style.border = "1px solid black";
        col.textContent = `cell NO. ${i}.${j}`
        col.style.padding = "3rem";
    }
}