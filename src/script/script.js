const btn = document.querySelector(".btn");
const contatos = document.querySelector("#contato");

function aparecer() {
  btn.addEventListener("click", () => {
    if (contatos.style.opacity == "0") {
      contatos.style.opacity = "1";
    } else {
      contatos.style.opacity = "0";
    }
  });
}
aparecer();

