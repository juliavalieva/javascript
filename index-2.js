// генератор случайных чисел
function ButtonClick() {
  let min = -10;
  let max = 10;
  
  let result = [];
  for (let i=0; i < 10; i++) {
  let rand = Math.floor(Math.random() * (max + 1 - min) + min);
  //if (result.indexOf(rand) == -1) {
  result.push(rand);
  //}
  }
  
  document.write("Числа: " + result + "<br>");
  
  let srednee = 0;
  let summa = 0;
  let product = 1;
  
  
  for (let i = 0; i < 10; i++) {
  srednee += result[i] / result.length;
  summa += result[i];
  product *= result[i];
  }
  
  document.write("Минимальное число: " + (Math.min(...result)) + "<br>");
  document.write("Максимальное число: " + (Math.max(...result)) + "<br>");
  document.write("Среднее арифметическое: " + srednee + "<br>");
  document.write("Сумма чисел: " + summa + "<br>");
  document.write("Произведение чисел: " + product + "<br>");
  
  }

// форматирование даты

function formatDate(date) {

let diffTime = new Date() - date; // разница в миллисекундах
  
  if (diffTime < 1000) {
    return 'прямо сейчас';
  }
  
let sec = Math.floor(diffTime / 1000); // преобразовать разницу в секунды
  
  if (sec < 60) {
  return sec + ' сек. назад';
  }
  
let min = Math.floor(diffTime / 60000); // преобразовать разницу в минуты
  if (min < 60) {
  return min + ' мин. назад';
  }
  
    // отформатировать дату (добавить нули к единственной цифре)
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты
  
    // соединить компоненты в дату
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }
  
  alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
  
  alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
  
  alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
  
  // вчерашняя дата вроде 31.12.2016, 20:00
  alert( formatDate(new Date(new Date - 86400 * 1000)) );
 