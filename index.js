function ButtonClick () {
let name = prompt('Ваше имя?', 'Юлия');
alert(`Привет, ${name}!`);
}

function Button_1 () {
    let a = prompt("Первое число?");
    let b = prompt("Второе число?");
    alert(Number(a) + Number(b));
    }

    function Button_2 () {
    let a = prompt("Первое число?");
    let b = prompt("Второе число?");
    alert(a - b);
    }

    function Button_3 () {
    let a = prompt("Первое число?");
    let b = prompt("Второе число?");
    alert(a * b);
    }

    function Button_4 () {
    let a = prompt("Первое число?");
    let b = prompt("Второе число?");
    alert(a / b);
    }



function select (sender) {
sender.classList.add("selected");

}

function ClickMe() {
let userNameInput = document.getElementById('userName');
alert(`Привет, ${userNameInput.value}!`);
}

// калькулятор (неделя 14)

let number1; //создаем переменную, где будут хранится значение первого числа
let number2; // создаем переменную, где будут хранится значение второго числа

let result = document.getElementById('result') // создаём переменную и берём элемент, куда будет выводится результат

// функция сложения
function plus() {
    number1 = document.getElementById('number1').value; 
    number1 = parseInt(number1)
    number2 = document.getElementById('number2').value;
    number2 = parseInt(number2) // функция, которая проверит содержимое инпута и в случае необходимости преобразует его в целое число (н-р, вместо 5а --> 5). проверяет, чтобы было введено число, а не строка
    result.innerHTML = number1 + number2;
}

// функция вычитания
function minus() {
    number1 = document.getElementById('number1').value; 
    number1 = parseInt(number1)
    number2 = document.getElementById('number2').value;
    number2 = parseInt(number2)
    
    result.innerHTML = number1 - number2;
}

// функция умножения
function multidiplication() {
    number1 = document.getElementById('number1').value; 
    number1 = parseInt(number1)
    number2 = document.getElementById('number2').value;
    number2 = parseInt(number2)
    
    result.innerHTML = number1 * number2;
}

// функция деления
function divide() {
    number1 = document.getElementById('number1').value; 
    number1 = parseInt(number1)
    number2 = document.getElementById('number2').value;
    number2 = parseInt(number2)

    
    result.innerHTML = number2>0 ? number1 / number2 : "На ноль делить нельзя"; // (задание неделя 15)

}


// задание с возможностью выбора темы из выпадающего списка

function changeTheme() {


switch(document.getElementById("colorTheme").value)
{
    case "yellow": document.body.style.backgroundColor = "yellow"; break;
    case "blue": document.body.style.backgroundColor = "blue"; break;
    case "dark": document.body.style.backgroundColor = "grey"; break;
}
}


// задание с возможностью выбора темы из выпадающего списка (2ой вариант)
function changeBG() {
    let selectedBGColor = document.getElementById("bgchoice").value;
    document.body.style.backgroundColor = selectedBGColor;
  }


// задание с проверкой формы регистрации

function check() {

    let name = document.getElementById("InputName");
    let gender = document.getElementsByName("gender");
    let tel = document.getElementById("InputTel");
    let email = document.getElementById("InputEmail");
    let password = document.getElementById("InputPassword");
    let terms = document.getElementById ("checkbox1")


    document.getElementById('errorMessage').innerHTML = ""; // не будет повтора ошибок при последующем нажатии кнопки

if (name.value == '') {
document.getElementById('errorMessage').innerHTML+= "Ваше имя не заполнено <br>";
}

else if (gender[0].checked == false && gender[1].checked == false ) {
    document.getElementById('errorMessage').innerHTML+= "Пожалуйста, выберите Ваш пол: Мужской или Женский <br>";
    valid = false;
    }

    else if (tel.value == '') {
        document.getElementById('errorMessage').innerHTML+= "Введите Ваш номер телефона <br>";
        }

        else if (email.value == '') {
            document.getElementById('errorMessage').innerHTML+= "Ваш email не заполнен <br>";
            }

            else if (password.value == '') {
                document.getElementById('errorMessage').innerHTML+= "Ваш пароль не заполнен <br>";
                }

    else if (password.value.length <= 5) {
        document.getElementById('errorMessage').innerHTML+= "Ваш пароль слишком короткий <br>";
        }

        else if (terms.checked == false ) {
            document.getElementById('errorMessage').innerHTML+= "Пожалуйста, отметьте согласие с Соглашением <br>";
                valid = false;
        }

    else document.getElementById('errorMessage').innerHTML+= `Добро пожаловать, ${name.value}!`;
    
    }


//function check() {

    //let inputs = document.getElementsByClassName("form__input");

    //if (inputs.value == '') {
    //document.getElementsByClassName('errorMessage').innerHTML+= "Заполните Ваши данные <br>";
        //}

    //}


// задание - функция sumInput ()

function sumInput() {

let numbers = [];

let check = true;

while (check) {
let value = prompt("Введите значение", 0)
if(value === '') {
check = false;
}
else if(value === null || isNaN(value)){
    check = false;
} 
else {numbers.push(+value);
}

}

let sum = 0;

for(let i = 0; i < numbers.length; i++)
    {
    sum += numbers[i];
    }
    
}
    
alert(sum);
