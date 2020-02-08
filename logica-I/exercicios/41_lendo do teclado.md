Se quisermos exibir um pop-up, que mostre uma pergunta e permita ao usuário entrar com um valor, fazemos uso da função prompt.

Usando a função prompt, qual das opções abaixo lê dois números, do teclado, e exibe a multiplicação de um por outro para o usuário?

Alternativa correta
<'meta charset="UTF-8"><br>
<br>
<'script><br>
<br>    function pulaLinha() {
<br>
<br>        document.write("<'br>");
<br>    }
<br>
<br>    function mostra(frase) {
<br>        document.write(frase);
<br>        pulaLinha();
<br>    }
<br>
<br>    var numero1 = prompt("Digite o primeiro número");
<br>    var numero2 = prompt("Digite o segundo número");
<br>
 <br>   mostra("O valor de " + numero1 + " vezes " + numero2 + " é: " + (numero1 * numero2));
<br>
<'/script><br><br>

Estamos pegando o retorno da função prompt e estamos atribuindo as respectivas variáveis numero1 e numero2.