function verificar() {
  const senha = document.getElementById("senha").value.toLowerCase();
  const mensagem = document.getElementById("mensagem");

  if (senha === "eres") {
    window.location.href = "verdade.html";
  } else {
    mensagem.textContent = "Acesso negado. Você ainda não compreende.";
    mensagem.style.color = "red";
  }
}
