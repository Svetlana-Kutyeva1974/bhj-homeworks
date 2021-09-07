const arrayInput = Array.from(document.querySelectorAll("input"));
console.log(arrayInput);


addEventListener('change', e => {
  let check = e.target;
  let checkParent = check.closest("ul");
  //let arr = checkParent.firstElementChild.children[1].querySelectorAll("input");
  console.log(check);
  
    if (checkParent.classList.contains("interests_active")) {
    //if (checkParent !== default) {
  	(checkParent.parentNode).querySelector("input").indeterminate = check.checked;
  	//check.checked = true;

  	//check.children.checked = true;
  	//check.children[0].checked = true;
  } else {
  	/*checkParent..children[0].checked = check.checked;
    checkParent.children[1].checked = check.checked;*/
    if (checkParent.firstElementChild.firstElementChild.children[0] == check) {
    let arr = checkParent.firstElementChild.children[1].querySelectorAll("input");
   }
    else {
      let arr = checkParent.lastElementChild.children[1].querySelectorAll("input");
    }
    arr.forEach(child => child.checked = check.checked);

    //children.forEach(child => child.checked = check.checked);
  }
});


