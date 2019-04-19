function word(){
    var a = 0;
    var letters = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    var input = prompt("Введите строку:");
    for (var i = 0; i < input.length; i++)
        for (var b = 0; b < letters.length; b++)
            if (input[i] === letters[b]) {
                ++a;
                break;
            }
            return a;
        }
        console.log(word());