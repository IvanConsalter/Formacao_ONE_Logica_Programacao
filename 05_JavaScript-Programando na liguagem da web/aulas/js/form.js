function exibeMensagemErro(erros) {
   var ul = document.querySelector('#mensagens-erro');
   ul.innerHTML = "";

   erros.forEach(function(erro){

      var li = document.createElement('li');
      li.textContent = erro;
      li.classList.add('mensagens-erro');
      ul.appendChild(li);

   });
}

function validaPaciente(paciente) {

   var erros = [];

   if(paciente.nome.length == 0) {
      erros.push("O nome não pode ser em branco");
   }

   if(paciente.gordura.length == 0) {
      erros.push("A gordura não pode ser em branco");
   }

   if(paciente.peso.length == 0) {
      erros.push("O peso não pode ser em branco");
   }
   
   if(paciente.altura.length == 0) {
      erros.push("A altura não pode ser em branco");
   }

   if(!validaPeso(paciente.peso)) {
      erros.push("Peso inválido");
   }

   if(!validaAltura(paciente.altura)) {
      erros.push("Altura inválida");
   }

   return erros;

}

function obtemPacienteDoFormulario(form) {

   var paciente = {
      nome : form.nome.value,
      peso : form.peso.value,
      altura : form.altura.value,
      gordura : form.gordura.value,
      imc : calculaImc(form.peso.value, form.altura.value)
   }

   return paciente;
}

function montaTd(dado, classe) {
   var td = document.createElement('td');
   td.classList.add(classe);
   td.textContent = dado;

   return td;
}

function montaTr(paciente) {
   var trPaciente = document.createElement('tr');

   trPaciente.classList.add('paciente');

   trPaciente.appendChild(montaTd(paciente.nome, 'info-nome'));
   trPaciente.appendChild(montaTd(paciente.peso, 'info-peso'));
   trPaciente.appendChild(montaTd(paciente.altura, 'info-altura'));
   trPaciente.appendChild(montaTd(paciente.gordura, 'info-gordura'));
   trPaciente.appendChild(montaTd(paciente.imc, 'info-imc'));

   return trPaciente;
}

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event) {
    
   event.preventDefault();
   
   var form = document.querySelector('#form-adiciona');
   var paciente = obtemPacienteDoFormulario(form);
   
   var trPaciente = montaTr(paciente);

   var erros = validaPaciente(paciente);

   if(erros.length > 0){

      exibeMensagemErro(erros);
      return;
   }

   var tabela = document.querySelector('#tabela-pacientes');

   tabela.appendChild(trPaciente);

   form.reset();

   var mensagensErro = document.querySelector('#mensagens-erro');
   mensagensErro.innerHTML = "";

});