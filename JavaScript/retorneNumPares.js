function filtraPares(arr) {
    return arr.filter(callback);
}

function filtraImpar(arr) {
    return arr.filter(callback2);
}

function callback(item){
    return item % 2 === 0;
}

function callback2(item){
    return item % 2 !== 0;
}

const meuArray = [1, 23, 55, 78, 45, 7, 18];

console.log("Pares = ",filtraPares(meuArray));

console.log("Impares = ", filtraImpar(meuArray))