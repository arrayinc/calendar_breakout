// drag and drop functions
const allowDrop = (e) => e.preventDefault();

const drag = (e) => {
  e.dataTransfer.setData("text", e.target.id);
 }

const drop = (e) => {
  e.preventDefault();
  let data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
}


