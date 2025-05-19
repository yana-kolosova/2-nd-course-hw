//1
let task1 = 'js';
task1 = task1.toUpperCase();
console.log(task1);

//2
let array = 'Это строка слов и некоторые начинаются с буквы с';
array = array.split(' ');
let string = 'с';
array.forEach((array) => {
    if (array.toLowerCase().startsWith(string.toLowerCase())) {
        console.log(array);
    }
})

//3
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//4
let task4 = [52, 53, 49, 77, 21, 32];
let task4Min = Math.min(...task4);
let task4Max = Math.max(...task4);
console.log(task4Min, task4Max);

//5
let task5 = Math.ceil(Math.random() * 10)
console.log(task5);

//6
num = 13;
let length = Math.round(num / 2);
let task6 = [];

for (i = 0; i <= length && task6.length !== length; i++) {
    randomNum = Math.ceil(Math.random() * num);
    if (randomNum < num) {
        task6.push(randomNum);
    }
}

console.log(task6);

//7
let num1 = 2;
let num2 = 10;
randomNum = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
console.log(randomNum);

//8
let task8 = new Date();
console.log(task8);

//9
let currentDate = new Date();
let newDate = new Date(currentDate.setDate(currentDate.getDate() + 73));
console.log(newDate);

//10
let task10 = new Date();
let dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
let week = { weekday: 'long' }
console.log(`Дата: ${task10.toLocaleDateString('ru-RU', dateOptions)} — это ${task10.toLocaleDateString('ru-RU', week)}.
Время: ${task10.toLocaleTimeString('ru-RU')}`);
