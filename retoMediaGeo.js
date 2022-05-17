// Se recibe una lista. Los elementos de la lista debe ser todos positivos

function listaPositiva (lista){
    let contador = 0;

    for(let i = 0; i < lista.length; i++){
        if(lista[i] < 0){
            contador++;
        }
    }

    if(contador == 0){
        return 1;
    }else{
        return 0;
    }
}

// Se multiplica todos los elementos de la lista

function multiLista (lista){
    let resultado = 1;

    for(let i = 0; i < lista.length; i++){
        resultado *= lista[i];
    }

    return resultado;
}

// Se calcula la media validando si todo los elementos son positivos y realizando la multiplicación,
// al final se saca raíz n-ésima, es decir si la cantidad de elementos es 5, se saca raíz de quinta

function calcularMediaGeometrica(lista){

    let positiva = listaPositiva(lista);
    

    if(positiva == 1){
        
        let multi = multiLista(lista);
        
        let raiz = Math.pow(multi, 1/lista.length);

        return raiz;

    }else{
        console.log("Debe ingresar una lista donde todos sus elementos son positivos");
    }

}
