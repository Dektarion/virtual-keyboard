const createLangCheck = (lang) => {

  const languageText = document.createElement('p');
  languageText.classList.add('main-section__text');
  languageText.innerHTML = `Текущий язык раскладки: <span class = "main-section__lang">${lang}</span>`;
  document.querySelector('.main-section__text-container').append(languageText);

}

const changeLangCheck = (lang) => {
  document.querySelectorAll('.main-section__text')[2].innerHTML = `Текущий язык раскладки: <span class = "main-section__lang">${lang}</span>`;
}

export {createLangCheck, changeLangCheck};