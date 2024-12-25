// script.js

// Função executada ao carregar a página
function onLoaderFunc() {
  document.querySelectorAll(".seats").forEach((seat) => {
    seat.checked = false; // Garante que todos os assentos comecem desmarcados
  });
}

// Armazena os dados inseridos pelo usuário
function takeData() {
  const name = document.getElementById("Username").value;
  const numSeats = parseInt(document.getElementById("Numseats").value, 10);

  if (!name || isNaN(numSeats) || numSeats <= 0) {
    alert("Por favor, insira um nome válido e um número de assentos.");
    return;
  }

  document.getElementById("notification").textContent = `Selecione ${numSeats} assento(s).`;
}

// Atualiza o texto com as informações selecionadas pelo usuário
function updateTextArea() {
  const name = document.getElementById("Username").value;
  const numSeats = parseInt(document.getElementById("Numseats").value, 10);

  if (!name || isNaN(numSeats) || numSeats <= 0) {
    alert("Por favor, preencha o formulário antes de confirmar a seleção.");
    return;
  }

  const selectedSeats = Array.from(document.querySelectorAll(".seats:checked"))
    .map((seat) => seat.value);

  if (selectedSeats.length !== numSeats) {
    alert(`Você precisa selecionar exatamente ${numSeats} assento(s).`);
    return;
  }

  document.getElementById("nameDisplay").value = name;
  document.getElementById("NumberDisplay").value = numSeats;
  document.getElementById("seatsDisplay").value = selectedSeats.join(", ");
}

// Previne a seleção de mais assentos que o número permitido
const seats = document.querySelectorAll(".seats");
seats.forEach((seat) => {
  seat.addEventListener("change", () => {
    const numSeats = parseInt(document.getElementById("Numseats").value, 10);
    const selectedSeats = document.querySelectorAll(".seats:checked").length;

    if (selectedSeats > numSeats) {
      seat.checked = false;
      alert("Você não pode selecionar mais assentos do que o permitido.");
    }
  });
});