const salariosArg = argentina.map(
    function (personita) {
        return personita.salary;
    }

);

const salariosArgSorted = salariosArg.sort(
    function (salaryA, salaryB) {
               salaryA - salaryB;
    }
);



////////////////////////////////
// Te dice si es un numero par
function espar(number){
    return (number % 2  === 0);    
}