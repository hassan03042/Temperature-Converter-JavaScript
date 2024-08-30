document.getElementById('temperature').addEventListener('input', convertTemperature);
document.getElementById('inputUnit').addEventListener('change', convertTemperature);
document.getElementById('outputUnit').addEventListener('change', convertTemperature);
document.getElementById('convertBtn').addEventListener('click', convertTemperature);


function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('temperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(tempInput)) {
        alert('Please enter a valid number.');
        return;
    }

    let result;
    if (inputUnit === outputUnit) {
        result = tempInput;
    } else {
        if (inputUnit === 'Celsius') {
            if (outputUnit === 'Fahrenheit') {
                result = (tempInput * 9/5) + 32;
            } else if (outputUnit === 'Kelvin') {
                result = tempInput + 273.15;
            }
        } else if (inputUnit === 'Fahrenheit') {
            if (outputUnit === 'Celsius') {
                result = (tempInput - 32) * 5/9;
            } else if (outputUnit === 'Kelvin') {
                result = ((tempInput - 32) * 5/9) + 273.15;
            }
        } else if (inputUnit === 'Kelvin') {
            if (outputUnit === 'Celsius') {
                result = tempInput - 273.15;
            } else if (outputUnit === 'Fahrenheit') {
                result = ((tempInput - 273.15) * 9/5) + 32;
            }
        }
    }

    const resultText = `${result.toFixed(2)} ${outputUnit}`;
    document.getElementById('result').textContent = `Result: ${resultText}`;

    addToHistory(tempInput, inputUnit, result, outputUnit);
}

    


