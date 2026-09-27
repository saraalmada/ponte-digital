const voluntarios = [
  { nome: "Maria Clara", dispo: "Sábados pela manhã", habilidades: "WhatsApp e PIX" },
  { nome: "Wilson Fernandes", dispo: "Sábados pela tarde", habilidades: "gov.br e Google Maps" }
];

const form = document.getElementById('form-voluntario');
const mensagemSucesso = document.getElementById('mensagem-sucesso');
const listaContainer = document.getElementById('lista-voluntarios');
const totalSpan = document.getElementById('total-voluntarios');

function renderizarLista() {
  listaContainer.innerHTML = '';
  voluntarios.forEach(v => {
    const item = document.createElement('div');
    item.className = 'voluntario-item';
    item.innerHTML = `
      <div class="voluntario-nome">${v.nome}</div>
      <div class="voluntario-dispo"><strong>Disponibilidade:</strong> ${v.dispo}</div>
      <div class="voluntario-dispo"><strong>Ensina:</strong> ${v.habilidades}</div>
    `;
    listaContainer.appendChild(item);
  });
  totalSpan.textContent = voluntarios.length;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const novoVoluntario = {
    nome: document.getElementById('nome').value,
    dispo: document.getElementById('disponibilidade').value,
    habilidades: document.getElementById('habilidades').value
  };

  voluntarios.push(novoVoluntario);
  renderizarLista();

  form.reset();
  mensagemSucesso.style.display = 'block';

  setTimeout(() => {
    mensagemSucesso.style.display = 'none';
  }, 4000);
});

renderizarLista();