//Altura de un triángulo isósceles

function calcularAlturaTriangulo (lado1, lado2, base){
    if (lado1 == lado2 && lado1 != base && lado2 != base){
        let altura = (lado1**2) - (base**2 / 4);
        console.log(altura);
        let resultado = Math.sqrt(altura); 
        return resultado;
    }else{
        alert("No se aceptan medidas de triángulos que no son isósceles");
    }
}
//mejorar