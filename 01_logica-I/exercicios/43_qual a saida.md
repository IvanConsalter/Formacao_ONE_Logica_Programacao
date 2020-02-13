Temos o seguinte código:

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
<br>    function a(texto) {
<br>
<br>        return "(" + texto + ")";
<br>    }
<br>
<br>    function b(texto) {
<br>
<br>        return "@" + texto + "@";
<br>    }
<br>
<br>    function c(nome, sobrenome) {
<br>
<br>        return b(nome + " " + a(sobrenome));
<br>
<br>    }
<br>
<br>    var resultado = c("Flávio", "Almeida");
<br>
<br>    mostra(resultado);
<br>
<'/script><br><br>
O que será exibido na tela com a instrução mostra(resultado)?

Resposta: @Flávio (Almeida)@


A função b esta recebendo a concatenação do nome com o sobrenome, mas veja que o sobrenome é o retorno da função a. A função a devolverá o sobrenome entre parênteses, daí, esse valor será concatenado com o nome e o resultado finalmente será passado para a função B.