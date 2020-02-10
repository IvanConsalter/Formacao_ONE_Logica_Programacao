Aprendemos a utilizar parseInt() para converter um texto em número. Certo? Contudo, ele converte um texto para um número inteiro e nem sempre queremos abdicar dos números decimais. Vejamos um exemplo:

var numero = parseInt("12.13");<br>
O valor de numero será 12. Para que as casas decimais sejam mantidas, usamos o parseFloat():

var numero = parseFloat("12.13");<br>
O valor de numero será 12.13.

Obs:
Não é necessário usar o parseFloat() quando lemos os dados de peso e altura no cálculo do IMC, são como operações de divisão e multiplicação o JavaScript já realiza a conversão implícita para nós. Contudo, é uma boa prática usar parseInt() ou parseFloat() se queremos ler números inteiros ou decimais fornecido pela função prompt. Nem sempre a conversão implícita vai dar certo, como é o caso do número de vitórias e empates.