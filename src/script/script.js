const btn = document.querySelector(".btn");
const contatos = document.querySelector("#contato");


// Entre em Contato
function aparecer() {
  btn.addEventListener("click", () => {
    if (contatos.style.opacity == "0") {
      contatos.style.opacity = "1";
      btn.classList.add('btnclq')

    } else {
      contatos.style.opacity = "0";
      btn.classList.remove('btnclq')

    }

  });
}
aparecer();

// sobreM
const texto=document.querySelector('.texto-sobre')
const sobre=document.querySelector('.sobreM')
sobre.addEventListener('click',()=>{
if(texto.style.display=='block'){
texto.style.display='none'
}
else{
  texto.style.display='block'

}


})
