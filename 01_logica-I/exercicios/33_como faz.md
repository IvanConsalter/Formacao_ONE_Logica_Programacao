Ricardo mostrou seu programa para Pedro. Assim que Pedro abriu o programa ele viu o seguinte resultado na tela:

**************************************************
BEM-VINDO AO MEU PROGRAMA
**************************************************
ELE REALMENTE FUNCIONA
**************************************************
EU USEI FUNÇÃO PARA FAZER ISSO
O problema é que Ricardo não quis mostrar para Pedro como o programa foi feito, mas ele deu uma pista quando exibiu a informação na tela: ele usou uma função para escrever cada linha.

Qual das opções abaixo possui um código que ao ser executado, possui a mesma saída que Pedro viu no programa de Ricardo?

<'meta charset="UTF-8"><br>
<'script><br>
<br>
    function pulaLinha() {
<br><br>
        document.write("<'br>");<br>
    }
<br><br>
    function mostra(frase) {
<br><br>
        document.write("**************************************************");<br>
        pulaLinha();<br>
        document.write(frase);<br>
        pulaLinha();<br>
    }
<br><br>
    mostra("BEM-VINDO AO MEU PROGRAMA");<br>
    mostra("ELE REALMENTE FUNCIONA");<br>
    mostra("EU USEI FUNÇÃO PARA FAZER ISSO");<br>
<br>
<'/script><br><br>

Veja que a função mostra teve que chamar a função pulaLinha duas vezes. Uma vez após imprimir a linha com os asteriscos e outra logo após imprimir a frase passada para a função.