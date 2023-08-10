/*
    Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/

const isPrimeNumber = (number=undefined) => {
    if (number < 0) return console.warn("El número ingresado debe ser positivo");
    if (!Number.isInteger(number)) return console.warn("Debe ingresar un número");
    
    let flag = true;
    let i = 2;

    while (flag && i<number){
        if (number%i === 0) flag = false;
        i+=1;
    }

    return console.info(flag);
}

console.info("EJERCICIO 12");
isPrimeNumber("hola");
isPrimeNumber(-20);
isPrimeNumber(4);
isPrimeNumber(7);
isPrimeNumber(23);