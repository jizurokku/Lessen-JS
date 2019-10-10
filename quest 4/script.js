let money , time;

function start(){
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" ||money == null){
		money = +prompt("Ваш бюджет на месяц?", '');
	}
};

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
}

function chooseExpenses(){
	for (let i = 0 ; i < 2 ; i++ ) {

		let a = prompt("Введите обязательную статью расходов в этом месяце", '');
		let	b = prompt("Во сколько обойдется?", '');
		
		if ( (typeof(a))=== "string" && (typeof(a)) != null && a != "" 
			&& b != "" && a.length < 50){
			console.log("Обязательная статья расходов есть!");
			appData.expenses[a] = b;
		}else{
			console.log ("bad result");
			i = i - 1;
		};
	
	};
	
};
function chooseOptExpenses(){
	for (let i = 0 ; i < 3 ; i++){
		let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
}

chooseExpenses();

function detectDayBudget(){
	appData.maneyPerDay = (appData.budget / 30).toFixed();
	alert("Ежедневный бюджет: " + appData.maneyPerDay);
};

detectDayBudget();

function detectLevel(){
if (appData.maneyPerDay < 500 ) {
	console.log("Минимальный уровень достатка!")}
else if (appData.maneyPerDay > 100 && appData.maneyPerDay < 2000 ){
	console.log("Средний уровень достатка!")
	}
else if (appData.maneyPerDay > 2000 ){
	console.log("Высокий уровень достатка!")		
	}
else{
	console.log("Произошла ошибка!")
	};
};

detectLevel();

function checkSavings(){
	if(appData.savings == true){
		let save = +prompt("Какова сумма накоплений?");
		let percent = +prompt("Под какой процент?");

		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: "+ appData.monthIncome)
	}
};

checkSavings();