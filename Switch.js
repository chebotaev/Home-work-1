var a = prompt("Введите месяц:")

switch (a) {
	case "декабрь":
	case "январь":
	case "февраль":
	alert( "Зима" );
	break;
	case "март":
	case "арель":
	case "май":
	alert( "Весна" );
	break;
	case "июнь":
	case "июль":
	case "август":
	alert( "Лето" );
	break;
	case "сентябрь":
	case "октябрь":
	case "ноябрь":
	alert( "Осень" );
	break;
	default:
    alert("Ошибка ввода!");
  }