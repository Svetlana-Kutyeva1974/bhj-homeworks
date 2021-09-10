let tasks = document.querySelector("div.tasks__list");
let item = "";

function addTaskHtml (item) {
  tasks.innerHTML += `
    <div class="task">
      <div class="task__title">
       ${item}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
`;
}

function clickNodeRemove () {
  event.preventDefault();
  this.querySelector("a.task__remove").parentNode.remove();
}

function AddElement(){
  event.preventDefault();
  addTaskHtml(item);
  item = "";
  document.querySelector(".tasks__input").value = "";// очистка поля ввода
  document.querySelector("div.tasks__list").addEventListener('click', clickNodeRemove);
}

const onKey = (e) => {
  (e.code === "Enter" || e.code === "NumpadEnter") ? AddElement() : item += `${e.key}` ;
}

function onClick(event) {
    document.addEventListener('keydown', onKey);
}

document.querySelector("input.tasks__input").addEventListener('input', onClick);
document.querySelector("button.tasks__add").addEventListener('click', AddElement);

