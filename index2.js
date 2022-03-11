const tasklist = []


const name1 = 0
function addTask(){
    const name1 = document.getElementById("addName").value
// console.log(name1)
    
const tempobj = {
    taskName : name1
    
}
tasklist.push(tempobj);
console.log(tasklist)

addTaskOnScreen()
}

function addTaskOnScreen(){

    const element = document.createElement("div")
    element.setAttribute("Class","child")
    element.innerText = tasklist[tasklist.length-1].taskName
    const existingelement = document.getElementById("parent");
    existingelement.appendChild(element)
}