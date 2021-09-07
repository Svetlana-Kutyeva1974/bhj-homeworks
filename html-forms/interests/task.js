const arrayInput = Array.from(document.querySelectorAll("input"));
console.log(arrayInput);

function countCheked(arr, check) {
  let count = 0;
  arr.forEach(child => {
   if (child.checked === check.checked) {
     count ++ ;
   }
 });
  return count; 
}

addEventListener('change', e => {
  let check = e.target;
  let checkParent = check.closest("ul");
  
    if (checkParent.classList.contains("interests_active")) {

      let array = checkParent.querySelectorAll("input");
      let parentNodeInput = (checkParent.parentNode).querySelector("input");
      let count = countCheked(array, check);

      if (count !== array.length) {
        (parentNodeInput.checked === check.checked) 
        ? parentNodeInput.indeterminate = check.checked 
        : parentNodeInput.indeterminate = true;
      }
      else {
       parentNodeInput.indeterminate = false;
       parentNodeInput.checked = check.checked;
    	}
   } 
    else {
      let arr = check.closest("label").nextElementSibling.querySelectorAll("input");
      arr.forEach(child => child.checked = check.checked);
    }
});





























//-----------------------мусор-------------------------------------
/*


const arrayInput = Array.from(document.querySelectorAll("input"));
console.log(arrayInput);

function countCheked(arr, check) {
  let count = 0;
  arr.forEach(child => {
   if (child.checked === check.checked) {
     count ++ ;
   }
   console.log("выбрано " + count);
 });
  return count; 
}

addEventListener('change', e => {
  let check = e.target;
  let checkParent = check.closest("ul");
  //let arr = check.closest("label").nextElementSibling.querySelectorAll("input");

  //let arr = checkParent.firstElementChild.children[1].querySelectorAll("input");
  console.log(check);
  
    if (checkParent.classList.contains("interests_active")) {
    // проверяем все ли подузлы выбраны
      let array = checkParent.querySelectorAll("input");
      let parentNodeInput = checkParent.parentNode.querySelector("input");
      let count = countCheked(array, check);

      if (count !== array.length) {
      ((checkParent.parentNode).querySelector("input").checked === check.checked) ?
      (checkParent.parentNode).querySelector("input").indeterminate = check.checked :
      (checkParent.parentNode).querySelector("input").indeterminate = true;
      }
      else {
       (checkParent.parentNode).querySelector("input").indeterminate = false;
       (checkParent.parentNode).querySelector("input").checked = check.checked;
        //
      }
   } 
    else {// узел выбран
      let arr = check.closest("label").nextElementSibling.querySelectorAll("input");
      arr.forEach(child => child.checked = check.checked);
    }
});

*/