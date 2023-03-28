const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const monto = parseFloat(document.querySelector('#monto').value);
  const tasa = parseFloat(document.querySelector('#tasa').value);
  const plazo = parseInt(document.querySelector('#plazo').value);

  const montoTotal = monto + (monto * tasa * plazo);

  resultado.innerHTML = `<p>El monto total del préstamo es: ${montoTotal.toFixed(2)}</p>`;
});
