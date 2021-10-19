//create 'containers'

let calArr = [];
let updatedCalArr = [];
let checkArr = [];

function Calendar(name, time) {
  this.name = name;
  this.time = time;
}

let studentArr = ["Alex", "Anthony", "Bowen", "Dustin", "Ethan", "Katie", "Shawn", "Steve", "Taylor", "Trevor", "Rison", "Solomon"];

// drag and drop functions
const allowDrop = (e) => e.preventDefault();

const drag = (e) => {
  e.dataTransfer.setData("text", e.target.id);
  e.dataTransfer.setData("name", e.target.text);
}

const drop = (e) => {
  e.preventDefault();
  pillDrop(e);
}

//create student list box
const studentList = document.querySelector(".student-list")

for (let i = 0; i < studentArr.length; i++) {
  let studentPill = document.createElement("a")
  studentPill.draggable = "true";
  studentPill.setAttribute("ondragstart", "drag(event)");
  studentPill.id = `drag${i}`
  studentPill.classList.add('pill');
  let bgColor = Math.floor(Math.random()*16777215).toString(16)
  studentPill.style.backgroundColor = `#${bgColor}`;
  studentPill.classList.add(`${studentArr[i]}`)
  studentPill.innerHTML = `${studentArr[i]}`
  studentList.appendChild(studentPill)
}





//place pill
const pillDrop = (e) => {
  if (e.target.innerHTML === "" || e.target.tagName === "DIV") {
    let data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }
}




