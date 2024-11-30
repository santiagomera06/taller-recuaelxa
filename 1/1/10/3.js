// Encuentra el número más grande en un array.
function mayor() {
    const num = [3, 5, 7, 2, 8, 9, 10];  
    let nu1 = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > nu1) {
            nu1 = num[i];
        }
    }
    console.log(nu1);
}
mayor();