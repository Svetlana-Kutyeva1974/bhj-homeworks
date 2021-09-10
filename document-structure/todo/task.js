
let tasks = document.querySelector("div.tasks__list");
const but = document.querySelector("button.tasks__add");
let nodes = tasks.children;
//let nodes = nodesAll.querySelector("task__remove");
//let child = nodes.length-1;
//let child = 0;

let item = "";
//tasks.innerHTML = "";

  function addTask (item) {
  tasks.innerHTML += `
    <div class="task">
      <div class="task__title">
       ${item}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
`;
  //child += 1;
}

function ClickNode () {
  event.preventDefault();
  //nodes.removeChild(`${nodes[child]}`);
  console.log(event.target);
  this.querySelector("a.task__remove").parentNode.remove();
  //child -= 1;
}

const onKey = (e) => {
    console.log(e.key, e.code);

    if (e.code === "Enter" || e.code === "NumpadEnter") {
      event.preventDefault();
      addTask(item);
       console.log((nodes.length-1));
      item = "";
      document.querySelector(".tasks__input").value = "";// очистка поля ввода
     // tasks.lastElementChild.scrollIntoView(false);//в конец окна
     //(nodes[child].querySelector("a.task__remove")).addEventListener('click', ClickNode);

     //(nodes[nodes.length-1].lastElementChild).addEventListener('click', ClickNode); 
     //document.querySelector("a.task__remove").addEventListener('click', ClickNode);
     // document.querySelector("div.task").addEventListener('click', ClickNode);
      document.querySelector("div.tasks__list").addEventListener('click', ClickNode);
      //child += 1;
      //event.preventDefault();
    }
    else
    {
      item += `${e.key}`;
    }
}

function onClick(event) {
    document.addEventListener('keydown', onKey);
}

//document.querySelector("div.card").addEventListener('click', onClick);
document.querySelector("input.tasks__input").addEventListener('input', onClick);
