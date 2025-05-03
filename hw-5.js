//1
function smallerNumber(a, b) {
    if (a <= b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}

smallerNumber(10, 9);

//2
let parity = function (a) {
    if (a % 2 === 0) {
        console.log("Число четное");
    }
    else {
        console.log("Число нечетное");
    }
}

parity(9);
parity(2);

//3
let square = a => {
    a *= a;
    console.log(a);
}

let squareContainer = a => {
    a *= a;
    return (a);
}

square(5);
console.log(squareContainer(5));

//4
function age(a) {
    a = prompt("Сколько вам лет?")
    if (a < 0) {
        alert("Вы ввели неправильное значение");
    }
    else if (a >= 0 && a < 13) {
        alert("Привет, друг!");
    }
    else if (a >= 13) {
        alert("Добро пожаловать!");
    }
}

age();

//5
function isNumber(a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log("Одно или оба значения не являются числом");
    }
    else {
        console.log(a * b);
    }
}

isNumber(4, 4)
isNumber("asdf", 4)

//6
function askNumber(n, a = 0) {
    n = prompt("Напишите число, которое хотите возвести в куб");
    if (isNaN(n)) {
        console.log("Переданный параметр не является числом");
    }
    else {
        a = n ** 3;
        console.log(`${n} в кубе равняется ${a}`);
    }
}

askNumber();

//7
const circle1 = {
    radius: 2,
    getArea: function (s) {
        s = Math.PI * (this.radius ** 2);
        return s;
    },
    getPerimeter: function (p) {
        p = 2 * Math.PI * this.radius;
        return p;
    }
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());

const circle2 = {
    radius: 4,
    getArea(s) {
        s = Math.PI * (this.radius ** 2);
        return s;
    },
    getPerimeter(p) {
        p = 2 * Math.PI * this.radius;
        return p;
    }
}

console.log(circle2.getArea());
console.log(circle2.getPerimeter());