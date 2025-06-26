function carregar() {
  
    var txth = window.document.querySelector('div#msg')
    var foto = document.querySelector('img#imagem')
    var date = new Date()
    var hora =  date.getHours()
    hora = 19
    txth.innerHTML = `Agora são ${hora}Horas`

    if (hora >= 0 && hora < 12) {
        foto.src = 'manhap.png'
        document.body.style.background = '#E1F3FD'
    } else if (hora >= 12 && hora <= 18) {
        foto.src = 'tardep.png'
        document.body.style.background ='#F5DF79'
    } else {
        foto.src = 'noitep.png'
                document.body.style.background ='#367DB5'
    }
}
