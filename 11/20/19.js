//Cuenta cuántas veces aparece una palabra en un array.

const array = ["hola", "mundo", "hola", "mundo"];
const palabra = "hola";
let contador = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] === palabra) {
        contador++;
    }
}

console.log(`La palabra "${palabra}" aparece ${contador} veces `);