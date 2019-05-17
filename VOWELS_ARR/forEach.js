 var input = prompt("Введите строку","");
 function sumLetters(input) {
  var letters = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
  var arr = input.split("");      
  var sum = 0;
  arr.forEach(function(item, i, arr) {
    if (letters.indexOf(item) != -1)
      sum++;
  });
return sum;
};
console.log(`${sumLetters(input)} гласных`);