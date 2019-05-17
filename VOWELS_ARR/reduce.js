 var input = prompt("Введите строку","").toLowerCase();
 function sumLetters(input) {
  var letters = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
  var arr = input.split('');
  var sum = arr.reduce(function(result, item, i, arr) {
    if (letters.indexOf(item) != -1){
      return result + 1;
    } else {
      return result + 0;
    };          
  }, 0);
  return sum;
};
console.log(`${sumLetters(input)} гласных`);