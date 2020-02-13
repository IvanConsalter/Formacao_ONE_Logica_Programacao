Qual das opções abaixo usa corretamente a condição if e else ?

Reposta: 

var senha = prompt("Entre com sua senha");<br>
<br>
if(senha == "calopsitaazul") {<br>
<br>
    alert("Acesso liberado!");<br>
} else {<br>
<br>
    alert("Acesso negado!");<br>
}<br><br>

A condição if precisa receber o resultado de uma operação lógica dentro de seu parênteses.

var senha = prompt("Entre com sua senha");<br>
<br>
if(senha == "calopsitaazul")<br>
Além disso, é dentro do seu bloco que indicamos qual ou quais instruções serão executadas se a operação lógica der true:

var senha = prompt("Entre com sua senha");<br>
<br>
if(senha == "calopsitaazul") {<br>
    alert("Acesso liberado!");<br>    
}<br>
Veja que temos as duas chaves que iniciam e terminam o bloco if. A instrução else vem logo após o fechamento do bloco if:

var senha = prompt("Entre com sua senha");<br>
<br>
if(senha == "calopsitaazul") {<br>
    alert("Acesso liberado!");    <br>
} else<br><br>
Assim como a instrução if, a else também possui seu bloco com as instruções que desejamos executar se a condição if receber false:

var senha = prompt("Entre com sua senha");<br>
<br>
if(senha == "calopsitaazul") {<br>
<br>
    alert("Acesso liberado!");<br>
} else {<br>
<br>
    alert("Acesso negado!");<br>
}<br>