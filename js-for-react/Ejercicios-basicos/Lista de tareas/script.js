const btnTarea = document.getElementById('btnTarea');
const tareaInput = document.getElementById('tarea')
const containerTareas = document.querySelector('.containerTareas')

btnTarea.addEventListener('click', () => {
    // Crear una nueva tarea
    const nuevaTarea = document.createElement('div');
    nuevaTarea.classList.add('onlyTarea'); // Agregar clase 'onlyTarea' a la nueva tarea

    const contenidoTarea = document.createElement('div');
    contenidoTarea.classList.add('contentTarea'); // Agregar clase 'contentTarea'
    contenidoTarea.textContent = tareaInput.value;

    const containerOptions = document.createElement('div');
    containerOptions.classList.add('containerOptions'); // Agregar clase 'containerOptions'

    const btnEdit = document.createElement('button');
    btnEdit.id = "btnEdit"; // Agregar clase 'btnEdit'
    btnEdit.textContent = 'Editar';

    // Configurar el boton Editar
    btnEdit.addEventListener('click', () => {
        const nuevoTexto = prompt('Edita la tarea', contenidoTarea.textContent);
        if (nuevoTexto !== null && nuevoTexto.trim() !== '') {
            contenidoTarea.textContent = nuevoTexto;
        }
    })

    const btnDelete = document.createElement('button');
    btnDelete.id = 'btnDelete'; // Agregar clase 'btnDelete'
    btnDelete.textContent = 'Eliminar';

    // Configurar el boton Eliminar
    btnDelete.addEventListener('click', () => {
        containerTareas.removeChild(nuevaTarea);
    })

    // Agregar los botones al contenedor de opciones
    containerOptions.appendChild(btnEdit);
    containerOptions.appendChild(btnDelete);

    // Agregar el contenido de la tarea y el contenedor de opciones a la nueva tarea
    nuevaTarea.appendChild(contenidoTarea);
    nuevaTarea.appendChild(containerOptions);

    // Agregar la nueva tarea al contenedor de tareas
    containerTareas.appendChild(nuevaTarea);

    // Limpiar el campo de entrada despues de agregar la tarea
    tareaInput.value = '';
})
