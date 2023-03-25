console.log('funguju!');

const questionElm = document.querySelector('.question');
questionElm.textContent =
  'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';

const answer = prompt(
  'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon:',
);

const answerTextElm = document.querySelector('.answer__text');
answerTextElm.textContent = answer;

const answerElm = document.querySelector('.answer');

if (answer === 'Bell') {
  answerElm.classList.add('answer--correct');
} else {
  answerElm.classList.add('answer--wrong');
}
