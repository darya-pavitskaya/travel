// blocks

const menuNav = document.querySelector('.nav');
const mainPopup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const enter = document.querySelector('.enter');
const carousel = document.querySelector('.carousel');
const sliderLeft = document.getElementById('slide-left');
const sliderRight = document.getElementById('slide-right');
const sliderCenter = document.getElementById('slide-center');

// buttons

const menuBurger = document.querySelector('.header__btn-burger');
const menuCross = document.querySelector('.header__btn-cross');
const btnLogin = document.querySelector('.header__button');
const btnAccount = document.querySelector('.account');
const btnRegister = document.querySelector('.login__link');
const btnRemember = document.querySelector('.login__main-link');
const btnSignIn = document.querySelector('.login__btn');
const btnLeft = document.querySelector('.carousel__btn-left');
const btnRight = document.querySelector('.carousel__btn-right');

// elements

const mainTitle = document.querySelector('.login__title');
const btnNoAccount = document.querySelector('.login__slogan');

// menu

menuBurger.addEventListener('click', () => {
  menuNav.classList.remove('nav--closed');
  menuNav.classList.add('nav--opened');
});

menuCross.addEventListener('click', () => {
  menuNav.classList.remove('nav--opened');
  menuNav.classList.add('nav--closed');
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (menuNav.classList.contains('nav--opened')) {
      menuNav.classList.remove('nav--opened');
      menuNav.classList.add('nav--closed');
    }
  }
});

// popup

const togglePopup = () => {
  mainPopup.classList.toggle('hidden');
}
const removeLogIn = () => {
  enter.classList.toggle('enter-remove');
  btnRemember.classList.toggle('login-remove');
}

function changeText (arg, string1, string2) {
  if (arg.innerHTML === string1) {
    arg.innerHTML = string2;
  } else {
    arg.innerHTML = string1;
  }
}

btnSignIn.onclick = function(event) {
  let valueEmail = document.getElementById('email').value;
  let valuePassword = document.getElementById('password').value;
  (valueEmail === "" || valuePassword === "") ? alert('Введите логин и пароль!') :
                                                alert(`Вы ввели ${valueEmail} и ${valuePassword}`);
};

btnAccount.addEventListener('click', togglePopup);
btnLogin.addEventListener('click', togglePopup);
btnRegister.addEventListener('click', () => {
  removeLogIn();
  changeText(mainTitle, 'Log in to your account', 'Create account');
  changeText(btnNoAccount, 'Don’t have an account?', 'Already have an account?');
  changeText(btnRegister, 'Register', 'Log in');
  changeText(btnSignIn, 'Sign In', 'Sign Up');
});

mainPopup.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup')) {
    togglePopup();
  }
})

window.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    togglePopup();
  }
});

// slider

const moveLeftMob = () => {
  carousel.classList.add('transition-left-mobile');
  btnLeft.removeEventListener('click', moveLeftMob);
  btnRight.removeEventListener('click', moveRightMob);
}

const moveLeftDesc = () => {
  carousel.classList.add('transition-left');
  sliderLeft.removeEventListener('click', moveLeftDesc);
  sliderRight.removeEventListener('click', moveRightDesc);
}

const moveRightMob = () => {
  carousel.classList.add('transition-right-mobile');
  btnLeft.removeEventListener('click', moveLeftMob);
  btnRight.removeEventListener('click', moveRightMob);
}

const moveRightDesc = () => {
  carousel.classList.add('transition-right');
  sliderLeft.removeEventListener('click', moveLeftDesc);
  sliderRight.removeEventListener('click', moveRightDesc);
}

btnLeft.addEventListener('click', moveLeftMob);
btnRight.addEventListener('click', moveRightMob);
sliderLeft.addEventListener('click', moveLeftDesc);
sliderRight.addEventListener('click', moveRightDesc);

carousel.addEventListener('animationend', () => {
  carousel.classList.remove('transition-left-mobile');
  carousel.classList.remove('transition-left');
  btnLeft.addEventListener('click', moveLeftMob);
  sliderLeft.addEventListener('click', moveLeftDesc);
});

carousel.addEventListener('animationend', () => {
  carousel.classList.remove('transition-right-mobile');
  carousel.classList.remove('transition-right');
  btnRight.addEventListener('click', moveRightMob);
  sliderRight.addEventListener('click', moveRightDesc);
});
