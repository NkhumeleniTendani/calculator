const digits = document.querySelectorAll('.digit')
const opps = document.querySelectorAll('.opp')
const clear = document.querySelector('.clear')
document.querySelector('#CE').addEventListener('click', clearEntry)

document.querySelector('#AC').addEventListener('click', clearAll)
document.querySelector('#equal').addEventListener('click', calculate)
document.querySelector('#dot').addEventListener('click', dotPressed)


//digitPressed function
for (let i = 0; i < digits.length; i++) {
  digits[i].addEventListener('click', digitPressed)
}

//oppPressed function
for (var i = 0; i < opps.length; i++) {
  opps[i].addEventListener('click', oppPressed)
}



let screen1 = document.querySelector('#screen1')
let screen2 = document.querySelector('#screen2')

let currentValue = '';
let calcValue = '';
let previousAnswer = '';


function digitPressed() {
  if (currentValue.length <= 15) {
    let val = this.innerHTML;

    if (currentValue == '') {
      currentValue = val;
    } else {
      currentValue += val;
    }
    screen(currentValue);
  }
}

function oppPressed() {

  let val = this.innerHTML;

  if (!currentValue && previousAnswer) {
    currentValue = previousAnswer;
  }

  if (currentValue[currentValue.length - 1] == '.') {
    currentValue = current.slice(0 - 1)
  }

  if (currentValue) {
    calcValue += '' + currentValue + '' + val
  } else {
    calcValue = calcValue.slice(0, -1) + val;
  }
  currentValue = '';
  showCalc(calcValue);
}

function dotPressed() {
  if (currentValue == '' || currentValue == '0') {
    currentValue = '0.'
  } else if (!/\./.test(currentValue)) {
    currentValue += '.';
  }
  screen(currentValue);
}
  function clearEntry() {
    currentValue = '';
    screen('0');
  }

  function clearAll() {
    currentValue = '';
    screen('0');
    calcValue = '';
    showCalc('');
  }

  function calculate() {
    let answer = calcValue + currentValue;
    answer = answer.replace('×', '*').replace('/', '/')
    answer = eval(answer);
    screen(answer)

    calcValue += '' + currentValue + '=' + answer
    showCalc(calcValue)
    currentValue = '';
    calcValue = '';
  }

  function screen(text) {
    screen1.innerHTML = text;
  }

  function showCalc(text) {
    screen2.innerHTML = text;
  }
