let num = [4, 2, 3, 1]
num.push(5)
num.sort()

console.log(`Nosso vetor é o ${num}`) // Aqui a impressão é feita toda seguida na mesma linha

console.log(`O comprimento do vetor é de ${num.length} posições`)

console.log(`A posição 0 ou primeira posição é o valor ${num[0]}`)

//fazer impressão independente
console.log('Imprimir valores do vetor independentemente sem loop')
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])


console.log('Agora com for')
// Não é aconselhavel fazer assim para isto podemos usar um loop onde temos de criar um variavel para a posição que queremos imprimir

for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

console.log(`A posicão onde se encontra o valor 5 é ${num.indexOf(5)}`)
console.log(`A posição de um valor que não existe no vetor é dada pelo JS como ${num.indexOf(7)}`) 

//Para dar um sinal de alerta caso o valor não exista
let pos = num.indexOf(6)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log (`O valor está na posição ${pos}`)
}