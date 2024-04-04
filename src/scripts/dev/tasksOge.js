// Функция для создания обработчиков событий для блока
function setupCounterBlock(blockNumber) {
    const decrementButton = document.getElementById(`Counter-Button_decrement_${blockNumber}`);
    const incrementButton = document.getElementById(`Counter-Button_increment_${blockNumber}`);
    const countInput = document.getElementById(`count_${blockNumber}`);

    decrementButton.addEventListener('click', function() {
        let currentValue = parseInt(countInput.value);
        countInput.value = currentValue > 0 ? currentValue - 1 : 0;
    });

    incrementButton.addEventListener('click', function() {
        let currentValue = parseInt(countInput.value);
        countInput.value = currentValue + 1;
    });

    countInput.addEventListener('change', function() {
        let currentValue = parseInt(countInput.value);
        if (isNaN(currentValue) || currentValue < 0) {
            countInput.value = 0;
        }
    });
}

// Вызов функции для каждого блока
setupCounterBlock(1); // Для первого блока
setupCounterBlock(2); // Для второго блока
setupCounterBlock(3); // Для второго блока
setupCounterBlock(4); // Для второго блока
setupCounterBlock(5); // Для второго блока
