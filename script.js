document.addEventListener('DOMContentLoaded', () => {
    const envioForm = document.getElementById('envioForm');
    const enviosTable = document.getElementById('enviosTable').getElementsByTagName('tbody')[0];

    envioForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const numeroSeguimiento = this.numeroSeguimiento.value;
        const origen = this.origen.value;
        const destino = this.destino.value;
        const fechaEntrega = this.fechaEntrega.value;

        const newRow = enviosTable.insertRow();

        newRow.insertCell(0).innerText = enviosTable.rows.length;
        newRow.insertCell(1).innerText = numeroSeguimiento;
        newRow.insertCell(2).innerText = origen;
        newRow.insertCell(3).innerText = destino;
        newRow.insertCell(4).innerText = fechaEntrega;
        newRow.insertCell(5).innerText = 'En tránsito';

        const actionsCell = newRow.insertCell(6);
        const updateButton = document.createElement('button');
        updateButton.innerText = 'Actualizar';
        updateButton.classList.add('update');
        updateButton.addEventListener('click', () => actualizarEnvio(newRow));
        actionsCell.appendChild(updateButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Eliminar';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => eliminarEnvio(newRow));
        actionsCell.appendChild(deleteButton);

        this.reset();
    });

    function actualizarEnvio(row) {
        // Aquí puedes agregar la lógica para actualizar el estado del envío
        const nuevoEstado = prompt('Ingrese el nuevo estado:', row.cells[5].innerText);
        if (nuevoEstado) {
            row.cells[5].innerText = nuevoEstado;
        }
    }

    function eliminarEnvio(row) {
        row.remove();
    }
});
