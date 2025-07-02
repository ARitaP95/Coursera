function tabuada() {
    var n = document.getElementById('num')
    var tab = document.getElementById('seltab')

    if(n.value.length == 0) {
        window.alert('Por favor, digita um numero!')
    } else {
        var num = Number(n.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        }
    }
}