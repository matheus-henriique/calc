let display = document.getElementById('display');

function addToDisplay(value) {
    display.value += value;
}

function addDecimal() {
    if (!display.value.includes('.') && !display.value.includes(',')) {
        display.value += '.';
    }
}

function clearDisplay() {
    display.value = '';
}

function clearLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let expression = display.value.replace(/,/g, '.'); // Substitui todas as vírgulas por pontos
    try {
        let result = eval(expression);
        display.value = result.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePercentage() {
    const totalValue = parseFloat(document.getElementById('totalValue').value);
    const percentageValue = parseFloat(document.getElementById('percentageValue').value);

    if (isNaN(totalValue) || isNaN(percentageValue)) {
        document.getElementById('result').innerText = "Por favor, insira valores numéricos válidos.";
        return;
    }

    const percentage = (percentageValue / totalValue) * 100;
    document.getElementById('result').innerText = `O segundo valor é ${percentage.toFixed(2).replace('.', ',')}% do primeiro valor.`;
}
