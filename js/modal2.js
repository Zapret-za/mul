var modal = document.getElementById("myModal");
var btn1 = document.getElementById("myBtn1");
var span = document.getElementsByClassName("close")[0];
btn1.onclick = function() {
  modal.style.display = "block";
  document.documentElement.classList.add('lock1');
}
span.onclick = function() {
  modal.style.display = "none";
  document.documentElement.classList.remove('lock1');
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const first = document.getElementById('first');
const error1 = document.getElementById('error1');
const namePattern = /^[\p{L}]{3,}$/u;
first.addEventListener('blur', () => {
  if (!namePattern.test(first.value)) {
    first.classList.add('invalid');
    error1.innerHTML = 'Error';
  }
});
first.addEventListener('focus', () => {
  if (first.classList.contains('invalid')) {
    first.classList.remove('invalid');
    error1.innerHTML = "";
  }
});

const last = document.getElementById('last');
const error2 = document.getElementById('error2');
const namePattern2 = /^[\p{L}]{3,}$/u;
last.addEventListener('blur', () => {
  if (!namePattern.test(last.value)) {
    last.classList.add('invalid');
    error2.innerHTML = 'Error';
  }
});
last.addEventListener('focus', () => {
  if (last.classList.contains('invalid')) {
    last.classList.remove('invalid');
    error2.innerHTML = "";
  }
});

const pos = document.getElementById('pos');
const error3 = document.getElementById('error3');
const namePattern3 = /^[\p{L}]{3,}$/u;
pos.addEventListener('blur', () => {
  if (!namePattern.test(pos.value)) {
    pos.classList.add('invalid');
    error3.innerHTML = 'Error';
  }
});
pos.addEventListener('focus', () => {
  if (pos.classList.contains('invalid')) {
    pos.classList.remove('invalid');
    error3.innerHTML = "";
  }
});

const company = document.getElementById('company');
const error4 = document.getElementById('error4');
const namePattern4 = /^[\p{L}]{3,}$/u;
company.addEventListener('blur', () => {
  if (!namePattern.test(company.value)) {
    company.classList.add('invalid');
    error4.innerHTML = 'Error';
  }
});
company.addEventListener('focus', () => {
  if (company.classList.contains('invalid')) {
    company.classList.remove('invalid');
    error4.innerHTML = "";
  }
});

const phone = document.getElementById('phone');
const error5 = document.getElementById('error5');
const phonePattern = /^\+?[1-9]\d{1,14}$/;

phone.addEventListener('blur', () => {
  if (!phonePattern.test(phone.value)) {
    phone.classList.add('invalid');
    ererror5ror3.innerHTML = 'Error';
  }
});

phone.addEventListener('focus', () => {
  if (phone.classList.contains('invalid')) {
    phone.classList.remove('invalid');
    error5.innerHTML = "";
  }
});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
const email = document.getElementById('email');
const error6 = document.getElementById('error6');
email.addEventListener('blur', () => {
    if (!isValidEmail(email.value)) {
      email.classList.add('invalid');
      error6.innerHTML = 'email';
    }
});
email.addEventListener('focus', () => {
    if (email.classList.contains('invalid')) {
      email.classList.remove('invalid');
      error6.innerHTML = "";
    }
});
