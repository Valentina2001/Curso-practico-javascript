//Definiendo variables globales
let resultado = "";
let resultado2 = "";
let resultado3 = "";
let resultado4 = "";

//Obteniendo el valor de las p
resultado = document.getElementById("result");
resultado2 = document.getElementById("result2");
resultado3 = document.getElementById("result3");
resultado4 = document.getElementById("result4");

//Cantidad que sobra y porcentaje

function calcularRestante(){
    //Obteniendo valor de los inputs InputIngresos y InputGatos

    const ingresos = document.getElementById("InputIngresos");
    const gastos = document.getElementById("InputGatos");
    const value1 = Number(ingresos.value);
    const value2 = Number(gastos.value);

    //Obteniendo el id de la segunda sección
    document.getElementById("resultados").style.display = "block";
    
    resultado.innerText = "";
    resultado2.innerText = "";
    resultado3.innerText = "";
    resultado4.innerText = "";

    if(value1 > value2){
        const restante = value1 - value2;

        const porcentajeRestante = calcularPorcetajeRestante(value1, restante);

    }else{
        console.log("Los gatos no pueden superar a los ingresos");

        
        resultado.innerText = "Lo sentimos, no se puede realizar el calculo si los ingresos son iguales o inferiores a los gastos";
    }
}

// Calculo del porcentaje de la cantidad de dinero que sobra

function calcularPorcetajeRestante(ingresos, restante){
    //Definiendo variables locales
    let ahorroIdeal = 0;
    let result;
    let ahorro;
    

    //Obteniendo valor de los inputs InputCashFuture y InputPlazo
    const inputCash = document.getElementById("InputCashFuture");
    const inputPlazo = document.getElementById("InputPlazo");
    const cashFuture = Number(inputCash.value);
    const plazo = Number(inputPlazo.value);

    

    resultado.innerText = "";
    resultado2.innerText = "";
    resultado3.innerText = "";
    resultado4.innerText = "";

    //Porcentaje ahorro
    const porcentaje = (100 * restante) / ingresos;
    let porcent = porcentaje.toFixed(2);

    console.log("Restante",restante);
    console.log("Porcentaje", porcent);

    if(porcentaje >= 10){

        if(porcentaje == 10){
            console.log("Lo ideal sería ahorrar el 5%");

            ahorroIdeal = 5;

            result = calcularAhorroLargoPlazo(plazo, cashFuture, ingresos, ahorroIdeal);
            console.log(result);

            if(result == 1){
                console.log("Se puede cumplir en esa meta");
                
                resultado2.innerText = "El ahorro requiere se puede cumplir en ese plazo de "+ plazo + "meses planteado";
            }else{
                console.log("No se puede cumplir en esa meta");

                const mesesReales = calcularAhorroPlazoReal(cashFuture, ingresos, ahorroIdeal);
                console.log("Se puede cumplir la meta a los siguientes meses: ",mesesReales)

                //Resultados
                
                resultado2.innerText = "Lastimosamente el ahorro de $" + cashFuture + " no se puede lograr en " + plazo + " meses, pero si se puede lograr en " + mesesReales + " meses, si se sigue con el mismo porcentaje de ahorro. Si más adelante se puede ahorrar un poco más de dinero se puede lograr en menos tiempo.";
            }

            //resultados:
            
            resultado.innerText = "El dinero libre que queda es de $" + restante + ". El porcentaje de la cantidad de dinero libre es del " + porcent + "%, pero se recomienda solo ahorrar el " + ahorroIdeal + "% del total de ingresos.";
            


        }else if(porcentaje <= 20 && porcentaje > 10){
            ahorro = porcent / 2;
            ahorroIdeal = ahorro.toFixed(2);
            console.log("Lo ideal sería ahorrar el ", ahorroIdeal);

            result = calcularAhorroLargoPlazo(plazo, cashFuture, ingresos, ahorroIdeal);
            console.log(result);

            if(result == 1){
                console.log("Se puede cumplir en esa meta");

                //Resultados
                
                resultado2.innerText = "El ahorro deseado se puede cumplir en ese plazo de "+ plazo + " meses planteados.";
            }else{
                console.log("No se puede cumplir en esa meta");

                const mesesReales = calcularAhorroPlazoReal(cashFuture, ingresos, ahorroIdeal);
                console.log("Se puede cumplir la meta a los siguientes meses: ",mesesReales)

                //Resultados
                
                resultado2.innerText = "Lastimosamente el ahorro de $" + cashFuture + " no se puede lograr en " + plazo + " meses, pero si se puede lograr en " + mesesReales + " meses, si se sigue con el mismo porcentaje de ahorro. Si más adelante se puede ahorrar un poco más de dinero se puede lograr en menos tiempo.";
            }

            //resultados:
            
            resultado.innerText = "El dinero libre que queda es de $" + restante + ". El porcentaje de la cantidad de dinero libre es del " + porcent + "%, pero se recomienda solo ahorrar el " + ahorroIdeal + "% del total de ingresos.";
            

        }else{
            console.log("Lo ideal sería ahorror como mínimo el 10% y como máximo el 20%");


            //Con el 10%
            ahorroIdeal = 10;

            result = calcularAhorroLargoPlazo(plazo, cashFuture, ingresos, ahorroIdeal);
            console.log(result);

            
            if(result == 1){
                console.log("Se puede cumplir en esa meta");

                //Resultados
                
                resultado3.innerText = "El ahorro deseado se efectua con el 10% del total de ingresos, se puede cumplir en ese plazo de "+ plazo + " meses planteados.";
            }else{
                console.log("No se puede cumplir en esa meta");

                const mesesReales = calcularAhorroPlazoReal(cashFuture, ingresos, ahorroIdeal);
                console.log("Se puede cumplir la meta a los siguientes meses: ",mesesReales)

                //Resultados
                
                resultado3.innerText = "Lastimosamente el ahorro de $" + cashFuture + " no se puede lograr en " + plazo + " meses, si se ahorra con el 10% total de ingresos, pero si se puede lograr en " + mesesReales + " meses, si se sigue con el mismo porcentaje de ahorro. Si más adelante se puede ahorrar un poco más de dinero se puede lograr en menos tiempo.";
            }


            //Con el 20%

            ahorroIdeal = 20;

            result = calcularAhorroLargoPlazo(plazo, cashFuture, ingresos, ahorroIdeal);
            console.log(result);

            
            if(result == 1){
                console.log("Se puede cumplir en esa meta");

                //resultados
                
                resultado4.innerText = "El ahorro deseado si se efectua con el 20% del total de ingresos, se puede cumplir en ese plazo de "+ plazo + " meses planteados.";
            }else{
                console.log("No se puede cumplir en esa meta");

                const mesesReales = calcularAhorroPlazoReal(cashFuture, ingresos, ahorroIdeal);
                console.log("Se puede cumplir la meta a los siguientes meses: ",mesesReales)

                //Resultados
                
                resultado4.innerText = "Lastimosamente el ahorro de $" + cashFuture + " no se puede lograr en " + plazo + " meses, si se ahorra con el 20% total de ingresos, pero si se puede lograr en " + mesesReales + " meses, si se sigue con el mismo porcentaje de ahorro. Si más adelante se puede ahorrar un poco más de dinero se puede lograr en menos tiempo.";
            }


            //resultados:
            
            resultado.innerText = "El dinero libre que queda es de $" + restante + ". El porcentaje de la cantidad de dinero libre es del " + porcent + "%, pero se recomienda solo ahorrar el " + ahorroIdeal + "% del total de ingresos como máximo. Si no se desea ahorrar esa cantidad se puede ahorrar el 10% como porcentaje mínimo recomendado.";
        }

    }else{
        console.log("Falta");

        resultado.innerText = "Lo sentimos, no se puede realizar el calculo si el porcentaje disponible de ahorro es inferior al 10%";
    }
}

