// Declaracion de variables
const mensaje = document.getElementById('message');
const number = document.getElementById('offset');
// pasar de la primera vista a cod o decod
const btn1 = document.getElementById('btn1');
const inicio = document.getElementById('inicio');
const primeraVista = document.getElementById('primeravista');
btn1.addEventListener('click', () => {
  inicio.classList.add('hide');
  primeraVista.classList.remove('hide');
});
// codificar
const btn2 = document.getElementById('btn2');
const segundaVista = document.getElementById('segundavista');
btn2.addEventListener('click', () => {
  primeraVista.classList.add('hide');
  segundaVista.classList.remove('hide');
  /* eslint radix: ["error", "as-needed"] */ // no permite proporcionar la 10raíz parseInt
  document.getElementById('newMessage').innerHTML = window.cipher.encode(parseInt(number.value), mensaje.value);
});
// decodificar
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
  primeraVista.classList.add('hide');
  segundaVista.classList.remove('hide');
  document.getElementById('newMessage').innerHTML = window.cipher.decode(parseInt(number.value), mensaje.value);
});
// volver a ejecutar comandos
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
  segundaVista.classList.add('hide');
  primeraVista.classList.remove('hide');
  mensaje.value = '';
  number.value = '';
});
