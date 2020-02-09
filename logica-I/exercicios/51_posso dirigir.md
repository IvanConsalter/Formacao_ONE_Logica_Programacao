Temos o seguinte programa:

<'meta charset="UTF-8"><br>
<br>
<'script><br>
    function pulaLinha() {<br>
        document.write("<'br>");<br>
    }<br>
<br>
    function mostra(frase) {<br>
        document.write(frase);<br>
        pulaLinha();<br>
    }<br>
<br>
    var idade = parseInt(prompt("Qual é sua idade?"));<br>
    var temCarteira = prompt("Tem carteira? Responda S ou N");<br>
<br>
<'/script><br><br>
Este programa, de acordo com a resposta do usuário, deve exibir a mensagem "Pode dirigir" ou "Não pode dirigir". Lembre-se que é permitido dirigir ao indivíduo com 18 anos ou mais e que também possua carteira de motorista.

Altere o programa para que ele responda com inteligência!

Resposta:

<'meta charset="UTF-8"><br>
<br>
<'script><br>
    function pulaLinha() {<br>
        document.write("<'br>");<br>
    }<br>
<br>
    function mostra(frase) {<br>
        document.write(frase);<br>
        pulaLinha();<br>
    }<br>
<br>
    var idade = parseInt(prompt("Qual é sua idade"));<br>
    var temCarteira = prompt("Tem carteira? Responda S ou N");<br>
<br>
    if( idade >= 18 && temCarteira == "S") {
        mostra("Pode dirigir");<br>
    } else {<br>
        mostra("Não pode dirigir");<br>
    }<br>
<'/script><br><br>