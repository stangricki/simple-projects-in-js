
// Enter temperature in Celsius and convert it to Kelvin and Fahrenheit
// Ver 1.0
// Made by Filip Stangricki

function temperatureConverter() {
	var getCelsius = prompt('Enter temperature in Celsius'); // Enter temperature here and run the code!
	var getKelvin = Math.floor(getCelsius) + 273.15;
	var getFahrenheit = getCelsius * 1.8 + 32;

	alert("Celsius " + getCelsius + '°C \n' + "Fahrenheit " + getFahrenheit  + '°F \n' + "Kelvin " + getKelvin + '°K \n');
	if (confirm("Would you like to convert the temperature again?")) {
		temperatureConverter();
	} 
};

temperatureConverter();