// Declarando as variáveis resultado, altura e peso.
const imcResult = document.querySelector('#imc-result');
const classificationResult = document.querySelector('#classification-result');
const height = document.querySelector('#input-height');
const weight = document.querySelector('#input-weight');

const calcimc = () => {
  if (height.value !== '' && weight.value !== '') {
    const imc = (weight.value / (height.value * height.value)).toFixed(2);
    let classification = classificationResult;

    if (imc >= 0 && imc <= 16.9) {
      classification = `Muito abaixo do peso.`;
    }
    if (imc >= 17 && imc <= 18.4) {
      classification = `Abaixo do peso.`;
    }
    if (imc >= 18.5 && imc <= 24.9) {
      classification = `Peso Normal.`;
    }
    if (imc >= 25 && imc <= 29.9) {
      classification = `Acima do Peso.`;
    }
    if (imc >= 30 && imc <= 34.9) {
      classification = `Obesidade grau I.`;
    }
    if (imc >= 35 && imc <= 40) {
      classification = `Obesidade grau II.`;
    }
    if (imc > 40) {
      classification = `Obesidade grau III.`;
    }

    imcResult.innerHTML = `Seu IMC é: <strong> ${imc} </strong>`;
    classificationResult.innerHTML = `Este valor considera que você está na Faixa: <strong>${classification}</strong>`;

    if (height.value == 0 && weight.value == 0) {
      classification.innerHTML = `Insira um valor válido.`;
      imcResult.innerHTML = `<strong> Erro! </strong>`;
    }
  }
};
