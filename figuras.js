// Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}

//console.log("El área del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();
// Código del triángulo
//console.group("Triángulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

//const alturaTriangulo = 5.5;

//console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

//console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");



function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

//console.log("El área del triángulo es: " + areaTriangulo + "cm2");


console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
//const radioCirculo = 4;
//console.log("El radio del círculo: " + radioCirculo + "cm");

// Diámetro
function diamentroCirculo (radio){
    return radio * 2;
}

//const diametroCirculo = radioCirculo * 2;
//console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
//console.log("PI es: " + PI);

// Circunferencia

function perimetroCirculo(radio){
    const diametro = diamentroCirculo(radio);
    return diametro * PI; 
} 

//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perímetro de círculo miden: " + perimetroCirculo + "cm");

// Área

function areaCirculo(radio){
    return (radio * radio) * PI;
} 

//console.log("El área del círculo es: " + areaCirculo + "cm2"); 
console.groupEnd();


//Aquí interactuamos con el HTML

//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
}

//Triángulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = Number(input3.value);

    const perimetroT = perimetroTriangulo(value1, value2, value3);

    alert(perimetroT);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTrianguloBase");
    const value1 = input1.value;
    const input2 = document.getElementById("InputTrianguloAltura");
    const value2 = input2.value;

    const areaT = areaTriangulo(value1, value2);

    alert(areaT);
}

//Círculo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetroC = perimetroCirculo(value);
    alert(perimetroC);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const areaC = areaCirculo(value);
    alert(areaC);
}