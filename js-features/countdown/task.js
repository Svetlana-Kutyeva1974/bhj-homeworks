/*fuction countdown ();
{
const elementTimer = document.getElementById("timer");
const count = Number(elementTimer.textContent);
console.log(count);
	if (count === 0 ) {
		//clearInterval(id);
		alert("Вы победили в конкурсе!");
	}
	else {
		count -= 1;
		elementTimer.textContent = count;
		}  
}


let id = setInterval(countdown,1000);
*/

/*


const countdown = function ()
{
const elementTimer = document.getElementById("timer");

const count = +elementTimer.textContent;
	if (count <= 0 ) {
		alert("Вы победили в конкурсе!");
		clearInterval(id);
	}
	else {
		count -= 1;
		elementTimer.textContent = count;
		}  
}


let id = setInterval(countdown, 1000);

*/


const elementTimer = document.getElementById("timer");
let i = +elementTimer.textContent;

const countdown = function ()
{
	if (i === 0 ) {
		alert("Вы победили в конкурсе!");
		clearInterval(id);
		location = "http://www.mozilla.org";
		//window.location();
	}
	else {
		i -= 1;
		if (i < 10)
		elementTimer.textContent = `00:00:0${i}`;
			else {
				elementTimer.textContent = `00:00:${i}`;
			} 

		}  
}


let id = setInterval(countdown, 1000);

