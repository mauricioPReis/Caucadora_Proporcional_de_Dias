function calcularFatura() {
  // chamando os valor de html
  let valorPlano = document.getElementById('valorPlano').value;
  let diasDeUso = document.getElementById('diasDeUso').value;

  // Verifica se os valores passados como argumento são números
  if (isNaN(valorPlano) || isNaN(diasDeUso)) {
    return "Os valores inseridos não são válidos. Insira apenas números.";
  }

  //realizando os calculos de dias
  const valorDiario = valorPlano / 30;
  const valorProporcional = valorDiario * diasDeUso;

  let proportionalValue = document.getElementById('resul').textContent = valorProporcional.toFixed(2);

  return proportionalValue
}

function clearInputs(){
  document.getElementById('valorPlano').value = "";
  document.getElementById('diasDeUso').value = "";
  document.getElementById('resul').value = "";
}