Roy, depois de ter muito contato com a programação, acabou se tornando programador.

O seguinte código o fez refletir bastante:

<'meta charset="UTF-8"><br>
<'script>
<br>
    var idadeLinda = 12;
<br>
    var idadeGuaraciara = 15;
<br>
    var idadePerola = 13;
<br>
    document.write( (idadeLinda + idadeGuaraciara + idadePerola) / 3);
<br>
<'/script><br><br>
Ele viu que poderia evitar o uso dos parênteses na instrução que imprime a média das idades se guardasse antes, em uma variável, a soma das idades.

Altere o programa e aplique a ideia de Roy! Para isso, use a variável totalIdades.

Alterando o código de Roy temos:

<'meta charset="UTF-8"><br>
<'script>
<br>
    var idadeLinda = 12;
<br>
    var idadeGuaraciara = 15;
<br>
    var idadePerola = 13;
<br>
    var totalIdades = idadeLinda + idadeGuaraciara + idadePerola;
<br>
    document.write( totalIdades / 3);
<br>
<'/script><br><br>