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
	alert("ваше ФИО: "+surname+ " "+name+" "+otchestvo+"\n ваш возраст в годах: " +age+"\n ваш возраст в днях: "+ageDays+"\nчерез 5 лет вам будет: "+age5years+ "\nваш пол: " +gender+"\nвы на пенсии: " + pensia_confirm );
}