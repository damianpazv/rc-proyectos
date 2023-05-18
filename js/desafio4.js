

var tempF= prompt("Ingrese la temperatura en grados Fahrenheit:");
tempF=Number(tempF);

var tempC=(tempF-32)/1.8;

alert(`La temperatura en grados Celsius es: ${Math.round(tempC)}`);
