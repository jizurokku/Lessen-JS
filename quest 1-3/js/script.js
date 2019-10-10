
let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

// 1 cycle

/*for(let i = 0 i++ ){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
		
	if ( (typeof(a))=== "string" && (typeof(a)) != null && a != "" 
	    && b != "" && a.length < 50){
		console.log("done");
		appData.expenses[a] = b;
	}else{
		console.log ("bad result");
        i--;
	}

};
*/

// 2 cycle

/*let i = 0;
while(i < 2){
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
	    b = prompt("Во сколько обойдется?", '');
	if( (typeof(a))=== "string" && (typeof(a)) != null && a != "" 
	    && b != "" && a.length < 50){
	    console.log("done");
	    appData.expenses[a] = b;
   }else{
	    console.log ("bad result");
	    i--;
   }
   i++
};
*/

// 3 cycle

/*let i = 0;
do{
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	if ((typeof(a))==="string" && (typeof(a)) != null && a != ""
	&& b != "" && a.length<50){
		console.log("done");
		appData.expenses[a] = b;
	}else{
		console.log("bad result");
		i--;
	}
	i++;
}
while(i < 2)
*/


appData.maneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.maneyPerDay);

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
	}