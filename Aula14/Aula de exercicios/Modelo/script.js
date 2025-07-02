function contar() {
    var n1 = document.getElementById('txti')
    var n2 = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (n1.value.length == 0 || n2.value.length == 0 || passo.value.length == 0) {
        innerHTML = 'Impossivel contar'
       // window.alert('[ERRO] Estão dados em falta!')
    } else {
        res.innerHTML = 'Resultado: '
        var i = Number(txti.value)
        var f = Number(txtf.value)
        var p = Number(txtp.value)

        if (p <= 0) {
            window.alert('Passo invalido! Considerar passo = 1')
            p = 1
        } /*procurar unicode emoji list para adicionar o emoji */
        if (i < f) {
            //contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }

        } else {
            //contagem decrescente
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F44D}`
    }
}