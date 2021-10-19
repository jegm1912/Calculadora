const displayValorAnterior=document.querySelector('#valor-anterior');
const displayValorActual=document.querySelector('#valor-actual');
const botonesNumeros=document.querySelectorAll('.numero');
const botonesOperador=document.querySelectorAll('.operador');

//Instancia de Display
const display=new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach((boton)=>{
    boton.addEventListener('click', ()=>{
      display.agergarNumero(boton.innerHTML)
    });
});
botonesOperador.forEach((boton)=>{
    boton.addEventListener('click', ()=>{
      display.computar(boton.value)
    });
});