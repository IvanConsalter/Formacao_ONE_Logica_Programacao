var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {
	
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector('.info-peso');
	var tdAltura = paciente.querySelector('.info-altura');
	var tdImc = paciente.querySelector('.info-imc');

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;

	var pesoValido = true;
	var alturaValida = true;

	if(peso <= 0 || peso >= 1000) {
		tdPeso.textContent = 'Peso inválido!';
		paciente.classList.add('paciente-invalido');
		pesoValido = false;
	}

	if(altura <= 0 || altura >= 3) {
		tdAltura.textContent = 'Altura inválida';
		paciente.classList.add('paciente-invalido');
		alturaValida = false;
	}

	if(pesoValido && alturaValida) {
		var imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2);
	}else {
		tdImc.textContent = 'Altura e/ou peso inválidos!'
	}	
}
