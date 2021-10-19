//create 'containers'

let calArr = [];


function Calendar(name, time) {
  this.name = name;
  this.time = time;
}

let studentArr = ["Alex", "Anthony", "Bowen", "Dustin", "Ethan", "Katie", "Shawn", "Steve", "Taylor", "Trevor", "Rison", "Solomon"];


//create student list box
let studentList = document.querySelector(".student-list")

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


// drag and drop functions
const allowDrop = (e) => {
  e.preventDefault();
}

const drag = (e) => {
  e.dataTransfer.setData("text", e.target.id);
  e.dataTransfer.setData("name", e.target.text);
}

const drop = (e) => {
  e.preventDefault();
  pillDrop(e);
}

//place pill
const pillDrop = (e) => {
  if (e.target.innerHTML === "" || e.target.tagName === "DIV") {
    let data = e.dataTransfer.getData("text");
    let student = e.dataTransfer.getData("name");
    e.target.appendChild(document.getElementById(data));
    let slot = e.target.id
    let cal = `${student}Calendar`
    cal = new Calendar(student, slot)
    if (e.target.tagName !== "DIV") {
      calArr.push(cal)}
      else {
        calArr.pop(cal)
      }
       (e.target.tagName !== "DIV")? printSchedule(slot, student):printRetraction()
    
  }
}

//create schedule message

const printSchedule = (slot, student) => {
  let day
  let time
  message = document.querySelector('#message')
  switch (slot) {
    case "wed-a": 
      day = "Wednesday";
      time = "10:00";
      break;
    case "wed-b":
      day = "Wednesday";
      time = "10:15";
      break;
    case "wed-c":
      day = "Wednesday";
      time = "10:30";
      break;
    case "wed-d":
      day = "Wednesday";
      time = "10:45";
      break;
    case "thur-a":
      day = "Thursday";
      time = "10:00";
      break;
    case "thur-b":
      day = "Thursday";
      time = "10:15";
      break;
    case "thur-c":
      day = "Thursday";
      time = "10:30";
      break;
    case "thur-d":
      day = "Thursday";
      time = "10:45";
      break;
    case "fri-a":
      day = "Friday";
      time = "10:00"
      break;
    case "fri-b":
      day = "Friday";
      time = "10:15"
      break;
    case "fri-c":
      day = "Friday";
      time = "10:30"
      break;
    case "fri-d":
      day = "Friday";
      time = "10:45"
      break;
    default:
      break;
  }
  message.innerHTML = `${student} will take ${day} at ${time}`
}

const printRetraction = () => {
  message = document.querySelector('#message')
  message.innerHTML = "no, they won't."
}

