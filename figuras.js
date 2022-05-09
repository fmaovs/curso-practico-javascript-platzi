//Codigo cuadrado
console.group("Cuadrados");

// Perímetro cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
} 
perimetroCuadrado();

// areaCuadrado 
function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//Código triángulo
console.group("Triángulos");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

// Area triángulo
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

// Code isósceles triangle
function heigthTriangle(a, b){
    return Math.sqrt(((a*a)-((b*b)/4)));
}

//Código círculo
console.group("Circulos");


//Diametro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log( "pi es "+ PI);

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();

// Aquí interactuamos con el HTML

// square
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

// triangle

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangle1").value;
    const input2= document.getElementById("InputTriangle2").value;
    const input3 = document.getElementById("InputTriangle3").value;
    const lado1 = parseFloat(input1);
    const lado2 = parseFloat(input2);
    const base = parseFloat(input3);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calculateAreaTriangle(){
    const input4 = document.getElementById("InputTriangle4").value;
    const input5 = document.getElementById("InputTriangle5").value;
    const heigth = parseFloat(input4);
    const base = parseFloat(input5);

    const area = areaTriangulo(base, heigth);
    alert(area);
}

// Circumference

function calculateDiameter(){
    const input = document.getElementById("InputCircumference").value;
    const radius = parseFloat(input);

    const diameter = diametroCirculo(radius);
    alert(diameter);
}

function calculateCircumferencePerimeter(){
    const input = document.getElementById("InputCircumference").value;
    const radius = parseFloat(input);

    const perimeter = perimetroCirculo(radius);
    alert(perimeter);
}

function calculateCircumferenceArea(){
    const input = document.getElementById("InputCircumference").value;
    const radius = parseFloat(input);

    const area = areaCirculo(radius);
    alert(area);
}

function calculateHeigthIsosceles(){
    const inputSideA = document.getElementById("InputSideIsosceles").value;
    const inputSideB = document.getElementById("InputSideIsosceles2").value;
    const input2 = document.getElementById("InputBaseIsosceles").value;
    const a = parseFloat(inputSideA);
    const b = parseFloat(inputSideB);
    const c = parseFloat(input2);

    if(a == b){
        const heigth = heigthTriangle(a,c);
        alert(heigth);
    }else {
        alert("no es un triangulo isosceles.")
    }
}