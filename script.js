const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botaoEntrar = document.querySelector('#botaoEntrar');
const concordar = document.querySelector('#agreement');
const botaoSubmit = document.querySelector('#submit-btn');

botaoEntrar.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

concordar.addEventListener('change', () => {
  console.log(concordar.value);
  if (concordar.value === 'on') {
    botaoSubmit.toggleAttribute('disabled');
  }
});

const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
counter.innerText = 500;
function countNumber() {
  counter.innerText = 500 - textArea.value.length;
}

textArea.addEventListener('keyup', countNumber);
const main = document.getElementsByTagName('main')[0];

function createInfos(name, email, house, family, subjects, valuation, obs) {

  const arrayInfos = [`Nome: ${name}`, `Email: ${email}`, `Casa: ${house}`,
  `Família: ${family}`, `Matérias: ${subjects}`, `Avaliação: ${valuation}`, `Observações: ${obs}`];
  const createDiv = document.createElement('div');
  createDiv.id = 'form-data';
  main.appendChild(createDiv);
  for (let i = 0; i < arrayInfos.length; i += 1) {
    const createP = document.createElement('p');
    createP.innerText = arrayInfos[i];
    createDiv.appendChild(createP);
  }
}

function showInfos() {
  botaoSubmit.remove();
  const form = document.getElementById('evaluation-form');
  const userName = `${document.getElementById('input-name').value} ${document.getElementById('input-lastname').value}`;
  const userHouse = document.getElementById('house').value;
  const userEmail = document.getElementById('input-email').value;
  let userFamily = document.querySelector('input[name="family"]:checked');
  if (userFamily === null) {
    userFamily = 'Vazio!';
  } else {
    userFamily = userFamily.value;
  }
  const userSubjects = document.querySelectorAll('.subject:checked');
  let arraySubjects = [];
  for (let i = 0; i < userSubjects.length; i += 1) {
    arraySubjects.push(userSubjects[i].value);
  }
  const subjects = arraySubjects.join(', ');
  let userValuation = document.querySelector('input[name="rate"]:checked');
  if (userValuation === null) {
    userValuation = 'Vazio!';
  } else {
    userValuation = userValuation.value;
  }

  const userObs = document.getElementById('textarea').value;

  createInfos(userName, userEmail, userHouse, userFamily, subjects, userValuation, userObs);
  form.style.display = 'none';
  if (form.style.display = 'none') {
    botaoSubmit.removeAttribute('disabled');
  }
}

botaoSubmit.addEventListener('click', showInfos);
