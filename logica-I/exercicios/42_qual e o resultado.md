Temos o seguinte programa:

<'meta charset="UTF-8"><br>
<br>
<'script><br>
<br>    function pulaLinha() {
<br>
<br>        document.write("<br>");
<br>    }
<br>
<br>    function mostra(frase) {
<br>        document.write(frase);
<br>        pulaLinha();
<br>    }
<br>
<br>    function a(numero1, numero2) {
<br>        return numero1 + numero2;
<br>    }
<br>
<br>    function b(numero1, numero2) {
<br>        return numero1 / numero2;
<br>    }
<br>
<br>    var resultado = a(10,20) + b(30,2);
<br>
<br>    mostra(resultado);<br>
<'/script><br><br>

Resposta:

45


Veja operação estamos somando o resultado, ou seja, o retorno da função a(10,20) com o retorno da função b(30,2). A primeira função retorna 30 e a segunda 15. No final temos a soma dos dois número, que dá 45.