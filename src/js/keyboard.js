const idNameArray = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
];

const ruLowerCaseButtons = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['ShiftL', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'ShiftR'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']
];

// const enLowerCaseButtons = [
//   ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
//   ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
//   ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
//   ['ShiftL', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'ShiftR'],
//   ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']
// ];


const createKeyboardElements = () => {
  for (let i = 0; i < ruLowerCaseButtons.length; i++) {
    let buttonRow = document.createElement('div');
    buttonRow.classList.add('keyboard__row');
    for (let n = 0; n < ruLowerCaseButtons[i].length; n++) {
      const button = document.createElement('div');
      button.innerText = ruLowerCaseButtons[i][n];
      button.id = idNameArray[i][n];
      if (ruLowerCaseButtons[i][n] === 'Backspace' ||
      ruLowerCaseButtons[i][n] === 'Enter' ||
      ruLowerCaseButtons[i][n] === 'ShiftL' ||
      ruLowerCaseButtons[i][n] === 'Ctrl' ||
      ruLowerCaseButtons[i][n] === 'CapsLock') {
        button.classList.add('keyboard__button', 'keyboard__button_long');
      } else if (ruLowerCaseButtons[i][n] === ' ') {
        button.classList.add('keyboard__button', 'keyboard__button_space');
      } else if (ruLowerCaseButtons[i][n] === 'ShiftR') {
        button.classList.add('keyboard__button', 'keyboard__button_shiftR');
      } else if (ruLowerCaseButtons[i][n] === 'Tab') {
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
};

export {createKeyboardElements};