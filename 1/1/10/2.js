//Calcula la suma de un array de números.
function sumar() {
    const num = [1, 2, 3, 4, 5];  
    let suma = 0;
    for (let i = 0; i < num.length; i++) {
        suma += num[i];
    }
    console.log(suma);
}
sumar();