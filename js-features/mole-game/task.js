let countDead = 0;
let countLost = 0;
let elementLost= document.getElementById("lost");
let elementDead= document.getElementById("dead");

getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i<10; i++)
  {
	getHole(i).onclick = function ()
	{
		if (getHole(i).className === "hole hole_has-mole") {
			countDead ++;
		}
		else {
			countLost ++;
		}

		elementLost.textContent = countLost;
		elementDead.textContent = countDead;

		if (countLost === 5 || countDead === 10)  {
			return false;
		}
	}
  }
