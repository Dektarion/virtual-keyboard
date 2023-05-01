import {idNameArray, ruLowerCaseButtons, ruCapsCaseButtons, ruShiftCaseButtons, ruShiftCapsCaseButtons, enCapsCaseButtons, enLowerCaseButtons, enShiftCaseButtons, enShiftCapsCaseButtons} from './keyboards-array.js';
import {keyboardMouse} from './mouse-keyboard.js';

let arrayButtons = []

const createKeyboardElements = (language, caps, shift) => {
  if (language === 'ru') {
    if (shift === false && caps === false) {
      arrayButtons = ruLowerCaseButtons.map((item)=>{
        return [...item]
      });
    } else if (shift === true && caps === false) {
      arrayButtons = ruShiftCaseButtons.map((item)=>{
        return [...item]
      });
    } else if (shift === true && caps === true) {
      arrayButtons = ruShiftCapsCaseButtons.map((item)=>{
        return [...item]
      });
    } else if (caps === true) {
      arrayButtons = ruCapsCaseButtons.map((item)=>{
        return [...item]
      });
    }
  } else if (language === 'en') {
    if (shift === false && caps === false) {
      arrayButtons = enLowerCaseButtons.map((item)=>{
        return [...item]
      });
    } else if (shift === true && caps === false) {
      arrayButtons = enShiftCaseButtons.map((item)=>{
        return [...item]
      });
    } else if (shift === true && caps === true) {
      arrayButtons = enShiftCapsCaseButtons.map((item)=>{
        return [...item]
      });
    } else if (caps === true) {
      arrayButtons = enCapsCaseButtons.map((item)=>{
        return [...item]
      });
    }
  }

  for (let i = 0; i < arrayButtons.length; i++) {
    let buttonRow = document.createElement('div');
    buttonRow.classList.add('keyboard__row');
    for (let n = 0; n < arrayButtons[i].length; n++) {
      const button = document.createElement('div');
      button.innerText = arrayButtons[i][n];
      button.id = idNameArray[i][n];
      if (arrayButtons[i][n] === 'Backspace' ||
      arrayButtons[i][n] === 'Enter' ||
      arrayButtons[i][n] === 'ShiftL' ||
      arrayButtons[i][n] === 'Ctrl' ||
      arrayButtons[i][n] === 'CapsLock') {
        button.classList.add('keyboard__button', 'keyboard__button_long');
      } else if (arrayButtons[i][n] === ' ') {
        button.classList.add('keyboard__button', 'keyboard__button_space');
      } else if (arrayButtons[i][n] === 'ShiftR') {
        button.classList.add('keyboard__button', 'keyboard__button_shiftR');
      } else if (arrayButtons[i][n] === 'Tab') {
        button.classList.add('keyboard__button', 'keyboard__button_tab');
      } else {
        button.classList.add('keyboard__button');
      }
      buttonRow.append(button);
    }
  const keyboardContainer = document.querySelector('.keyboard');
  keyboardContainer.append(buttonRow);
  }

  document.getElementById('KeyW').classList.add('keyboard__button_red');
  document.getElementById('KeyA').classList.add('keyboard__button_red');
  document.getElementById('KeyS').classList.add('keyboard__button_red');
  document.getElementById('KeyD').classList.add('keyboard__button_red');
  document.getElementById('Tab').classList.add('keyboard__button_blue');
  document.getElementById('CapsLock').classList.add('keyboard__button_blue');
  document.getElementById('ShiftLeft').classList.add('keyboard__button_blue');
  document.getElementById('ControlLeft').classList.add('keyboard__button_blue');
  document.getElementById('OSLeft').classList.add('keyboard__button_blue');
  document.getElementById('AltLeft').classList.add('keyboard__button_blue');
  document.getElementById('AltRight').classList.add('keyboard__button_blue');
  document.getElementById('ArrowLeft').classList.add('keyboard__button_blue');
  document.getElementById('ArrowDown').classList.add('keyboard__button_blue');
  document.getElementById('ArrowRight').classList.add('keyboard__button_blue');
  document.getElementById('ControlRight').classList.add('keyboard__button_blue');
  document.getElementById('ShiftRight').classList.add('keyboard__button_blue');
  document.getElementById('ArrowUp').classList.add('keyboard__button_blue');
  document.getElementById('Enter').classList.add('keyboard__button_blue');
  document.getElementById('Delete').classList.add('keyboard__button_blue');
  document.getElementById('Backspace').classList.add('keyboard__button_blue');

  keyboardMouse();


};

const removeKeyboardRow = () => {
  const keyboardContainer = document.querySelector('.keyboard');
  keyboardContainer.innerHTML = '';
}



export {createKeyboardElements, removeKeyboardRow};