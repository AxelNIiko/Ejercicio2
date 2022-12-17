let n = 0;
let numeros = 1;

n = prompt("Marca un limite");

do{
    if(numeros%3 == 0 || numeros%7 == 0){

    }else{
        console.log(numeros);
    }
    numeros++;
}while(numeros < n)