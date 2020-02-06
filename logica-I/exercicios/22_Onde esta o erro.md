Sílvia escreveu o seguinte código:

<'meta charset="UTF-8"'><br>
<'script'><br>
    var minhaIdade = 20;<br>

    document.write("Eu nasci em " + (2016 - minhaidade) );
  
<br><'/script'><br><br>
O código de Sílvia não funciona. Qual é o problema?

Resposta:

O problema encontra-se no nome da variável. Na declaração a variável chama-se minhaIdade. Contudo, quando ela é usada em document.write é escrita de maneira errada, com o "i" minúsculo. A simples diferença fará com que o JavaScript não encontre a variável. Corrigindo:

<'meta charset="UTF-8"'><br>
<'script'><br>
    var minhaIdade = 20;<br>

    document.write("Eu nasci em " + (2016 - minhaIdade) );
   <br>
<'/script'><br>