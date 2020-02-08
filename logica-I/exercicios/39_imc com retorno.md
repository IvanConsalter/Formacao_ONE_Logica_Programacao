Laércio criou a função calculaImc:

<'meta charset="UTF-8"><br>
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
    function calculaImc(altura, peso) {<br>
<br>
        var imc = peso / (altura * altura);<br>
    }<br>
<br>
    var imcCalculado = calculaImc(1.77, 75);<br>
    mostra("O meu IMC é : " + imcCalculado);<br>
<'/script><br><br>
Contudo, o que está escrito no mundo HTML é o texto "O meu IMC é undefined".

Como alterar o código de Laércio para que o retorno da função calculaImc seja para a variável imcCalculado?

Reposta:

<'meta charset="UTF-8"><br>
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
    function calculaImc(altura, peso) {<br>
<br>
        var imc = peso / (altura * altura);<br>
        return imc;<br>
    }<br>
<br>
    var imcCalculado = calculaImc(1.77, 75);<br>
    mostra("O meu IMC é : " + imcCalculado);<br>
<'/script><br><br>