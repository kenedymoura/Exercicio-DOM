function lampadaAlternada(){
    // Passo 1: Pegar o elemento da imagem pelo ID
    let minhaLampada = document.getElementById("lampada")
    // Passo 2: Verificar qual imagem
    // está sendo exibida atualmente
    // Olhamos o final do caminho do arquivo (.scr)
    if (minhaLampada.src.includes("apagada.png")) {
    lampada.src = "acesa.png"
} else {
    lampada.src = "apagada.png"
}

}