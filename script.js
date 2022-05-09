const eventCode = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'Backspace',
  'Tab',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'Delete',
  'CapsLock',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Enter',
  'ShiftLeft',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ArrowUp',
  'ShiftRight',
  'ControlLeft',
  'MetaLeft',
  'AltLeft',
  'Space',
  'AltRight',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'ControlRight',
];

const eventKeyCode = [
  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9,
  113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93,
  92, 127, 20, 97, 115, 100, 102, 103, 104, 106, 107, 108,
  59, 39, 13, 16, 122, 120, 99, 118, 98, 110, 109, 44, 46,
  47, 38, 16, 17, 0, 18, 32, 18, 37, 40, 39, 17,
];

const eventLetter = [
  // 0 little RU
  [
    'ё',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'Backspace',
    'Tab',
    'й',
    'ц',
    'у',
    'к',
    'е',
    'н',
    'г',
    'ш',
    'щ',
    'з',
    'х',
    'ъ',
    '\\',
    'Del',
    'CapsLock',
    'ф',
    'ы',
    'в',
    'а',
    'п',
    'р',
    'о',
    'л',
    'д',
    'ж',
    'э',
    'Enter',
    'Shift',
    'я',
    'ч',
    'с',
    'м',
    'и',
    'т',
    'ь',
    'б',
    'ю',
    '.',
    '↑',
    'Shift',
    'Ctrl',
    'win',
    'Alt',
    'Space',
    'Alt',
    '←',
    '↓',
    '→',
    'Ctrl',
  ],
  // 1 little EN
  [
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'Backspace',
    'Tab',
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    '[',
    ']',
    '\\',
    'Del',
    'CapsLock',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    ';',
    "'",
    'Enter',
    'Shift',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    ',',
    '.',
    '/',
    '↑',
    'Shift',
    'Ctrl',
    'win',
    'Alt',
    'Space',
    'Alt',
    '←',
    '↓',
    '→',
    'Ctrl',
  ],
  // 2 Caps RU
  [
    'Ё',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'Backspace',
    'Tab',
    'Й',
    'Ц',
    'У',
    'К',
    'Е',
    'Н',
    'Г',
    'Ш',
    'Щ',
    'З',
    'Х',
    'Ъ',
    '\\',
    'Del',
    'CapsLock',
    'Ф',
    'Ы',
    'В',
    'А',
    'П',
    'Р',
    'О',
    'Л',
    'Д',
    'Ж',
    'Э',
    'Enter',
    'Shift',
    'Я',
    'Ч',
    'С',
    'М',
    'И',
    'Т',
    'Ь',
    'Б',
    'Ю',
    '.',
    '↑',
    'Shift',
    'Ctrl',
    'win',
    'Alt',
    'Space',
    'Alt',
    '←',
    '↓',
    '→',
    'Ctrl',
  ],
  // 3 Caps EN
  [
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'Backspace',
    'Tab',
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    '[',
    ']',
    '\\',
    'Del',
    'CapsLock',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    ';',
    "'",
    'Enter',
    'Shift',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    ',',
    '.',
    '/',
    '↑',
    'Shift',
    'Ctrl',
    'win',
    'Alt',
    'Space',
    'Alt',
    '←',
    '↓',
    '→',
    'Ctrl',
  ],
  // 4 shift RU
  [
    'Ё',
    '!',
    '"',
    '№',
    ';',
    '%',
    ':',
    '?',
    '*',
    '(',
    ')',
    '_',
    '+',
    'Backspace',
    'Tab',
    'Й',
    'Ц',
    'У',
    'К',
    'Е',
    'Н',
    'Г',
    'Ш',
    'Щ',
    'З',
    'Х',
    'Ъ',
    '/',
    'Del',
    'CapsLock',
    'Ф',
    'Ы',
    'В',
    'А',
    'П',
    'Р',
    'О',
    'Л',
    'Д',
    'Ж',
    'Э',
    'Enter',
    'Shift',
    'Я',
    'Ч',
    'С',
    'М',
    'И',
    'Т',
    'Ь',
    'Б',
    'Ю',
    ',',
    '↑',
    'Shift',
    'Ctrl',
    'win',
    'Alt',
    'Space',
    'Alt',
    '←',
    '↓',
    '→',
    'Ctrl',
  ],
  // 5 shift EN
  [
    '~',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '+',
    'Backspace',
    'Tab',
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    '{',
    '}',
    '|',
    'Del',
    'CapsLock',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    ':',
    '"',
    'Enter',
    'Shift',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '<',
    '>',
    '?',
    '↑',
    'Shift',
    'Ctrl',
    'win',
    'Alt',
    'Space',
    'Alt',
    '←',
    '↓',
    '→',
    'Ctrl',
  ],
  /// 6 Caps + shift RU
  [
    'ё',
    '!',
    '"',
    '№',
    ';',
    '%',
    ':',
    '?',
    '*',
    '(',
    ')',
    '_',
    '+',
    'Backspace',
    'Tab',
    'й',
    'ц',
    'у',
    'к',
    'е',
    'н',
    'г',
    'ш',
    'щ',
    'з',
    'х',
    'ъ',
    '\\',
    'Del',
    'CapsLock',
    'ф',
    'ы',
    'в',
    'а',
    'п',
    'р',
    'о',
    'л',
    'д',
    'ж',
    'э',
    'Enter',
    'Shift',
    'я',
    'ч',
    'с',
    'м',
    'и',
    'т',
    'ь',
    'б',
    'ю',
    '.',
    '↑',
    'Shift',
    'Ctrl',
    'win',
    'Alt',
    'Space',
    'Alt',
    '←',
    '↓',
    '→',
    'Ctrl',
  ],
  /// 7 Caps + shift EN
  [
    '~',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '+',
    'Backspace',
    'Tab',
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    '[',
    ']',
    '\\',
    'Del',
    'CapsLock',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    ';',
    "'",
    'Enter',
    'Shift',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    ',',
    '.',
    '/',
    '↑',
    'Shift',
    'Ctrl',
    'win',
    'Alt',
    'Space',
    'Alt',
    '←',
    '↓',
    '→',
    'Ctrl',
  ],
];

