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
            alert(`Не угадал! Подсказка: число должно быть больше. ${randomNumber}`);
        }
        else if (playerInput > randomNumber) {
            alert(`Не угадал! Подсказка: число должно быть меньше. ${randomNumber}`);
        }
        else {
            alert("Пожалуйста, введите число от 1 до 100!")
        }
    }
}