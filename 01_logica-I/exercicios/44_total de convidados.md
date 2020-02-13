Goretti criou um programa simples para somar o total de convidados de sua festa com o total de convidados VIPs. Com certeza ela poderia utilizar a calculadora, mas achou relevante para exercitar seus conhecimentos elaborar um programa. Então, Goretti escreveu o seguinte:

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
<br>
<'/script><br><br>
Veja que ela usou a função prompt() para ler a quantidade de convidados e vips. Se ela entrar com 10 convidados e 7 vips, qual será o resultado exibido na tela?

Resposta:

107


Exatamente como o retorno da função prompt() é sempre string ao utilizar o operador + é aplicado uma concatenação.