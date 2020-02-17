Temos o seguinte código:

<'script><br>
<br>
    var aprendi = true;<br>
<br>
    if(aprendi == true) {<br>
<br>
        alert('O instrutor fica muito contente');<br>
    } else {<br>
<br>
        alert('O instrutor não vai desistir até você virar um cangaceiro!');<br>
    }<br>
<'/script><br><br>
Não há nenhuma novidade, aliás lidamos com códigos como esse no curso anterior. Nossa condição if testa se o valor da variável aprendi é verdadeira, ou seja, se é true. Usamos inclusive o operador ==.

No entanto, podemos simplificar esse código para:

<'script><br>
<br>
    var aprendi = true;<br>
<br>
    if(aprendi) {<br>
<br>
        alert('O instrutor fica muito contente');<br>
    } else {<br>
<br>
        alert('O instrutor não vai desistir até você virar um cangaceiro!');<br>
    }<br>
<'/script><br><br>
Veja que não usei mais o operador ==. Você deve estar intrigado por ter funcionado. Primeiro, lembre-se que o if() espera receber true ou false para saber se executa o código do seu bloco ou o código do bloco do else. Se aprendi já é true, é redundante realizarmos o teste aprendi == true.

Se uma variável já guarda true ou false podemos usá-la diretamente no if poupando alguns caracteres. No entanto, se você se sente mais seguro com a forma anterior, continue com ela. O importante é você ir sentindo o que prefere e o que não prefere em programação. Até porque, não desejo que meus alunos sejam "carbonos" de mim.

Programar é uma arte e como toda arte começamos a enxergar beleza onde não havia.