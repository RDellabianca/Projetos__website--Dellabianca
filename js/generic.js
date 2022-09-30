//Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt

// Debug: este código serve para adicionar texto nos cartões, ao invés de ir por página em página e editar.
document.querySelectorAll(".produtos__cartao .cartao__descricao").forEach((ele, ind, arr) => {
  arr[ind].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
});