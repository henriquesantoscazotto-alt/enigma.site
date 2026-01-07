function verificar() {
  const senha = document.getElementById("senha").value.toLowerCase();
  const mensagem = document.getElementById("mensagem");

  if (senha === "amaldiçoados") {
    window.location.href = "começo.html";
  } else {
    mensagem.textContent = "Você ainda não compreende.";
    mensagem.style.color = "red";
  }
}


