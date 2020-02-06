Moacir escreveu o seguinte código que exibe na tela o resultado da tabuada de 5!

<'meta charset="UTF-8"><br>
<'script><br>
    document.write("5 vezes 1 é " + 5 * 1+ "<'br>");<br>
    document.write("5 vezes 2 é " + 5 * 2+ "<'br>");<br>
    document.write("5 vezes 3 é " + 5 * 3+ "<'br>");<br>
    document.write("5 vezes 4 é " + 5 * 4+ "<'br>");<br>
    document.write("5 vezes 5 é " + 5 * 5+ "<'br>");<br>
    document.write("5 vezes 6 é " + 5 * 6+ "<'br>");<br>
    document.write("5 vezes 7 é " + 5 * 7+ "<'br>");<br>
    document.write("5 vezes 8 é " + 5 * 8+ "<'br>");<br>
    document.write("5 vezes 9 é " + 5 * 9+ "<'br>");<br>
    document.write("5 vezes 10 é " + 5 * 10+ "<'br>");<br>
<'/script><br><br>
E se quisermos a tabuada do 8? Teremos que fazer a alteração de valores em diversos lugares! O que podemos fazer para guardar o valor da tabuada que desejamos calcular?


Vamos criar a var tabuada que receberá 8:

<'meta charset="UTF-8"><br>
<'script><br>
    var tabuada = 8;<br>
    document.write(tabuada + " vezes 1 é " + tabuada * 1 + "<'br>");<br>
    document.write(tabuada + " vezes 2 é " + tabuada * 2 + "<'br>");<br>
    document.write(tabuada + " vezes 3 é " + tabuada * 3 + "<'br>");<br>
    document.write(tabuada + " vezes 4 é " + tabuada * 4 + "<'br>");<br>
    document.write(tabuada + " vezes 5 é " + tabuada * 5 + "<'br>");<br>
    document.write(tabuada + " vezes 6 é " + tabuada * 6 + "<'br>");<br>
    document.write(tabuada + " vezes 7 é " + tabuada * 7 + "<'br>");<br>
    document.write(tabuada + " vezes 8 é " + tabuada * 8 + "<'br>");<br>
    document.write(tabuada + " vezes 9 é " + tabuada * 9 + "<'br>");<br>
    document.write(tabuada + " vezes 10 é " + tabuada * 10 + "<'br>");<br>
<'/script><br><br>


É um caminho muito mais simples que exibir outras tabuadas! Basta alterar o valor da variável tabuada em apenas um lugar.