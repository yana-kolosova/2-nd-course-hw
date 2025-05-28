function game1() {
    const randomNumber = Math.ceil(Math.random() * 100);
    while (true) {
        let playerInput = Number(prompt("Попробуйте угадать число от 1 до 100:"));
        if (playerInput === 0) {
            alert("Удачи в следующий раз!");
            return;
        }
        else if (playerInput === randomNumber) {
            alert("Ты угадал!");
            return;
        }
        else if (playerInput < randomNumber) {
            alert("Не угадал! Подсказка: число должно быть больше.");
        }
        else if (playerInput > randomNumber) {
            alert("Не угадал! Подсказка: число должно быть меньше.");
        }
        else {
            alert("Пожалуйста, введите число от 1 до 100!")
        }
    }
}

function game2() {
    let randomA = Math.ceil(Math.random() * 10);
    let randomB = Math.ceil(Math.random() * 10);
    const operator = Math.ceil(Math.random() * 4);
    let PlayerInput;
    switch (operator) {

        case 1:
            while (true) {
                playerInput = Number(prompt(`${randomA} + ${randomB}`));
                if (playerInput === 0) {
                    alert("Удачи в следующий раз!");
                    return;
                }
                else if (playerInput === randomA + randomB) {
                    alert('Верно!')
                    return;
                }
                else if (isNaN(playerInput)) {
                    alert("Пожалуйста, введите число!");
                }
                else {
                    alert("Неверно!");
                }
            }

        case 2:
            while (true) {
                if (randomA === randomB) {
                    do {
                        randomA = Math.ceil(Math.random() * 10);
                        randomB = Math.ceil(Math.random() * 10);
                    }
                    while (randomA === randomB)
                }
                if (randomB > randomA) {
                    [randomA, randomB] = [randomB, randomA]
                }
                playerInput = Number(prompt(`${randomA} - ${randomB}`));
                if (playerInput === 0) {
                    alert("Удачи в следующий раз!");
                    return;
                }
                else if (playerInput === randomA - randomB) {
                    alert('Верно!')
                    return;
                }
                else if (isNaN(playerInput)) {
                    alert("Пожалуйста, введите число!");
                }
                else {
                    alert("Неверно!");
                }
            }

        case 3:
            while (true) {
                playerInput = Number(prompt(`${randomA} * ${randomB}`));
                if (playerInput === 0) {
                    alert("Удачи в следующий раз!");
                    return;
                }
                else if (playerInput === randomA * randomB) {
                    alert('Верно!')
                    return;
                }
                else if (isNaN(playerInput)) {
                    alert("Пожалуйста, введите число!");
                }
                else {
                    alert("Неверно!");
                }
            }

        case 4:
            while (true) {
                randomA = Math.ceil(Math.random() * 100);
                randomB = Math.ceil(Math.random() * 99 + 1);
                if (randomA % randomB !== 0) {
                    do {
                        randomA = Math.ceil(Math.random() * 100);
                        randomB = Math.ceil(Math.random() * 99 + 1);
                    }
                    while (randomA % randomB !== 0)
                }
                playerInput = Number(prompt(`${randomA} / ${randomB}`));
                if (playerInput === 0) {
                    alert("Удачи в следующий раз!");
                    return;
                }
                else if (playerInput === randomA / randomB) {
                    alert('Верно!')
                    return;
                }
                else if (isNaN(playerInput)) {
                    alert("Пожалуйста, введите число!");
                }
                else {
                    alert("Неверно!");
                }
            }
    }
}

function game3() {
    while (true) {
        let playerInput = prompt('Введите любой текст, и мы его перевернём:');
        if (playerInput === null || playerInput === '') {
            return;
        }
        else {
            playerInput = playerInput.split('');
            playerInput.reverse();
            playerInput = playerInput.join('');
            alert(playerInput);
        }
    }
}

function game4() {
    const options = ["камень", "ножницы", "бумага"];
    const index = Math.floor(Math.random() * 3);
    let playerInput, computerInput;
    computerInput = options[index];
    switch (index) {

        case 0:
            while (true) {
                playerInput = prompt(`Введите ваш знак: "${options[0]}", "${options[1]}" или "${options[2]}"`)
                if (playerInput === options[0]) {
                    alert(`Что выбрали вы: ${playerInput};
Что выбрал компьютер: ${computerInput};
Это ничья!`);
                    return;
                }
                else if (playerInput === options[1]) {
                    alert(`Что выбрали вы: ${playerInput};
Что выбрал компьютер: ${computerInput};
Вы проиграли!`);
                    return;
                }
                else if (playerInput === options[2]) {
                    alert(`Что выбрали вы: ${playerInput};
Что выбрал компьютер: ${computerInput};
Вы выиграли!`);
                    return;
                }
                else if (playerInput === '') {
                    alert('До встречи!');
                    return;
                }
                else {
                    alert(`Пожалуйста, введите "${options[0]}", "${options[1]}" или "${options[2]}"`)
                }
            }

        case 1:
            while (true) {
                playerInput = prompt(`Введите ваш знак: "${options[0]}", "${options[1]}" или "${options[2]}"`)
                if (playerInput === options[0]) {
                    alert(`Что выбрали вы: ${playerInput};
Что выбрал компьютер: ${computerInput};
Вы выиграли!`);
                    return;
                }
                else if (playerInput === options[1]) {
                    alert(`Что выбрали вы: ${playerInput};
Что выбрал компьютер: ${computerInput};
Это ничья!`);
                    return;
                }
                else if (playerInput === options[2]) {
                    alert(`Что выбрали вы: ${playerInput};
Что выбрал компьютер: ${computerInput};
Вы проиграли!`);
                    return;
                }
                else if (playerInput === '') {
                    alert('До встречи!');
                    return;
                }
                else {
                    alert(`Пожалуйста, введите "${options[0]}", "${options[1]}" или "${options[2]}"`)
                }
            }

        case 2:
            while (true) {
                playerInput = prompt(`Введите ваш знак: "${options[0]}", "${options[1]}" или "${options[2]}"`)
                if (playerInput === options[0]) {
                    alert(`Что выбрали вы: ${playerInput};
Что выбрал компьютер: ${computerInput};
Вы проиграли!`);
                    return;
                }
                else if (playerInput === options[1]) {
                    alert(`Что выбрали вы: ${playerInput};
Что выбрал компьютер: ${computerInput};
Вы выиграли!`);
                    return;
                }
                else if (playerInput === options[2]) {
                    alert(`Что выбрали вы: ${playerInput};
Что выбрал компьютер: ${computerInput};
Это ничья!`);
                    return;
                }
                else if (playerInput === '') {
                    alert('До встречи!');
                    return;
                }
                else {
                    alert(`Пожалуйста, введите "${options[0]}", "${options[1]}" или "${options[2]}"`)
                }
            }
    }
}

function game5() {
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let correctAnswers = 0;

    while (true) {
        for (let i = 0; i < quiz.length; i++) {
            playerInput = Number(prompt(`${quiz[i]['question']}
${quiz[i]['options'][0]}, ${quiz[i]['options'][1]}, ${quiz[i]['options'][2]}`));
            if (isNaN(playerInput)) {
                alert('Пожалуйста, введите число!');
                i--;
                continue;
            }
            else if (playerInput === 0) {
                break;
            }
            else if (playerInput === quiz[i]['correctAnswer']) {
                correctAnswers++;
            }
        }
        alert(`Количество правильных ответов: ${correctAnswers} из ${quiz.length}`);
        break;
    }
}