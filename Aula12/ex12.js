var idade = 10
if (idade >= 18) {
    console.log('Maior de idade: adulto')
} else {
    console.log('Menor de idade:')
    if(idade >= 14 && idade < 18){
        console.log('Adolescente')
    }
    else {
        console.log('Criança')
    }
}