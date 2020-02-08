Veja a seguinte declaração de função:

function funcaoQualquer() {
<br>
    var n1 = 10;<br>
    var n2 = 20;<br>
    var n3 = 30;<br>
}<br><br>
Queremos guardar o retorno da função em uma variável:

var retorno = funcaoQualquer();
Sabemos que do jeito que está, o valor de retorno será undefined. Qual das opções abaixo altera corretamente o código para que a função retorne 20, ou seja, para que o valor da variável retorno seja 20?

Resposta:

function funcaoQualquer() {
<br>
    var n1 = 10;<br>
    var n2 = 20;<br>
    var n3 = 30;<br>
<br>
    return n2;<br>
}<br><br>

Veja que dentro de uma função podemos declarar variáveis, contudo, se quiser retornar o valor de uma delas precisamos usar a instrução return seguida do nome da variável.