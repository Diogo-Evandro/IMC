document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  
  if (isNaN(weight) || weight <= 0) {
      document.getElementById('result').innerText = 'Por favor, insira um peso válido.';
      return;
  }

  if (isNaN(height) || height <= 0) {
      document.getElementById('result').innerText = 'Por favor, insira uma altura válida.';
      return;
  }
  
  const imc = weight / (height * height);
  let category = '';
  
  if (imc < 18.5) {
      category = 'Abaixo do peso';
  } else if (imc < 24.9) {
      category = 'Peso normal';
  } else if (imc < 29.9) {
      category = 'Sobrepeso';
  } else {
      category = 'Obesidade';
  }

  document.getElementById('result').innerText = `Seu IMC é ${imc.toFixed(2)} (${category})`;
});
