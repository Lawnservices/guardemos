 // Al cargar la página, verifica si el usuario está autenticado
        window.onload = function() {
            if (!localStorage.getItem("authToken")) {
                window.location.href = "login";
            } else {
                cargarNotasGuardadas();
            }
        };

        // Función para cerrar sesión
        function logout() {
            localStorage.removeItem("authToken");
            localStorage.removeItem("currentUser");
            window.location.href = "login";
        }

        // Función para guardar una nota
        function guardarNota() {
            const inputText = document.getElementById("inputText").value;
            if (!inputText) return;

            const currentUser = localStorage.getItem("currentUser");
            let notas = JSON.parse(localStorage.getItem(`${currentUser}_notas`)) || [];
            notas.push({ text: inputText });
            localStorage.setItem(`${currentUser}_notas`, JSON.stringify(notas));

            document.getElementById("inputText").value = "";
            cargarNotasGuardadas();
        }

        // Función para cargar las notas guardadas
        function cargarNotasGuardadas() {
            const currentUser = localStorage.getItem("currentUser");
            const notas = JSON.parse(localStorage.getItem(`${currentUser}_notas`)) || [];
            const notasContainer = document.getElementById("notasContainer");
            notasContainer.innerHTML = "";

            notas.forEach((nota, index) => {
                const noteElement = document.createElement("div");
                noteElement.classList.add("note");

                const noteText = document.createElement("p");
                noteText.innerText = nota.text;

                const editBtn = document.createElement("button");
                editBtn.classList.add("editBtn");
                editBtn.innerText = "Editar";
                editBtn.onclick = () => editarNota(index);

                const deleteBtn = document.createElement("button");
                deleteBtn.classList.add("deleteBtn");
                deleteBtn.innerText = "Borrar";
                deleteBtn.onclick = () => borrarNota(index);

                noteElement.appendChild(noteText);
                noteElement.appendChild(editBtn);
                noteElement.appendChild(deleteBtn);

                notasContainer.appendChild(noteElement);
            });
        }

        // Función para editar una nota
        function editarNota(index) {
            const currentUser = localStorage.getItem("currentUser");
            const notas = JSON.parse(localStorage.getItem(`${currentUser}_notas`)) || [];
            const nuevaNota = prompt("Editar nota:", notas[index].text);

            if (nuevaNota !== null && nuevaNota !== "") {
                notas[index].text = nuevaNota;
                localStorage.setItem(`${currentUser}_notas`, JSON.stringify(notas));
                cargarNotasGuardadas();
            }
        }

        // Función para borrar una nota
        function borrarNota(index) {
            const currentUser = localStorage.getItem("currentUser");
            const notas = JSON.parse(localStorage.getItem(`${currentUser}_notas`)) || [];
            notas.splice(index, 1);
            localStorage.setItem(`${currentUser}_notas`, JSON.stringify(notas));
            cargarNotasGuardadas();
        }