//1
let people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
function sortByAge(a, b) {
    return a.age - b.age;
}
console.log(people.sort(sortByAge));

//2
function isPositive(a) {
    if (a > 0) {
        return a;
    }
}

function isMale(a) {
    if (a.gender === "male") {
        return a;
    }
}

function filter(arr, ruleFunction) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i]) === undefined) {
            continue;
        }
        else {
            output.push(ruleFunction(arr[i]));
        }
    }

    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

//3
function printDate() {
    let currentDate = new Date();
    console.log(currentDate);
}
let timerId = setInterval(printDate, 1000 * 3);
setTimeout(() => {
    clearInterval(timerId);
    console.log('30 секунд прошло');
}, 1000 * 30)

//4
function delayForSecond(callback) {
    setTimeout(callback, 1000)
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

//5
function anotherDelayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

anotherDelayForSecond(() => { sayHi('Глеб') })