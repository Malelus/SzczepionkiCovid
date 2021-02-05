window.onload = () => {
  //===========================//
  //===// Loading classes //===//
  //===========================//

  // - hamburger
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  // - page transition
  const transitionElement = document.querySelector('.transition');
  const anchors = document.querySelectorAll('a:not(.external)');

  // - popup
  const popupBtn = document.querySelectorAll('.show-popup');
  const popup = document.querySelector('.popup');

  // - form
  const form = document.getElementById('form');
  const formResult = document.querySelector('.form__result');

  //=============================//
  //===// Loading variables //===//
  //=============================//

  // Defining const for motion status check
  const motionCheck = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Defining variables array
  const durationsArray = [];
  const varArray = [
    '--transition-static',
    '--transition-time',
    '--btn-anim-time',
    '--popup-time',
    '--logo-anim-time',
    '--nav-hide-time',
    '--nav-show-time',
    '--main-anim-time',
    '--form-result-visibility',
    '--anim-delay',
    '--anim-delay--logo-icon',
  ];

  // Defining const for global variables source and quantity of variable array
  const varGlobal = getComputedStyle(document.body);
  const varQuantity = varArray.length;

  // Inserting all time durations into durations array
  for (let i = 0; i < varQuantity; i++) {
    durationsArray[i] = varGlobal.getPropertyValue(varArray[i]);
  }

  //================================//
  //====// Variables formating //===//
  //================================//

  // Subtracting `s` letter from loaded string
  for (let i = 0; i < varQuantity; i++) {
    durationsArray[i] = durationsArray[i].substring(0, durationsArray[i].length - 1);
  }

  // Setting own variable for transition time
  const timeTransition = durationsArray[0] * 1000;
  const timeFormResult = durationsArray[8] * 1000;

  // Setting style for console timing info
  for (let i = 0; i < varQuantity; i++) {
    if (durationsArray[i].indexOf('.') < '') durationsArray[i] = durationsArray[i] + '.0';
  }

  //===================================//
  //===// Reduced motion - Status //===//
  //===================================//

  motionCheck.addEventListener('change', consoleInit);

  function consoleInit() {
    if (!motionCheck || motionCheck.matches) {
      motionStatus = `OFF`;
      console.clear();
      consoleLog();
    } else {
      motionStatus = `ON`;
      console.clear();
      consoleLog();
    }
  }

  //====================//
  //====// Console //===//
  //====================//

  // Console log animation status & transitions durations & delays

  consoleInit();

  function consoleLog() {
    console.log(`# Scripts were loaded correctly! (Time is given in seconds)`);
    console.log(`# Animations are ` + motionStatus + `\n\n`);
    console.log(`# Page transition:`);
    console.log(`  - static screen: ` + durationsArray[0]);
    console.log(`  - transition: ` + durationsArray[1]);
    console.log(`# Button animation time: ` + durationsArray[2]);
    console.log(`# Popup time: ` + durationsArray[3]);
    console.log(`# Logo animation time: ` + durationsArray[4]);
    console.log(`# Navigation:`);
    console.log(`  - hide: ` + durationsArray[5]);
    console.log(`  - show: ` + durationsArray[6]);
    console.log(`# Main animation: ` + durationsArray[7]);
    console.log(`# Form result visibility: ` + durationsArray[8]);
    console.log(`# Delays:`);
    console.log(`  - default: ` + durationsArray[9]);
    console.log(`  - logo icon: ` + durationsArray[10]);
  }

  //====================//
  //===// Scripts //===//
  //===================//

  //===// Hamburger //===//

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('nav--visibility');
  });

  //===// Page transition //===//
  setTimeout(() => {
    transitionElement.classList.remove('transition--active');
  }, timeTransition);

  anchors.forEach((anchors) => {
    const anchor = anchors;

    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.target.href;

      transitionElement.classList.add('transition--active');

      setTimeout(() => {
        window.location.href = target;
      }, timeTransition);
    });
  });

  //===// Popup //===//

  //===// Popup show & close with button //===//
  popupBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
      const popupTarget = e.target.dataset.target;

      const popupElement = document.querySelector(popupTarget);
      if (popupElement != null) {
        popupElement.classList.toggle('popup--active');
      }
    });
  });

  //===// Popup close on escape key press //===//
  document.addEventListener('keydown', esc);
  function esc(e) {
    if (e.which === 27) {
      popup.classList.remove('popup--active');
    }
  }

  //===// Form //===//

  document.addEventListener('submit', (e) => {
    e.preventDefault();

    form.reset();
    formResult.classList.add('form__result--true');

    setTimeout(() => {
      location.reload();
    }, timeFormResult + 125);
  });
};
