Simone, em um primeiro teste de programação realizou a seguinte operação:

<'meta charset="UTF-8"><br>
<'script><br>
    document.write("Resultado: " + 10/3);<br>
<'/script><br><br>
O resultado impresso na tela foi Resultado: 3.3333333333333335!

Qual das opções abaixo exibe o código de Simone corretamente alterado - fazendo uso da instrução Math.round - para arredondar o resultado exibindo-o na tela?

Resposta:

<'meta charset="UTF-8"><br>
<'script><br>
    document.write("Resultado " + Math.round(10/3) );<br>
<'/script><br><br>

Veja que estamos concatenando a string "Resultado " com o resultado do arredondamento de 10/3. Veja que Math.round recebe entre seus parênteses () o valor que queremos arredondar.