const textarea =
  '<div class = "textarea"><textarea name = "textarea" rows="10" cols="100" readonly></textarea></div>';
const body = document.querySelector('body');
body.insertAdjacentHTML('beforeend', textarea);
body.insertAdjacentHTML(
  'afterend',
  '<div class="comment">Made on Windows<br>Change language: Ctrl + Alt</div>'
);

// Хранение языка

let keyBoardSpace = document.createElement('div');
keyBoardSpace.className = 'keyboard';
document.body.append(keyBoardSpace);
let flagLang;
if (localStorage.getItem('language') === 'English') {
  {
    localStorage.setItem('language', 'English');
    init(1);
    flagLang = true;
  }
} else {
  {
    localStorage.setItem('language', 'Russian');
    init(0);
    flagLang = false;
  }
}

//    Создание кнопок

function init(n) {
  let keyPosition = '';
  for (let i = 0; i < 64; i++) {
    if (i == 14 || i == 29 || i == 42 || i == 55) {
      keyPosition += '<div class="clearfix"></div>';
    }
    keyPosition +=
      '<div class="btn ' +
      eventCode[i] +
      '" data = "' +
      eventKeyCode[i] +
      '">' +
      eventLetter[n][i] +
      '</div>';
  }
  document.querySelector('.keyboard').innerHTML =
    keyPosition;
}

let caps = false;
let shift = false;
const textArea = document.querySelector('textarea');

document.onkeydown = (event) => {
  if (!eventCode.includes(event.code)) {
    return;
  }
  switch (event.code) {
    case 'AltLeft':
    case 'AltRight':
    case 'MetaLeft':
      break;
    case 'Backspace':
      textArea.value = textArea.value.substr(
        0,
        textArea.value.length - 1
      );
      break;
    case 'ControlLeft':
    case 'ControlRight':
      CtrlAlt();
      break;
    case 'ShiftRight':
    case 'ShiftLeft':
      shiftOpen();
      break;
    case 'Space':
      textArea.value += ' ';
      break;
    case 'Enter':
      textArea.value += '\n';
      break;
    case 'Tab':
      textArea.value += '   ';
      break;
    case 'CapsLock':
      if (!event.repeat) {
        CapsLock();
      }
      break;
    default:
      if (localStorage.getItem('language') === 'English') {
        if (shift && !caps) {
          textArea.value +=
            eventLetter[5][eventCode.indexOf(event.code)];
        } else if (!shift && !caps) {
          textArea.value +=
            eventLetter[1][eventCode.indexOf(event.code)];
        }
        if (!shift && caps) {
          textArea.value +=
            eventLetter[3][eventCode.indexOf(event.code)];
        }
        if (shift && caps) {
          textArea.value +=
            eventLetter[7][eventCode.indexOf(event.code)];
        }
      } else {
        if (shift && !caps) {
          textArea.value +=
            eventLetter[4][eventCode.indexOf(event.code)];
        } else if (!shift && !caps) {
          textArea.value +=
            eventLetter[0][eventCode.indexOf(event.code)];
        }
        if (!shift && caps) {
          textArea.value +=
            eventLetter[2][eventCode.indexOf(event.code)];
        }
        if (shift && caps) {
          textArea.value +=
            eventLetter[6][eventCode.indexOf(event.code)];
        }
      }
  }

  if (eventCode.indexOf(event.code) != -1) {
    document
      .querySelector('.keyboard > .' + event.code + '')
      .classList.add('active');
  }
};
const addNewActive = (arr) => {
  arr.forEach((elem) => {
    document
      .querySelector('.keyboard > .' + elem + '')
      .classList.add('active');
  });
};
// Удаление выделения кнопки при нажатии

