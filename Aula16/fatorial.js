function fatorial (n) {
    let fat = 1
    let c = n

    while (c > 1) {
        fat = fat*c //ou fat *= c
        c--
    }
    return fat
}
console.log(fatorial(5))

/*
Podemos tambem fazer de forma recursiva

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!
n! = n x (n - 1)!

*/

function factorial(n2){
    if (n2 == 1){
        return 1
    } else{
        return n2 * factorial(n2 - 1)
    }
}
console.log(factorial(6))