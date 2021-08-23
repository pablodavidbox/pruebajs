const salariosArg = argentina.map(
    function (personita) {
        return personita.salary;
    }

);

const salariosArgSorted = salariosArg.sort(
    function (salaryA, salaryB) {
           return salaryA - salaryB;
    }
);


////////////////////////////////
// Te dice si es un numero par
function esPar(number){
    return (number % 2  === 0);    
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length/2);

    if(esPar(list.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
    
}