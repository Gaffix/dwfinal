// Função executada ao carregar a página
function onLoaderFunc() {
  document.querySelectorAll(".seats").forEach((seat) => {
    seat.checked = false; // Garante que todos os assentos comecem desmarcados
  });
  document.getElementById("notification").textContent = "";
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

// Atualiza o texto com as informações selecionadas pelo usuário e salva na tabela
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

  // Adiciona os dados na tabela
  const table = document.getElementById("data-table");
  const row = table.insertRow();
  row.insertCell(0).textContent = name;
  row.insertCell(1).textContent = numSeats;
  row.insertCell(2).textContent = selectedSeats.join(", ");

  // Reseta o formulário
  resetForm();
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

// Função para resetar o formulário
function resetForm() {
  document.getElementById("Username").value = "";
  document.getElementById("Numseats").value = "";
  document.querySelectorAll(".seats").forEach((seat) => {
    seat.checked = false;
  });
  document.getElementById("notification").textContent = "";
}
