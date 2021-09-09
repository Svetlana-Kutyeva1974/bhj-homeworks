
let tasks = document.querySelector("div.tasks__list");
const but = document.querySelector("button.tasks__add");
let nodes = tasks.children;
//let nodes = nodesAll.querySelector("task__remove");
let child = nodes.length-1;


let item = "";
tasks.innerHTML = "";

  function addTask (item) {
  tasks.innerHTML += `
    <div class="task">
      <div class="task__title">
       ${item}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
`;
  child += 1;
}

function ClickNode() {
  event.preventDefault();
  //nodes.removeChild(`${nodes[child]}`);
  nodes[child].remove();
}

const onKey = (e) => {
    console.log(e.key, e.code);
    if (e.code === "Enter") {
      event.preventDefault();
      addTask(item);
      item = "";
      document.querySelector(".tasks__input").value = "";// очистка поля ввода
     // tasks.lastElementChild.scrollIntoView(false);//в конец окна
     //(nodes[child].querySelector("a.task__remove")).addEventListener('click', ClickNode);
     (nodes[child].lastElementChild).addEventListener('click', ClickNode);
    }
    else
    {
      item += `${e.key}`;
      console.log(item);
    }
}

function onClick(event) {
    document.addEventListener('keydown', onKey);
}

document.querySelector("div.card").addEventListener('click', onClick);






/*for (let node of nodes) {
  console.log(node.textContent);
  console.log(node.querySelector("a.task__remove"));
  node.querySelector("a.task__remove").addEventListener('click', function ClickNode() {

   // node.querySelector("a.task__remove").closest("div.task").removeChild(node);
    nodes.removeChild(node);
    event.preventDefault();
    return; 
  });
}
*/
