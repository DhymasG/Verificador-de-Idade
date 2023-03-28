function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                // Criança  
                img.setAttribute('src', 'bebemas.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemmas.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultomas.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosomas.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                // Criança 
                img.setAttribute('src', 'bebefem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemfem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultofem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosofem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}