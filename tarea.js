// DESARROLLO WEB FULL STACK - UTN
// Alumno: Felipe Conde

// 1-Guarda el valor del siguiente usuario : *Matias Rodriguez *Desarrollador *25 años concatenar los datos y luego imprimirlos por consola.

nombre = "Matias Rodríguez"
profesion = "Desarrollador"
edad = "25 años"
resultado = `${nombre} ${profesion} ${edad}`
console.log(resultado);

// 2-Genera un programa que indique si Matias tiene 25 años imprimir “El usuario tiene 25 años” y si no “El usuario no coincide con la edad ingresada”

if (edad == "25 años") {console.log("El usuario tiene 25 años")}
else {console.log("El usuario no coincide con la edad ingresada")};

// 3-Del contenedor con id “Container” agregar un párrafo y dicho párrafo agregarle la información del usuario.

document.getElementById("Container").innerText = resultado

// 4-Si voy al supermercado a comprar “Chocolates” y el valor de la caja es 100, debo calcular el iva que es de $16. Genera un programa que calcule el total de la caja de chocolates y su IVA e imprime el total de monto a abonar por el producto.

    cajaChocolates = 100
    iva = 16
    console.log("$116")

// 5-Escribe un programa que determine si un número es par o impar. Muestra el resultado en la consola.

var numeroRandom = Math.round((Math.random()*10))
if (numeroRandom % 2 == 0) {
    console.log(`El número (${numeroRandom}) es par`);
} else {
    console.log(`El número (${numeroRandom}) es impar`);
}

// 7-Escribe un programa que recorra los números del 1 al 20. Para cada número, muestra en la consola "Fizz" si es divisible entre 3, "Buzz" si es divisible entre 5 y "FizzBuzz" si es divisible entre ambos. Si no es divisible por ninguno, muestra el número.

for (var i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    } else if (i % 3 === 0) {
    console.log("Fizz");
    } else if (i % 5 === 0) {
    console.log("Buzz");
    } else {
    console.log(i);
    }
}

// 8--Escribe un programa que calcule la suma de todos los números del 1 al 100 y muestre el resultado en la consola.

var suma = 0;
for (var i = 1; i <= 100; i++) {
suma += i;
}
console.log("La suma es: " + suma);

// 9-Escribe un programa que recorra un array de números y muestre cada elemento en la consola.

var numeros = [1, 2, 3, 4, 5];
for (var i = 0; i < numeros.length; i++) {
console.log(numeros[i]);
}

// 10-Crea una función que tome un array de palabras como parámetro y devuelva la cantidad total de caracteres en todas las palabras.

function contarCaracteres(palabras) {
var totalCaracteres = 0;
for (var i = 0; i < palabras.length; i++) {
    totalCaracteres += palabras[i].length;
}
return totalCaracteres;
}
var palabras = ["Hola", "Mundo", "OpenAI"];
var cantidadCaracteres = contarCaracteres(palabras);
console.log("Cantidad de caracteres: " + cantidadCaracteres);