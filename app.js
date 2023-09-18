// Función para realizar la petición GET y actualizar la tabla
function realizarPeticionYActualizarTabla() {
    const japurl = 'https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo264';
    const table = document.getElementById('table');

    fetch(japurl)
        .then(response => response.json())
        .then(data => {
            let tableHTML = ''; // Variable para acumular el contenido de la tabla

            // Iterar a través de los datos y generar HTML para cada elemento
            data.forEach(item => {
                tableHTML += `
                    <div class="datos">
                        Nombre: ${item.nombre || item.name}<br>
                        Apellido: ${item.apell || item.apellido}<br>
                        Grupo: ${item.grupo}<br>
                        Sala: ${item.sala}<br>
                        ID : ${item._id}<br>
                        <div id="btn" ></div>
                    </div>
                `;
            });

            // Establecer el contenido acumulado en la tabla
            table.innerHTML = tableHTML;
        })
        .catch(error => {
            alert("Error");
            ;
        });

}

// Llamar a la función para realizar la petición y actualizar la tabla cada 1.5 segundos (1500 milisegundos)
setInterval(realizarPeticionYActualizarTabla, 1500);

// Agregar un event listener a la tabla para eliminar elementos al hacer clic
table.addEventListener('click', (e) => {
    // Verificar si el elemento que se hizo clic tiene la clase "datos"
    if (e.target.classList.contains('datos')) {
        e.target.remove(); // Eliminar el elemento específico que se hizo clic
        alert(`Se elimino ${e.target.innerText}`)
    }
});
