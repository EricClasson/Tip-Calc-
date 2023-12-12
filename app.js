"use strict";

const inputBill = document.querySelector(".input-bill");
const inputPeople = document.querySelector(".people");
const tip5 = document.querySelector(".tip-5");
const tip10 = document.querySelector(".tip-10");
const tip15 = document.querySelector(".tip-15");
const tip25 = document.querySelector(".tip-25");
const tip50 = document.querySelector(".tip-50");
const btns = document.querySelectorAll(".btn");
const tipPerPerson = document.querySelector(".tip-amount");
const totalPerPerson = document.querySelector(".total-amount");
const zero = document.querySelector(".zero");
const reset = document.querySelector(".reset");
const inputNumberTip = document.querySelector(".input-number-tip");

tip5.addEventListener("click", function () {
  let procent5 = 0.05;
  calcBill(procent5);

  setButtonActive(tip5);
  resetColor(tip5);
});
tip10.addEventListener("click", function () {
  let procent10 = 0.1;

  calcBill(procent10);

  setButtonActive(tip10);
  resetColor(tip10);
});
tip15.addEventListener("click", function () {
  let procent15 = 0.15;

  calcBill(procent15);
  setButtonActive(tip15);
  resetColor(tip15);
});
tip25.addEventListener("click", function () {
  let procent25 = 0.25;
  calcBill(procent25);

  setButtonActive(tip25);
  resetColor(tip25);
});
tip50.addEventListener("click", function () {
  let procent50 = 0.5;

  calcBill(procent50);

  setButtonActive(tip50);
  resetColor(tip50);
});

inputNumberTip.addEventListener("input", function () {
  let customTipPercentage = parseFloat(inputNumberTip.value);

  calcBill(customTipPercentage);
});

function setButtonActive(btns) {
  btns.classList.add("active");
  btns.style.backgroundColor = "hsl(172, 67%, 45%)";
}

function resetColor(clickedButton) {
  const buttons = [tip5, tip10, tip15, tip25, tip50];
  for (let i = 0; i < buttons.length; i++) {
    if (
      buttons[i] !== clickedButton &&
      buttons[i].classList.contains("active")
    ) {
      buttons[i].classList.remove("active");
      buttons[i].style.backgroundColor = "hsl(183, 100%, 15%)";
    }
  }
}

function calcBill(procent) {
  let inputBills = parseFloat(inputBill.value);
  let inputPeoples = parseFloat(inputPeople.value);
  let clacprocent = (inputBills * procent) / inputPeoples;
  let newAmount = inputBills * procent + inputBills;
  let perPerson = newAmount / inputPeoples;

  tipPerPerson.textContent = `$ ${clacprocent}`;
  totalPerPerson.textContent = `$ ${perPerson} `;
}

reset.addEventListener("click", resetall);

function resetall() {
  inputBill.value = "";
  inputPeople.value = "";
  for (let i = 0; i < btns.length; i++) {
    btns[i].style.backgroundColor = "hsl(183, 100%, 15%)";
  }
  inputNumberTip.value = "";
  tipPerPerson.textContent = "$ 0.0";
  totalPerPerson.textContent = "$ 0.0";
}

inputPeople.addEventListener("input", showRed);

function showRed() {
  let inputPeopleValue = parseFloat(inputPeople.value);

  if (inputPeopleValue < 1) {
    zero.classList.remove("hidden");
  } else {
    zero.classList.add("hidden");
  }
}
