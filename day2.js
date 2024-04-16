const inputBox  = document.getElementById("input-box");
const listcontainer  = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML =inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}
// for check and uncheck when you click int he container and remoe when you cllick on the cross sign
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    saveData();

    }
}, false);

// create a fi=unction for store the value which you are write in the input section when you refressh the page

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);

}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();

