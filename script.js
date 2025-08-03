
    function convertTemperature(value, fromUnit, toUnit) {
      if (fromUnit === toUnit) {
        return value;
      }

      let celsius;

      // Convert from input unit to Celsius
      switch (fromUnit) {
        case 'celsius':
          celsius = value;
          break;
        case 'fahrenheit':
          celsius = (value - 32) * 5 / 9;
          break;
        case 'kelvin':
          celsius = value - 273.15;
          break;
        default:
          return NaN;
  
      }

      // Convert from Celsius to output unit
      switch (toUnit) {
        case 'celsius':
          return celsius;
        case 'fahrenheit':
          return (celsius * 9 / 5) + 32;
        case 'kelvin':
          return celsius + 273.15;
        default:
          return NaN;
      }
    }

    document.getElementById('convertBtn').addEventListener('click', () => {
      const tempInput = document.getElementById('tempInput').value.trim();
      const inputUnit = document.getElementById('inputUnit').value;
      const outputUnit = document.getElementById('outputUnit').value;
      const errorMsg = document.getElementById('errorMsg');
      const result = document.getElementById('result');

      errorMsg.textContent = '';
      result.textContent = '';

      if (tempInput === '') {
        errorMsg.textContent = 'Please enter a temperature value.';
        return;
      }

      const tempValue = Number(tempInput);

      if (isNaN(tempValue)) {
        errorMsg.textContent = 'Invalid input. Please enter a valid number.';
        return;
      }

      const converted = convertTemperature(tempValue, inputUnit, outputUnit);

      if (isNaN(converted)) {
        errorMsg.textContent = 'Conversion error. Please check the units.';
        return;
      }

      result.textContent = `${converted.toFixed(2)} ${outputUnit === 'celsius' ? '°C' : outputUnit === 'fahrenheit' ? '°F' : 'K'}`;
    });
  