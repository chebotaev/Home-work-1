 var a = +prompt("Введите число A:");
 var b = +prompt("Введите число B:");
if (a < b) {
	function summa() {
	  var sum = 0;
  for (i=a;i<= b;i++) {
    sum += i;
  }
  return sum;
}
alert( summa() );
  
} else {
 alert( "Ошибка" );
}