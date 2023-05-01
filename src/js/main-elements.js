const createElements = () => {
  document.body.className = 'body';

  const container = document.createElement('div');
  container.classList.add('container');
  document.body.append(container);

  const header = document.createElement('header');
  header.classList.add('header');
  container.append(header);

  const title = document.createElement('h1');
  title.classList.add('header__title');
  title.innerHTML = 'RSS Виртуальная клавиатура';
  header.append(title);

  const main = document.createElement('main');
  main.classList.add('main-section');
  container.append(main);

  const textAreaContainer = document.createElement('div');
  textAreaContainer.classList.add('main-section__text-area-container');
  main.append(textAreaContainer);

  const textArea = document.createElement('textarea');
  textArea.classList.add('main-section__text-area');
  textArea.id = 'textArea';
  textArea.rows = 5;
  textArea.cols = 91;
  textArea.autofocus = true;
  textAreaContainer.append(textArea)

  const keyboardContainer = document.createElement('div');
  keyboardContainer.classList.add('main-section__keyboard-container', 'keyboard');
  main.append(keyboardContainer);

  const textContainer = document.createElement('div');
  textContainer.classList.add('main-section__text-container');
  main.append(textContainer);

  const firstText = document.createElement('p');
  firstText.classList.add('main-section__text');
  firstText.innerHTML = 'Клавиатура создана в операционной системе Windows';
  textContainer.append(firstText);

  const secondText = document.createElement('p');
  secondText.classList.add('main-section__text');
  secondText.innerHTML = 'Для переключения языка комбинация: левыe ctrl + shift';
  textContainer.append(secondText);

  return document.body;
}

export {createElements};