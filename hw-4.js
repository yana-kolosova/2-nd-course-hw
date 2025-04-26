let i = 1;
while (i < 3) {
    console.log("Привет");
    i++;
}

i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

for (i = 0; i <= 22; i++) {
    if (i < 7) {
        continue;
    }
    console.log(i);
}

const obj = { Коля: 200, Вася: 300, Петя: 400 };
for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`);
}

let n = 1000;
let num = 0;
while (n > 50) {
    n /= 2;
    num++;
}
console.log(n);
console.log(num);



for (let firstFri = 1, fri = 1, monthLength = 31; fri <= monthLength; fri++) {
    if (fri % firstFri === 0) {
        console.log(`Сегодня пятница, ${fri}-е число. Необходимо подготовить отчет.`);
        firstFri += 7;
    }
}