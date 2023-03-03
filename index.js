function calcularFatura() {
  // chamando os valor de html
  let valorPlano = document.getElementById('valorPlano').value;
  let initialDate = new Date (document.getElementById('initialDate').value);
  let finalDate = new Date(document.getElementById('finalDate').value);

  //convertendo para milesegundos
  const dataDifEmMilessegundos = Math.abs(initialDate.getTime() - finalDate.getTime());
  
  // Converter a diferença em dias
  const diferencaEmDias = Math.ceil(dataDifEmMilessegundos / (1000 * 60 * 60 * 24)); 

  // Verifica se os valores passados como argumento são números
  if (isNaN(valorPlano)) {
    return "Os valores inseridos não são válidos. Insira apenas números.";
  }

  //realizando os calculos de dias
  let faturaPropDesc = valorPlano - valorProporcional
	let faturaProp = parseFloat(valorPlano) + parseFloat(valorProporcional)
  
  let proportionalValue = document.getElementById('resul').textContent = valorProporcional.toFixed(2);
  
  let valueDesconto = document.getElementById('resul2').textContent = faturaPropDesc.toFixed(2);
  
  let faturaUnificadaValue = document.getElementById('resul3').textContent = faturaProp.toFixed(2);
  
  return proportionalValue, valueDesconto, faturaUnificadaValue
}

function clearInputs(){
  document.getElementById('valorPlano').value = "";
  document.getElementById('initialDate').value = "";
  document.getElementById('finalDate').value = "";
    
  document.getElementById('resul').innerHTML="0.00";
  document.getElementById('resul2').innerHTML="0.00";
  document.getElementById('resul3').innerHTML="0.00";
}