//Calculo de la cantidad de dinero que se obtiene en la meta

function calcularAhorroLargoPlazo(tPlazo, dFuture, dIngresos, dPorcentaje){
    console.log("tPlazo", tPlazo);

    const dineroPorcentaje = calcularDineroPorcentaje(dIngresos, dPorcentaje);
    console.log("Dinero restante ", dineroPorcentaje);

    const dineroFuturo = tPlazo * dineroPorcentaje;
    console.log("Dinero Futuro ", dineroFuturo);

    if(dineroFuturo >= dFuture){
        return 1;
    }else{
        return 0;
    }
}

//Calculo de la cantidad de dinero que se obtiene en meses reales

function calcularAhorroPlazoReal(dFuture, dIngresos, dPorcentaje){

    const dineroPorcentaje = calcularDineroPorcentaje(dIngresos, dPorcentaje);
    console.log("Dinero restante ", dineroPorcentaje);

    const plazoReal = Math.round((1 * dFuture) / dineroPorcentaje);


    if((dineroPorcentaje * plazoReal) >= dFuture){
        return plazoReal
    }else{
        return plazoReal+1;
    }

}

//Calculo de cuando es ese porcentaje del dinero que sobra

function calcularDineroPorcentaje(ingresos, porcentaje){
    return dineroPorcentaje = parseInt((ingresos * porcentaje) / 100);
}
