import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const {
  elements: { email, message },
} = form;

updateInput();

form.addEventListener('input', throttle(onTextInput, 500));
form.addEventListener('submit', onSubmitForm);

function updateInput() {
  const localData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (!localData) {
    return;
  }
  email.value = localData.email;
  message.value = localData.message;
}

function onTextInput() {
  const inputData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputData));
}

function onSubmitForm(event) {
  event.preventDefault();

  console.log({
    email: email.value,
    message: message.value,
  });

  localStorage.removeItem(LOCALSTORAGE_KEY);

  form.reset();
}
