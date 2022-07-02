function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var msg02 = document.getElementById('msg02')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `A hora agora é: ${hora}:${min}`
    if (hora >= 4 && hora <= 12) {
        img.src = 'Imagens/fotomanha.png'
        msg02.innerHTML = `Bom dia!`
        document.body.style.background = '#a99e42'
    } else if (hora > 12 && hora <=18) {
        img.src = 'Imagens/fototarde.png'
        msg02.innerHTML = `Boa tarde!`
        document.body.style.background = '#d45e16'
    } else {
        img.src = 'Imagens/fotonoite.png'
        msg02.innerHTML = `Boa noite!`
        document.body.style.background = '#515154'
    }
}