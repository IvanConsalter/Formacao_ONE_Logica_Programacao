Braga é estudante de química que tem interesse por programação. Ele entende que a programação pode ajudá-lo em suas pesquisas e, assim como qualquer estudante, resolveu fazer alguns testes.

O estudante criou um programa que pergunta a quantidade de carbono de duas substâncias. Para a segunda substância, ele fará um ajuste somando o número 2 com o valor lido. Depois de feito o ajuste, o programa compara se a quantidade de carbono da primeira substância é igual ao do segundo e avisa ao usuário se forem iguais.

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
    var quantidadeCarbono1 = parseInt(<br>prompt("Quantidade de carbono substância 1"));<br>
    var quantidadeCarbono2 = parseInt(prompt("Quantidade de carbono substância 2"));<br>
<br>
    quantidadeCarbono2 = quantidadeCarbono2 + 2;<br>
<br>
    if(quantidadeCarbono1 = quantidadeCarbono2 ) {<br>
<br>
        mostra("Acho que são substâncias parecidas");<br>
    } else {<br>
<br>
        mostra("São substâncias bem diferentes");<br>
    }<br>
<br>
<'/script><br><br>
Contudo, mesmo se ele digitar 1 e depois 8 (valores que não serão iguais no final) é sempre exibida a mensagem "Acho que são substâncias parecidas".

Resposta:

Braga cometeu um erro comum de iniciantes no mundo da programação. Na cláusula if usou apenas = no lugar de ==. O primeiro é um sinal de atribuição e o segundo é de igualdade. Corrigindo seu código temos o seguinte:

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
    var quantidadeCarbono1 = parseInt(prompt("Quantidade de carbono substância 1"));<br>
    var quantidadeCarbono2 = parseInt(<br>prompt("Quantidade de carbono substância 2"));<br>
<br>
    quantidadeCarbono2 = quantidadeCarbono2 + 2;<br>
<br>
    if(quantidadeCarbono1 == quantidadeCarbono2 ) {<br>
<br>
        mostra("Acho que são substâncias parecidas");<br>
    } else {<br>
<br>
        mostra("São substâncias bem diferentes");<br>
    }<br>
<br>
<'/script><br><br>