Tuane tem o hábito de colocar sempre três asteriscos antes e depois das mensagens de alerta. Vejamos um exemplo de seu código:

<'meta charset="UTF-8"><br>
<'script><br>
    var idade1 = 10;<br>
    var idade2 = 20;<br>
    var idade3 = 30;<br>
    var totalIdades = idade1 + idade2 + idade3;<br>
    var mediaIdades = totalIdades/3;<br>
    alert("***Total de idades é " + totalIdades + "***");<br>
    alert("***A média das idades é " +  mediaIdades + "***");<br>
<'/script><br><br>
Qual das opções abaixo cria corretamente a função exibeAlerta, que recebe como parâmetro o texto que queremos exibir no alerta, e que realiza a concatenação com os três asteriscos?

<'meta charset="UTF-8"><br>
<'script><br>
    function exibeAlerta(mensagem) {<br>
        alert("***" + mensagem + "***");<br>
    }<br>
<br>
    var idade1 = 10;
   <br>
    var idade2 = 20;<br>
    var idade3 = 30;<br>
    var totalIdades = idade1 + idade2 + idade3;<br>
    var mediaIdades = totalIdades/3;<br>
<br>
    exibeAlerta("Total de idades é " + totalIdades);<br>
    exibeAlerta("A média das idades é " +  mediaIdades);<br>
<'/script><br><br>

Na função exibeAlerta estamos recebendo como parâmetro mensagem e dentro da função estamos passando esse parâmetro para passar o alert.