'use strict';

let startBtn = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalexpensesItem = document.getElementsByClassName('optionalexpenses-value'),
    income = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let money, time;

expensesBtn.disabled = true;
optionalexpensesBtn.disabled = true;
countBtn.disabled = true;


startBtn.addEventListener('click', function() {
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	year.value = new Date(Date.parse(time)).getFullYear();
	month.value = new Date(Date.parse(time)).getMonth() + 1;
	day.value = new Date(Date.parse(time)).getDate();

	expensesBtn.disabled = false;
	optionalexpensesBtn.disabled = false;
	countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function () {
	let sum = 0;

	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;

		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
			a != "" && b != "" && a.length < 50) {
			appData.expenses[a] = b;
			sum += +b;
		} else {
			i--;
		}
	}
	expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function() {
	for (let i = 0; i <= optionalexpensesItem.length; i++) {
		let opt = optionalexpensesItem[i].value;
		appData.optionalExpenses[i] = opt;
		optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

countBtn.addEventListener('click', function() {
	if (appData.budget != undefined) {
		appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Минимальный уроверь достатка";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "Средний уроверь достатка";
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = "Высокий уроверь достатка";
		} else {
			levelValue.textContent = "Произошла ошибка";
		}
	} else {
		levelValue.textContent = "Произошла ошибка";
	}
});

income.addEventListener('input', function() {
	let items = income.value;
	appData.income = items.split(", ");
	incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function() {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
