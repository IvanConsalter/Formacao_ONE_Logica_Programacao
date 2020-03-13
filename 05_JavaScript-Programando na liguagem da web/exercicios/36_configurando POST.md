Dado que criamos o objeto abaixo:

var xhr = new XMLHttpRequest();
Qual dos seguintes códigos configura a nossa requisição para ser do tipo POST e para o endereço www.xyz.com.br/compras ?

Resposta:

xhr.open("POST","www.xyz.com.br/compras");

Dado que temos um XMLHttpRequest, precisamos configurar nossa requisição para dizer para qual servidor queremos enviá-la e também qual método HTTP devemos usar.

Fazemos isto através do método .open() , passando o método e a url :

xhr.open("POST","www.xyz.com.br/compras");