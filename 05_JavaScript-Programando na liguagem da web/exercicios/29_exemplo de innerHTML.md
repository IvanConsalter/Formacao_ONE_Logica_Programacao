Rafael quer modificar o conteúdo do seguinte HTML, para utilizar o seu nome:

<p id="nome">Meu nome é Tadeu</p><br>
Ele conhece a propriedade innerHTML, e sabe que com ela pode modificar o HTML interno de um elemento, então ele fez o seguinte código:

var nome = document.querySelector("#nome").innerHTML;<br>
nome = "Meu nome é Rafael";<br><br>
Mas Rafael percebeu que o seu código não funciona, o que ele fez de errado? Pense no que Rafael fez de errado e em seguida veja a resposta do instrutor.

Resposta:

Na primeira linha, Rafael está obtendo o conteúdo do HTML interno do elemento <p>. Na segunda linha, ele apenas substitui o conteúdo dessa variável, ou seja, não define o innerHTML do elemento. Para modificar o HTML interno, Rafael deve alterar a propriedade innerHTML na segunda linha, e removê-la da primeira:

var nome = document.querySelector("#nome");<br>
nome.innerHTML = "Meu nome é Rafael";