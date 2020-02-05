Vejamos o exemplo do programa entendendo_dois_mundos.html. Seu conteúdo é:

<meta charset="UTF-8">
<script>
    document.write("Estou escrevendo do mundo JavaScript no mundo HTML");
</script>
Observe a instrução document.write que recebe entre () o texto: "Estou escrevendo do mundo JavaScript no mundo HTML". Quando usamos document.write, dentro de script, estamos, na verdade, escrevendo no mundo HTML, ou seja, o que veremos é um resultado HTML.

Para quem está começando pode parecer estranho, visto que conseguimos fazer a mesma coisa escrevendo o texto diretamente no mundo HTML como no exemplo abaixo:

<meta charset="UTF-8">
Estou escrevendo do mundo JavaScript no mundo HTML
<script>

</script>
Lembre-se que tudo que estiver entre as TAG's <script> e </script> é considerado pelo navegador como código JavaScript e tudo que estiver fora das TAG's, não importa em que lugar, é código HTML. Mais um exemplo:

<meta charset="UTF-8">
Estou escrevendo do mundo JavaScript no mundo HTML
<script>

</script>
Aqui também é mundo HTML, porque esta fora da TAG script
A vantagem é que com document.write podemos passar o resultado de um cálculo entre outras coisas de maneira dinâmica já que o mundo HTML não é capaz de realizar operações matemáticas.

Desse modo, podemos fazer o seguinte:

<meta charset="UTF-8">
<script>
    document.write(10 + 20);
</script>
Nesse caso, o document.write recebe dentro de () o resultado da operação que é 30. O que o document.write faz é alterar a página de maneira a escrever o que quiser no mundo HTML. Isso que estamos escrevendo pode ser o resultado de uma lógica de programação mais complexa!

Quer mais uma prova de que document.write pertence ao mundo JavaScript e consegue escrever no mundo HTML? Vejamos mais um exemplo:

<meta charset="UTF-8">
<script>
    document.write("<h1>Seja bem-vindo</h1>");
</script>
Veja que estamos escrevendo do mundo JavaScript no mundo HTML o texto "<h1>Seja bem-vindo</h1>". Se isso faz parte do mundo HTML, o navegador irá interpretar o código como HTML e colocará o texto em destaque pois usamos a TAG <h1>. O resultado é o mesmo que se tivéssemos escrito diretamente no mundo HTML:

<meta charset="UTF-8">
<h1>Seja bem-vindo</h1>
<script>
</script>
Por fim, não podemos escrever no mundo HTML instruções JavaScript:

<meta charset="UTF-8">
document.write("Seja bem-vindo");
<script>
</script>
O HTML não entende que deve exibir o texto passado pela instrução, ele imprime a instrução e não seu resultado! Sendo assim, fique atento sempre que escrever seu código.