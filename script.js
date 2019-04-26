window.onload = function() {

  var drinkStorage = new HashStorage();
  var table = document.querySelector('.table');
  var add = document.querySelector('.control .add');

  add.onclick = function () {
    var key = prompt('Введите название напитка','');
    var value = (function () {
      value = {};
      value.alcohol = confirm('Напиток алкогольный?');
      value.recept  = prompt('Напишите рецепт','');
      return value;
    })();
    console.log(drinkStorage);
    return drinkStorage.addValue(key,value);
  };
  
  var info = document.querySelector('.control .info');
  info.onclick = function () {
    var key = prompt('Введите название напитка','');
    var value = drinkStorage.getValue(key);
    var answer = `Напиток: ${key};
    Алкогольный: ${value.alcohol ? 'Да' : 'Нет'};
    Рецепт приготовления: ${value.recept}.`;
    table.innerHTML = answer;
  };

  var del = document.querySelector('.control .del');
  del.onclick = function () {
    var key = prompt('Введите название напитка','');
    table.innerHTML = drinkStorage.deleteValue(key);
  };

  var list = document.querySelector('.control .list');
  list.onclick = function () {
    table.innerHTML = drinkStorage.getKeys().join(';');
  };
}