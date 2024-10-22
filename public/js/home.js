let modalOpened = false;
let modal = null;

const findById = (e) => {
  e.preventDefault();
  const consultaId = document.getElementById("consulta_modal_id").value;

  if (isNaN(parseInt(consultaId))) {
    const modalError = document.getElementById('modal_error')
    modalError.textContent = "Inserta un ID por favor";
    return;
  }

  window.location.href = `/consulta/${consultaId}/interpretar`;
};

const toggleModal = () => {
  modal = document.createElement("div");
  modal.id = "home_modal";
  modal.innerHTML = `
    <form id="consulta_form">
      <input type="text" placeholder="ID" id="consulta_modal_id" />
      <button type="submit">✔️</button>
    </form>
    <div id="modal_error">Inserta el ID del paciente</div>
  `;

  const homeNav = document.getElementById("home_nav");
  if (!modalOpened) {
    modalOpened = true;
    homeNav.appendChild(modal);

    // Agrega el evento 'submit' al formulario para que llame a 'findById'
    const form = document.getElementById("consulta_form");
    form.addEventListener("submit", findById);
  } else {
    modalOpened = false;
    modal = document.getElementById("home_modal");
    homeNav.removeChild(modal);
  }
};

const boton = document.getElementById("home_consulta_id");
boton.addEventListener("click", (e) => {
  e.preventDefault();
  toggleModal();
});
