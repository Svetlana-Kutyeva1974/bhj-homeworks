class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    //this.elseInput = container.querySelector('.status__simbol');
    //this.speedInput = container.querySelector('.status__time');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    //this.speedInput.textContent = this.wordElement.textContent.length;
    //this.elseInput.textContent = this.wordElement.textContent.length;
  }

  registerEvents() {
    const onKey = (e) => {
    (e.key === this.currentSymbol.innerHTML) ? this.success() : this.fail();
    }

    document.addEventListener('keydown', onKey);
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))
























//-----------------------------мусор------------------
/*

/*downGame() {
let timer; 
let x =  this.wordElement.textContent.length; 

function countdown(){  
  this.speedInput.innerHTML = x;//не работает
  //let x = this.wordElement.textContent.length;
console.log(x);
  x--; 
  //this.speedInput.textContent--;
  if (x<0){
    clearTimeout(timer);
    alert('Стоп таймер, время истекло!');
    this.reset();
    return;
  }
  else {
    timer = setTimeout(countdown, 1000);
  }
}
countdown(); // вызов функции

}

*/



//this.downGame(); // вызов функции

