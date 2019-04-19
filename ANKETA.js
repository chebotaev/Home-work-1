var surname = prompt("Введите вашу фамилию:");
var name = prompt("Введите ваше имя:");
var otchestvo = prompt("Введите ваше отчество:");
var age ;
var age5years;
var ageDays;
entage();
function entage(){
	age = parseInt(prompt("Введите ваш возраст:"));
	if (isFinite(age)){
		ageDays = +age * 365;
		age5years = +age + 5;
	} else {
		entage();
	}
}
var gender;
var pensia;
var pens_confirm;

entGender();
function entGender() {
	gender=confirm("Ваш пол - мужской?");
	gender?pensia=61:pensia=56;
	if(pensia == 61&&age >= pensia || pensia == 56&&age >= pensia) {
		pensia_confirm="да";
	} else{
		pensia_confirm="нет"
	}
	if(gender){
		gender="мужской";
	} else{
		gender="женский";


	}
	var userObj = {};
	userObj.name = name;
	userObj.surname = surname;
	userObj.otchestvo = otchestvo;
	userObj.age = age;
	userObj.ageDays = ageDays;
	userObj.age5years = age5years;
	userObj.gender = gender;
	userObj.pensia_confirm = pensia_confirm;

	alert("ваше ФИО: "+userObj.surname+ " "+userObj.name+" "+userObj.otchestvo+"\n ваш возраст в годах: " +userObj.age+"\n ваш возраст в днях: "+userObj.ageDays+"\nчерез 5 лет вам будет: "+userObj.age5years+ "\nваш пол: " +userObj.gender+"\nвы на пенсии: " + userObj.pensia_confirm );
}
