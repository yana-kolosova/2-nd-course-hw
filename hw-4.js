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

for (i = 7; i <= 22; i++) {
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



for (let firstFri = 5; firstFri <= 31; firstFri += 7) {{
        console.log(`Сегодня пятница, ${firstFri}-е число. Необходимо подготовить отчет.`);
    }
}