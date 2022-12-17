let n = 0, numeros = 0
var mayor = -99999, contador = 1;

n = prompt("Cantidad a almacenar:");

do{
    numeros = parseInt(prompt("Ingrese numero"));
    console.log(numeros);

    if(numeros > mayor){
        mayor = numeros;
    }

    contador++;

}while(contador <= n)
console.log("el mayor es: ",mayor);    