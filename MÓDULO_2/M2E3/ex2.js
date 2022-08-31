function media() {
    var nota1 = parseFloat(document.getElementById ('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var media = (nota1 + nota2 / 2)

    var rest = (21 - media);
    alert('Para atingir a média, é necessário tirar ' + rest + ' pontos na próxima prova.')
}