document.onkeyup = (event) => {
  switch (event.keyCode) {
    case 20:
      if (!caps) {
        document
          .querySelector('.keyboard > .' + event.code + '')
          .classList.remove('active');
      }
      break;
    case 16:
      shiftClose();
      break;
    default:
      if (eventCode.indexOf(event.code) != -1) {
        document
          .querySelector('.keyboard > .' + event.code + '')
          .classList.remove('active');
      }
  }
};

function CapsLock() {
  // если Капс включен, то вывключить
  const allKeyBoard = document.querySelectorAll('.btn');
  const arr = [];
  allKeyBoard.forEach((elem) => {
    if (elem.classList['2']) {
      arr.push(elem.classList['1']);
    }
  });
  if (caps) {
    if (!shift) {
      if (localStorage.getItem('language') === 'Russian') {
        caps = false;
        init(0);
      } else {
        caps = false;
        init(1);
      }
    } else {
      if (localStorage.getItem('language') === 'Russian') {
        caps = false;
        init(4);
      } else {
        caps = false;
        init(5);
      }
    }
  }
  // иначе - если Капс не был включен, то включить
  else {
    if (!shift) {
      if (localStorage.getItem('language') === 'Russian') {
        init(2);
        caps = true;
      } else {
        init(3);
        caps = true;
      }
    } else {
      if (localStorage.getItem('language') === 'Russian') {
        init(6);
        caps = true;
      } else {
        init(7);
        caps = true;
      }
    }
  }
  addNewActive(arr);
}

function shiftOpen() {
  const allKeyBoard = document.querySelectorAll('.btn');
  const arr = [];
  allKeyBoard.forEach((elem) => {
    if (elem.classList['2']) {
      arr.push(elem.classList['1']);
    }
  });
  if (caps == false) {
    if (localStorage.getItem('language') === 'Russian') {
      init(4);
      shift = true;
    } else {
      init(5);
      shift = true;
    }
  } else {
    if (localStorage.getItem('language') === 'Russian') {
      init(6);
      shift = true;
    } else {
      init(7);
      shift = true;
    }
  }
  addNewActive(arr);
}

function shiftClose() {
  const allKeyBoard = document.querySelectorAll('.btn');
  const arr = [];
  allKeyBoard.forEach((elem) => {
    if (
      elem.classList['2'] &&
      elem.classList['1'] !== 'ShiftLeft' &&
      elem.classList['1'] !== 'ShiftRight'
    ) {
      arr.push(elem.classList['1']);
    }
  });
  if (caps == false) {
    if (localStorage.getItem('language') === 'Russian') {
      init(0);
      shift = false;
    } else {
      init(1);
      shift = false;
    }
  } else {
    if (localStorage.getItem('language') === 'Russian') {
      init(2);
      shift = false;
    } else {
      init(3);
      shift = false;
    }
  }
  addNewActive(arr);
}

// Смена языка

let flag;
let smena = false;

