Geralda e Haroldo são casados e ambos são médicos. Contudo, sempre foram interessados por tecnologia e se matricularam na Alura para aprender lógica de programação.

Eles receberam como dever de casa, o seguinte código:

var contador = 1;<br>
while(contador <= 10) {<br>
    alert("Contador atual: " + contador);<br>
    contador = contador + 1;<br>
}<br><br>
Eles precisam convertê-lo de maneira a usar a instrução for.

Qual das opções abaixo realiza essa conversão corretamente?

Resposta:

A instrução for é dividida em três partes que são separadas por ponto e vírgula. A primeira é destinada a variável de incremento, a segundo à condição de repetição e a última ao incremento da variável de incremento.

Aliás, quando queremos incrementar de um em um, podemos usar o pós incremento:

for( var contador = 1; contador <= 10; contador++ ) {<br>
    alert("Contador atual: " + contador);<br>
}<br><br>
Veja que usamos contador++ no lugar de contador = contador + 1. A primeira forma é muito mais enxuta.