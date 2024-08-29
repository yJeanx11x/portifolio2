// sobreM
const texto = document.querySelector(".texto-sobre");
const sobre = document.querySelector(".sobreM");
sobre.addEventListener("click", () => {
  if (texto.style.display == "block") {
    texto.style.display = "none";
    texto.innerHTML = `Meu Nome E jean Lucas`;
  } else {
    texto.style.display = "block";
  }
});

// formacao
function formacao() {
  const formacao = document.querySelector(".formacao");
  const formacaotxt = document.querySelector(".formacaotxt");

  formacao.addEventListener("click", () => {
    if (texto.style.display == "block") {
      texto.style.display = "none";
      texto.innerHTML = "Formação";
    } else {
      texto.style.display = "block";
    }
  });
}
formacao();
// Projetos
function projeto() {
  const projeto = document.querySelector(".projetos");
  const box = document.querySelector(".box");

  projeto.addEventListener("click", () => {
    if (box.style.opacity == "0") {
      box.style.opacity = "1";
    } else {
      box.style.opacity = "0";
    }
  });
}

projeto();

// Entre em Contato
function aparecer() {
  const btn = document.querySelector(".btn");
  const contatos = document.querySelector("#contato");
  btn.addEventListener("click", () => {
    if (contatos.style.opacity == "0") {
      contatos.style.opacity = "1";
      btn.classList.add("btnclq");
    } else {
      contatos.style.opacity = "0";
      btn.classList.remove("btnclq");
    }
  });
}
aparecer();