function CtrlAlt() {
  document.addEventListener('keydown', (event) => {
    if (event.keyCode == 17) flag = true;
    document.addEventListener('keyup', (event) => {
      const allKeyBoard = document.querySelectorAll('.btn');
      const arr = [];
      allKeyBoard.forEach((elem) => {
        if (
          elem.classList['2'] &&
          elem.classList['1'] !== event.code
        ) {
          arr.push(elem.classList['1']);
        }
      });
      if (
        event.keyCode == 18 &&
        flag &&
        !(localStorage.getItem('language') === 'Russian')
      ) {
        if (!caps) {
          init(0);
          localStorage.setItem('language', 'Russian');
          addNewActive(arr);
        } else {
          init(2);
          localStorage.setItem('language', 'Russian');
          addNewActive(arr);
        }
      } else if (
        event.keyCode == 18 &&
        flag &&
        localStorage.getItem('language') === 'Russian'
      ) {
        if (!caps) {
          init(1);
          localStorage.setItem('language', 'English');
          addNewActive(arr);
        } else {
          init(3);
          localStorage.setItem('language', 'English');
          addNewActive(arr);
        }
      }
      flag = false;
      smena = true;
      // addNewActive(arr);
      if (!caps) {
        document
          .querySelector('.keyboard > .' + 'CapsLock' + '')
          .classList.remove('active');
      }
    });
  });
}

document.querySelector('.keyboard').onclick = (event) => {
  switch (
    eventKeyCode.indexOf(
      Number(event.target.getAttribute('data'))
    )
  ) {
    case 13:
      textArea.value = textArea.value.substr(
        0,
        textArea.value.length - 1
      );
      break;
    case 42:
      break;
    case 55:
    case 57:
    case 59:
    case 63:
      CtrlAlt();
      break;
    case 58:
      textArea.value += ' ';
      break;
    case 41:
      textArea.value += '\n';
      break;
    case 14:
      textArea.value += '   ';
      break;
    case 56:
      textArea.value += '';
      break;
    case 29:
      CapsLock();
      break;

    default:
      if (localStorage.getItem('language') === 'English') {
        if (shift && !caps) {
          textArea.value +=
            eventLetter[5][
              eventKeyCode.indexOf(
                Number(event.target.getAttribute('data'))
              )
            ];
        } else if (!shift && !caps) {
          textArea.value +=
            eventLetter[1][
              eventKeyCode.indexOf(
                Number(event.target.getAttribute('data'))
              )
            ];
        }
        if (!shift && caps) {
          textArea.value +=
            eventLetter[3][
              eventKeyCode.indexOf(
                Number(event.target.getAttribute('data'))
              )
            ];
        }
        if (shift && caps) {
          textArea.value +=
            eventLetter[7][
              eventKeyCode.indexOf(
                Number(event.target.getAttribute('data'))
              )
            ];
        }
      } else {
        if (shift && !caps) {
          textArea.value +=
            eventLetter[4][
              eventKeyCode.indexOf(
                Number(event.target.getAttribute('data'))
              )
            ];
        } else if (!shift && !caps) {
          textArea.value +=
            eventLetter[0][
              eventKeyCode.indexOf(
                Number(event.target.getAttribute('data'))
              )
            ];
        }
        if (!shift && caps) {
          textArea.value +=
            eventLetter[2][
              eventKeyCode.indexOf(
                Number(event.target.getAttribute('data'))
              )
            ];
        }
        if (shift && caps) {
          textArea.value +=
            eventLetter[6][
              eventKeyCode.indexOf(
                Number(event.target.getAttribute('data'))
              )
            ];
        }
      }
  }

  if (
    eventKeyCode.indexOf(
      Number(event.target.getAttribute('data'))
    ) == 29
  ) {
    if (caps) {
      document
        .querySelector('.keyboard > .' + 'CapsLock' + '')
        .classList.add('active');
    } else {
      document
        .querySelector('.keyboard > .' + 'CapsLock' + '')
        .classList.remove('active');
    }
  } else {
    if (!event.target.classList.contains('keyboard')) {
      event.target.classList.add('active');
      setTimeout(TimeOut, 200);
    }
  }
};

document.querySelector('.keyboard').onmousedown = (
  event
) => {
  switch (
    eventKeyCode.indexOf(
      Number(event.target.getAttribute('data'))
    )
  ) {
    case 42:
      shiftOpen();
      break;
  }
};

document.querySelector('.keyboard').onmouseup = (event) => {
  switch (
    eventKeyCode.indexOf(
      Number(event.target.getAttribute('data'))
    )
  ) {
    case 42:
      shiftClose();
      break;
  }
};

function TimeOut() {
  document
    .querySelectorAll('.keyboard .btn')
    .forEach((element) => {
      if (element.getAttribute('data') != 20) {
        element.classList.remove('active');
      }
    });
}
