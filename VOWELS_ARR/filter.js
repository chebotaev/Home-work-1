 var input = prompt("Введите строку","").toLowerCase();    
 function sumLetters(input) { 
  var letters = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];     
  var arr = input.split("");
  var foundLetters = arr.filter(function(item, i, arr) {
    return letters.indexOf(item) != -1;
  });
  var sum = foundLetters.length; 
  return sum;
};
console.log(`${sumLetters(input)} гласных`);