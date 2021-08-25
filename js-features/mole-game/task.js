let countDead = 0;
let countLost = 0;
let elementLost= document.getElementById("lost");
let elementDead= document.getElementById("dead");

getHole = index => document.getElementById(`hole${index}`);

function endGame (message) {
	countLost = 0;
	countDead = 0;
	alert(message);
	//return false;
}

for (let i = 1; i<10; i++)
  {
	getHole(i).onclick = function ()
	{
		let message;

		if (getHole(i).className === "hole hole_has-mole") {
			countDead ++;
		}
		else {
			countLost ++;
		}

		//elementLost.textContent = countLost;
		//elementDead.textContent = countDead;

		if (countLost === 5)  {
			endGame("Игра окончена. Допущено 5 промахов");
		}
		if (countDead === 10) {
			endGame("Вы победили. 10 кротов убито");
		}	
		elementLost.textContent = countLost;
		elementDead.textContent = countDead;
	}
  }
