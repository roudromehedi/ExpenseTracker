"use strict";
// document.querySelector(".input-income").value = 200;
// document.querySelector(".income-balance").textContent = 0;
// document.querySelector(".expense-balance").textContent = 0;
// document.querySelector(".available-balance").textContent = 0;
// document.querySelector(".expense-food").value = 50;
// document.querySelector(".expense-rent").value = 50;
// document.querySelector(".expense-clothes").value = 50;

document.querySelector(".add-income").addEventListener("click", function () {
  let income = (document.querySelector(".income-balance").textContent =
    document.querySelector(".input-income").value);
  return income;
});

document.querySelector(".add-expense").addEventListener("click", function () {
  let expenses =
    parseInt(document.querySelector(".expense-food").value) +
    parseInt(document.querySelector(".expense-rent").value) +
    parseInt(document.querySelector(".expense-clothes").value);

  document.querySelector(".expense-balance").textContent = expenses;
  document.querySelector(".available-balance").textContent =
    parseInt(document.querySelector(".income-balance").textContent) - expenses;
});

document.querySelector(".reset-btn").addEventListener("click", function () {
  document.querySelector(".input-income").value = "";
  document.querySelector(".income-balance").textContent = 0;
  document.querySelector(".expense-balance").textContent = 0;
  document.querySelector(".available-balance").textContent = 0;
  document.querySelector(".expense-food").value = "";
  document.querySelector(".expense-rent").value = "";
  document.querySelector(".expense-clothes").value = "";
});
