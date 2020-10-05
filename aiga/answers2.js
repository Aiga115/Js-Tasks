function getAnswerFunc() {
  var end = document.getElementById("string-6").childNodes[0].nodeValue;
  document.getElementById("string-6").innerHTML = document.getElementById(
    "string-1"
  ).childNodes[0].nodeValue;
  document.getElementById("string-1").innerHTML = document.getElementById(
    "string-3"
  ).childNodes[0].nodeValue;
  document.getElementById("string-3").innerHTML = document.getElementById(
    "string-2"
  ).childNodes[0].nodeValue;
  document.getElementById("string-2").innerHTML = document.getElementById(
    "string-5"
  ).childNodes[0].nodeValue;
  document.getElementById("string-5").innerHTML = document.getElementById(
    "string-4"
  ).childNodes[0].nodeValue;
  document.getElementById("string-4").innerHTML = end;
}

function changeColorFunc() {
  var el = document.querySelectorAll(".element");
  var i;
  for (i = 0; i < el.length; i++) {
    el[i].style.color = "green";
    if (i < 3) {
      el[i].style.color = "red";
    }
  }
}


function getToDoList() {
let todolist = document.getElementById('todolist');
  let tasks = [
    "Buy lemonade",
    "Make toasts",
    "Repair car",
    "Play games",
    "Pet a cat",
  ];
  for (let i = 0; i < tasks.length; i++) {
    let list = document.createElement('li');
    console.log(tasks[i])
    list.className = "task";
    list.innerHTML = tasks[i];
    todolist.appendChild(list);
  }
}

function changeTextFunc() {
  var el = document.querySelectorAll("p");
  for (var i = 0; i < el.length; i++) {
    var newTag = document.createElement("hr");
    el[i].appendChild(newTag);
  }
}

function textManipFunc() {
  let el = document.getElementById("cart-items");
  let replacedEl = document.createTextNode("Canned Fish x 4");

  el.children[1].remove();
  el.replaceChild(replacedEl, el.children[el.children.length-1]);

}


function listOfTasksFunc(){
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    while(true){
        let listPrompt = prompt("Ваш список задач:"," ")

        if(listPrompt==null || listPrompt==0){
            break;
        }


        let li = document.createElement('li');
        li.appendChild(document.createTextNode(listPrompt));
        ul.appendChild(li);
    }
    
}

