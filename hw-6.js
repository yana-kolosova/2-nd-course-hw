//1
const task1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < task1.length; i++) {
    if (task1[i] === 10) break;
    console.log(task1[i]);
}

//2
const task2 = [1, 5, 4, 10, 0, 3];
console.log(task2.indexOf(4));

//3
const task3 = [1, 3, 5, 10, 20];
console.log(task3.join(' '));

//4
const arr = [];

for (let i = 0; i < 3; i++) {
    arr.push(1);
}

const task4 = [];

for (let j = 0; j < 3; j++) {
    task4.push(arr);
}

console.log(task4);

//5
const task5 = [1, 1, 1];

for (let i = 0; i < 3; i++) {
    task5.push(2);
}

console.log(task5);

//6
const task6 = [9, 8, 7, 'a', 6, 5];
task6.sort();
task6.pop();
console.log(task6);

//7
const task7 = [9, 8, 7, 6, 5];

while (true) {
    let playerInput = Number(prompt("Введите число:"));
    if (playerInput === 0) {
        break;
    }
    else if (task7.includes(playerInput)) {
        alert('Угадал');
        break;
    }
    else {
        alert('Не угадал');
    }
}

//8
let text = 'abcdef';
let splitText = text.split('');
splitText.reverse();
let task8 = splitText.join('');
console.log(task8);

//9
const task9 = [
    [1, 2, 3],
    [4, 5, 6]
]

result = [task9[0].concat(task9[1])]
console.log(result);

//10
const task10 = [1, 9, 6, 7, 1]
for (let i = 0; i < task10.length - 1; i++) {
    sum = task10[i] + task10[i + 1];
    console.log(sum);
}

//11
const task11 = [1, 2, 3, 4];

const square = (arr) => {
    let result = arr.map(item => item ** 2);
    console.log(result);
}

square(task11);

//12
let string = 'Это строка и я ничего не понимаю';
const task12 = string.split(' ');

const stringLength = (arr) => {
    let result = arr.map(item => item.length);
    console.log(result);
}

stringLength(task12);

//13
let task13 = [-1, 1, -2, 2, -3, 3];

task13 = task13.filter(item => item > 0);

console.log(task13);

//14
const task14 = [];

for (let i = 0; i < 10; i++) {
    task14.push(Math.ceil(Math.random() * 10));
}

const task14Even = task14.filter(item => item % 2 === 0)

console.log(task14, task14Even);

//15
const task15 = [];

for (let i = 0; i < 6; i++) {
    task15.push(Math.ceil(Math.random() * 10));
}

const task15Sum = task15.reduce((total, item) => total + item);

const task15Result = task15Sum / task15.length;

console.log(task15, task15Sum, task15Result);
