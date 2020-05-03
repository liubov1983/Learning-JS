"use strict";

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
 };
 
let question1 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer1 = prompt("Во сколько обойдется?"),
    question2 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer2 = prompt("Во сколько обойдется?");

appData.expenses[question1] = answer1;
appData.expenses[question2] = answer2;

alert("Бюджет на 1 день: " + appData.budget / 30);
