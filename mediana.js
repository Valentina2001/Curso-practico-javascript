function calcularMediaAritmetica (lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

/*const lista1 = [
    100,
    200, 
    500,
    400000000,
];*/


function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    }else {
        return false;
    }
}

function ordernar(a, b){
    return a - b;
}


function calcularMediana (lista){

    let nuevaLista = [];
    nuevaLista = lista.sort(ordernar);
    //Mejorar

    
    const mitadLista = parseInt(nuevaLista.length / 2);
    let mediana;
    
    if (esPar(nuevaLista.length)){
        const elemento1 = nuevaLista[mitadLista - 1];
        const elemento2 = nuevaLista[mitadLista]; 
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);
    
        mediana = promedioElemento1y2;
        return mediana;
    
    } else{
        mediana = lista[mitadLista];
        return mediana;
    }
}