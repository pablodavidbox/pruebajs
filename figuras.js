// Codigo del Cuadrado 
console.group("Cuadrados");
const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden: "+ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es:"+perimetroCuadrado);

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El area del cuadrado es:"+areaCuadrado);

console.groupEnd();
// Codigo del Triangulo ------------------------------------------------
//================================================================
//================================================================
console.group("Triangulo");
const ladoTriangulo1 = 6; 
const ladoTriangulo2 = 6;
const baseTriangulo = 4;



console.log("Los lados del triangulo miden: Lado 1"
                 +ladoTriangulo1
                 +" Lado2 "
                 +ladoTriangulo2
                 + "y la base "
                 +baseTriangulo
            );


const alturaTriangulo = 5.5;
console.log("La altura del trianguloes:"+alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;

console.log("El perimetro del triangulo es:"+perimetroTriangulo);

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;

console.log("El area del triangulo es:"+areaTriangulo);


console.groupEnd();