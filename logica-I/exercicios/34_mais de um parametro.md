Helena teve a ideia de criar a função somaDoisNumeros. Esta função precisa receber dois parâmetros e imprimir como resultado a soma desses dois números.

Qual das opções declara e chama corretamente esta função?

Alternativa correta
<'meta charset="UTF-8"><br>
<br>
<'script><br>
<br>
    function pulaLinha() {<br>
        document.write("<'br>");<br>
    }<br>
<br>
    function mostra(frase) {<br>
        document.write(frase);<br>
        pulaLinha();<br>
    }<br>
<br>
    function somaDoisNumeros(numero1, numero2) {<br>
        mostra("A soma dos dois números é : " + (numero1 + numero2) );<br>
    }<br>
<br>
    somaDoisNumeros(10, 40);<br>
<'/script><br><br>

O importante aqui é entender que se a função esta preparada para receber dois parâmetros, na hora que ela for chamada precisamos passar dois parâmetros. É claro, como já vimos, na declaração da função, podemos escolher qualquer nome para os parâmetros, mas precisamos usar esses nomes no bloco da função.