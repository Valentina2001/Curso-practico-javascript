//Calcular descuento con cupones

let cupones = ["CHAP25", "PWIR18", "CQPQM10", "MGWQWO15"];

function calcularDescuentoConCupones (precio, cupon){
    let porcentajePrecioConDescuento;
    let precioConDescuento;

    if (cupon == "CHAP25"){
        porcentajePrecioConDescuento = 100 - 25;
        precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

        return precioConDescuento;
    } else if(cupon == "PWIR18"){
        porcentajePrecioConDescuento = 100 - 18;
        precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

        return precioConDescuento;
    } else if(cupon == "CQPQM10"){
        porcentajePrecioConDescuento = 100 - 10;
        precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

        return precioConDescuento;
    } else if (cupon == "MGWQWO15"){
        porcentajePrecioConDescuento = 100 - 15;
        precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

        return precioConDescuento;
    }
    
}

function onClickButtonPriceCupon(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("InputCupon");
    const discountValue = inputCupon.value;

    let contador = 0;
    for (let i = 0; i <= cupones.length; i++){
        console.log(cupones[i]);
        if(cupones[i] == discountValue){
            const precioConDescuento = calcularDescuentoConCupones(priceValue, discountValue);

            const resultP = document.getElementById("ResultP")
            resultP.innerText = "El precio con descuento es: $" + precioConDescuento;

            contador = 1; 
            break;
        }
        
    }

    if(contador == 0){
        const resultP = document.getElementById("ResultP")
        resultP.innerText = "El cupon ingresado no es válido, por favor intente nuevamente";
    }
    
}