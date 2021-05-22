let inputNome = document.querySelector("#nome");

inputNome.addEventListener("keypress", function (e) {
  let keyCode = e.keyCode ? e.keyCode : e.wich;
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
    alert("Digite apenas letras.");
  }
});

function validarCampos() {
  let nome = formularioUsuario.nome.value.trim();
  let email = formularioUsuario.email.value.trim();

  if (nome == "") {
    alert("Preencha o campo nome.");
    formularioUsuario.nome.focus();
    return false;
  }

  if (email == "" || email.indexOf("@") == -1) {
    alert("Preencha o campo E-mail. exemplo: seuemail@dominio.com");
    formularioUsuario.email.focus();
    return false;
  }
}
