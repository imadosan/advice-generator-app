'use strict';

const adivce = document.querySelector('.advice--quote');
const adviceId = document.querySelector('.advice--number-id');
const btn = document.querySelector('.adivce--generate-btn');

const fetchAdvice = async function () {
  const data = await fetch(`https://api.adviceslip.com/advice`).then((res) =>
    res.json()
  );

  const adviceText = data.slip.advice;
  const id = data.slip.id;

  adivce.textContent = `“${adviceText}”`;
  adviceId.textContent = id;
};

btn.addEventListener('click', fetchAdvice);
