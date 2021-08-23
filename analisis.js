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

function esPar(number) {

    if( number % 2 === 0){
             return true;
    }else{
             return false;
    }
}