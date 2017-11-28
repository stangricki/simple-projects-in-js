
// Enter temperature in Celsius and convert it to Kelvin and Fahrenheit
// Ver 1.0
// Made by Filip Stangricki

var getCelsius = prompt("Enter temperature in Celsius");
var getKelvin = Math.floor(getCelsius) + 273.15;
var getFahrenheit = getCelsius * 1.8 + 32;

document.write("Celsius " + getCelsius + '°C <br>' + "Fahrenheit " + getFahrenheit  + '°F <br>' + "Kelvin " + getKelvin + '°K <br>');

