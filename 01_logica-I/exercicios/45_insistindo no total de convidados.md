No exercício anterior, vimos que o código de Goretti realiza a concatenação de dois números lidos pelo teclado.

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
    var convidados = prompt("Número de convidados");<br>
    var vips = prompt("Número de convidados VIP's");<br>
<br>
    var total = convidados + vips;<br>
<br>
    mostra("O total de convidados é " + total);<br>

<'/script><br><br>
Qual das opções abaixo possui o código anterior alterado para que calcule corretamente o total de convidados?

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
    var convidados = parseInt(prompt("Número de convidados"));<br>
    var vips = parseInt(prompt("Número de convidados VIP's"));<br>
<br>
    var total = convidados + vips;<br>
<br>
    mostra("O total de convidados é " + total);<br>
<br>
<'/script><br><br>

Como a função prompt sempre retorna o que digitamos no formato texto, ou seja, como um string, é uma boa prática sempre convertermos o valor digitado para número quando nossa intenção é ler um número. Vamos analisar esta instrução:

var convidados = parseInt(prompt("Número de convidados"));
A função prompt retorna o que digitamos como string e esse retorno é passado para parseInt. É esta função que recebe uma string e a converte para número. Agora, como temos dois números ligados, não acontecerá mais a concatenação, mas sim a soma.