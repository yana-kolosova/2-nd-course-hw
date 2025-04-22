let password = "asdf";
let passwordCheck = prompt("Введите пароль");
if (passwordCheck === password) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно")
};

let c = 0;
alert(c > 0 && c < 10 ? "Верно" : "Неверно");
c = 10;
alert(c > 0 && c < 10 ? "Верно" : "Неверно");
c = -3;
alert(c > 0 && c < 10 ? "Верно" : "Неверно");
c = 2;
alert(c > 0 && c < 10 ? "Верно" : "Неверно");

let d = 383;
let e = -9;
if (d > 100 || e > 100) {
    alert("Верно");
} else {
    alert("Неверно");
};

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = 12;
switch (monthNumber) {
    case 1:
        alert("зима");
        break;
    case 2:
        alert("зима");
        break;
    case 3:
        alert("весна");
        break;
    case 4:
        alert("весна");
        break;
    case 5:
        alert("весна");
        break;
    case 6:
        alert("лето");
        break;
    case 7:
        alert("лето");
        break;
    case 8:
        alert("лето");
        break;
    case 9:
        alert("осень");
        break;
    case 10:
        alert("осень");
        break;
    case 11:
        alert("осень");
        break;
    case 12:
        alert("зима");
        break;

    default:
        alert("неправильный номер");
        break;
};