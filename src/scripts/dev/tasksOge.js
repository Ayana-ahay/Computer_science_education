const decrementButton = document.getElementById('Counter-Button_decrement');
const incrementButton = document.getElementById('Counter-Button_increment');
const countInput = document.getElementById('count');

// Функция уменьшения счетчика
decrementButton.addEventListener('click', function() {
    let currentValue = parseInt(countInput.value);
    countInput.value = currentValue > 0 ? currentValue - 1 : 0;
});

// Функция увеличения счетчика
incrementButton.addEventListener('click', function() {
    let currentValue = parseInt(countInput.value);
    countInput.value = currentValue + 1;
});

// Обработка ввода пользователем
countInput.addEventListener('change', function() {
    let currentValue = parseInt(countInput.value);
    if (isNaN(currentValue) || currentValue < 0) {
        countInput.value = 0;
    }
});
