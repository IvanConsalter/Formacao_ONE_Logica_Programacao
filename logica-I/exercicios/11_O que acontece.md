Aprendemos que a instrução alert tem como funcionalidade a exibição de um alerta pop up. Sendo assim, temos o seguinte código:

<'meta charset="UTF-8"'>
<'script'>
    alert();
<'/script'>
Sobre a maneira pela qual a instrução alert foi escrita podemos dizer que:

A) Nenhum popup será exibido

B) O popup será exibido, mas nenhuma mensagem será exibida.

C) Haverá um erro que pode ser averiguado pelo debugger, o console do navegador.

Podemos dizer que: B é verdadeira

Quando usamos a instrução alert() um popup será exibido e nenhum erro acontecerá. Contudo, nenhuma mensagem será exibida no popup. Mas que popup é esse que não exibe nada gente?

Sendo assim, precisamos passar um parâmetro para a instrução. Se quisermos exibir um texto aprendemos que texto em JavaScript vem entre aspas. Daí temos alert("Gostou do meu popup?"). Neste exemplo, dizemos que a instrução alert recebe como parâmetro um texto. Veja que esse parâmetro deve ser passado dentre os parênteses, caso contrário teremos um erro de sintaxe.

Sendo assim, temos a forma correta, mais uma vez:

alert("Gostou do meu popup?");
A forma errada:

alert "Gostou do meu popup?"
