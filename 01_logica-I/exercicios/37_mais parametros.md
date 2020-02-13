Lionel estava ansioso, pois no final de seu expediente, um dia antes da semana de carnaval começar, já tinha realizado todas as tarefas que lhe foram pedidas. Contudo, houve um pedido de última hora! Ele precisava criar uma função que recebe três parâmetros. O primeiro é uma letra e os outros dois são números que no final devem retornar um código. Seu chefe disse que para os parâmetros "A", 20 e 30o código criado deve ser GH1022.

Lionel ficou desesperado, pois a lógica era complicada e mesmo a função não sendo usada durante o carnaval, mas apenas dez dias depois, ainda assim seu chefe recusou-se a postergar o pedido. Sendo assim, Lionel teve a brilhante, mas questionável ideia de fazer o seguinte: Não importando quais os parâmetros da função, ela sempre retornará GH1022.

Quando chegou a hora de mostrar a função funcionando para seu chefe ele fez:

var codigo = geraCodigo("A", 20, 30);
document.write(codigo); // mostrou GH1022
A sorte de Lionel foi que seu chefe se contentou com o teste. Mas, se ele tivesse pedido um teste com outros parâmetros, o resultado seria o mesmo e sua farsa seria descoberta.

Qual das opções abaixo possui a função "enganadora" criado por Lionel? (Aliás, não façam isso nunca! Certo? ;) )

Resposta:

function geraCodigo(letra, numero1, numero2) {
<br>
    return "GH1022";<br>
}<br><br>

Lembre-se que uma função pode receber zero ou mais parâmetros. Dentro de seu bloco, ela pode realizar cálculos e operações que podem usar variáveis, inclusive até outras funções. Contudo, uma função só pode retornar um valor e é por isso que usamos a instrução return. Essa instrução indica para a função quais valores serão retornados por ela. No caso da função de Lionel, não importa que parâmetro você passe para a função, ela sempre retornará GH1022.