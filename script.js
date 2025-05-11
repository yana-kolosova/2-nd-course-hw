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
                if (randomB > randomA) {
                    [randomA, randomB] = [randomB, randomA]
                }
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