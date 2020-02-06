Amanda esteve muito ocupada e não teve tempo de finalizar um trabalho em grupo. Seus amigos, desesperados, precisam terminar o programa para conseguirem um ponto que pode ajudá-los a passar na matéria. O código era o seguinte:

<'meta charset="UTF-8"'><br>
<'script'><br>
    document.write("O resultado da fórmula é : " + n * (10 / 20)  );<br>
<'/script'><br><br>
Sabendo que n pode ser qualquer número de 1 a 5 (número que você vai atribuir), o que precisa ser feito para o código funcionar?

Resposta:

Note que o código utiliza uma variável chamada n que não foi declarada. Podemos resolver o problema declarando-a antes de ser usada:

<'meta charset="UTF-8"'><br>
<'script'><br>
    var n = 3;<br>
    document.write("O resultado da fórmula é : " + n * (10 / 20)  );<br>
<'/script'><br><br>
Para a variável n podemos atribuir um numero de 1 a 5. Por exemplo, vamos atribuir o valor 3 e isso estará correto.