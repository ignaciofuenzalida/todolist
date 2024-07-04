document.addEventListener('DOMContentLoaded', () => {
    const nuevaTareaInput = document.getElementById('nuevaTareaInput');
    const agregarBtn = document.getElementById('agregarBtn');
    const tareasBody = document.getElementById('tareasBody');
    const totalSpan = document.getElementById('total');
    const completadasSpan = document.getElementById('completadas');

    const Contadores = () => {
        const totalTareas = tareasBody.querySelectorAll('tr').length;
        const tareasCompletadas = tareasBody.querySelectorAll('.check:checked').length;
        totalSpan.textContent = totalTareas;
        completadasSpan.textContent = tareasCompletadas;
    };

    const agregarTarea = () => {
        const tareaTexto = nuevaTareaInput.value;
        if (tareaTexto !== '') {
            const nuevaFila = document.createElement('tr');
            const nuevoId = Date.now();
    

            nuevaFila.innerHTML = `
                <td>${nuevoId}</td>
                <td>${tareaTexto}</td>
                <td class="accion">
                    <input type="checkbox" class="check">
                    <button class="eliminar">❌</button>
                </td>
            `;

            tareasBody.appendChild(nuevaFila);
            nuevaTareaInput.value = '';
            Contadores();
        }
    };

    const eliminarTarea = (boton) => {
        const fila = boton.closest('tr');
        fila.remove();
        Contadores();
    };

    const manejarClick = (evento) => {
        if (evento.target.classList.contains('eliminar')) {
            eliminarTarea(evento.target);
        } else if (evento.target.classList.contains('check')) {
            Contadores();
        }
    };

    agregarBtn.addEventListener('click', agregarTarea);
    tareasBody.addEventListener('click', manejarClick);

    Contadores();
});
