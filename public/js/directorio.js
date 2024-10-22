const searchButton = document.getElementById('search_by_name');

const showP = (pacientes) => {
  const directorioContainer = document.getElementById('directorio_container');
  directorioContainer.innerHTML = '';
  
  if (pacientes.length === 0) {
    directorioContainer.innerHTML = `<p class="no_pacientes">No se han encontrado pacientes con esta búsqueda</p>`;
    return;
  }
  
  pacientes.forEach(paciente => {
    const directorioLink = document.createElement('a');
    directorioLink.href = `/consulta/${paciente.id}/interpretar`;

    directorioLink.innerHTML = `
      <div class="directorio_card">
        <p>${paciente.id}</p>
        <p>${paciente.nombre_completo}</p>
      </div>
    `

    directorioContainer.appendChild(directorioLink);
  });
}

const filterByName = (search) => {
  const filtered = pacientes.filter(paciente => paciente.nombre_completo.toLowerCase().includes(search.toLowerCase()));
  showP(filtered);
}

const filterById = (search) => {
  const filtered = pacientes.filter(paciente => parseInt(paciente.id) === parseInt(search));
  showP(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
  showP(pacientes);
});

const busqueda = document.getElementById('busqueda');

busqueda.addEventListener('keyup', () => {
  const value = busqueda.value;
  if (value === '') {
    showP(pacientes);
    return;
  }
  filterByName(value);
});

const busquedaPorId = document.getElementById('busqueda_por_id');

busquedaPorId.addEventListener('keyup', () => {
  const value = busquedaPorId.value;
  if(value.length === 0) {
    showP(pacientes);
    return;
  }
  filterById(value);
})