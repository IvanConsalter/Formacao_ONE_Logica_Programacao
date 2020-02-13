Temos as seguintes operações

var a = parseInt("10");<br>
var b = parseInt("Calopsita");<br>
var c = parseInt(10);<br><br>
Podemos dizer que:

A variável `a` recebe o número 10 retornado por `parseInt`.

A variável `b` recebe `NaN` (not a number) retornado por `parseInt`.

A variável `c` recebe 10, número, retornado por `parseInt`.

A variável a recebe o número 10 retornado por parseInt. Veja que a função esta recebendo a string "10". Ela converte a string em um número.

A variável b recebe NaN (not a number) retornado por parseInt. Isso é verdade, porque parseInt está recebendo a string "Calopsita". É impossível converter esse texto para número, pois não há uma representação numérica para ele, como foi o caso de a.

A variável c recebe 10, número, retornado por parseInt. Quando parseInt recebe um número e não uma string, ele devolve o mesmo número, ou seja, não realiza conversão alguma. Não dá erro, funciona.