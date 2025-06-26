function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fgen = document.getElementsByName('radgen')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fgen[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'menino.png')
            } else if (idade >= 12 && idade < 25) {
                img.setAttribute('src', 'jovemH.png')
            } else if (idade >= 25 && idade < 65) {
                img.setAttribute('src', 'adultoH.png')
            } else {
                img.setAttribute('src', 'fotoH65+.png')
            }
        } else if (fgen[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'menina.png')
            } else if (idade >= 12 && idade < 25) {
                img.setAttribute('src', 'jovemM.png')
            } else if (idade >= 25 && idade < 65) {
                img.setAttribute('src', 'adultoM.png')
            } else {
                img.setAttribute('src', 'fotoM65+.png')
            }
        }
        res.innerHTML = `<p>Idade: ${idade}</p> <p>Genero: ${genero}</p>`
        res.appendChild(img)
    }
}