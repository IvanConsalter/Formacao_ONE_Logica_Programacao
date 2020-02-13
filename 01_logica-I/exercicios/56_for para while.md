É comum usarmos o zero para iniciar um laço de repetição. Isso nos trará vantagens quando, nas próximas atividades, formos trabalhar com Array's. Mas preste atenção, quando usamos o zero para iniciar uma repetição, precisamos substituir o sinal do limitador (espaco2), de <= (menor igual) para apenas < (menor), pois o zero conta como primeiro elemento dentro do laço.

Dito isso, temos o seguinte código:

for( var i = 0; i < 10; i++ ) {<br>
    alert( "O resultado é " + (2 * i) );<br>
}<br><br>
Converta-o para usar a instrução while. Lembre-se: o resultado do programa tem que ser o mesmo!

Resposta:

Agora, podemos fazer o mesmo utilizando o while():

var i = 0;<br>
while( i < 10) {<br>
    alert( "O resultado é " + (2 * i) );<br>
    i++;    <br>
}<br><br>