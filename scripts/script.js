document.addEventListener("DOMContentLoaded", () => {
    const inputTarea = document.getElementById("nueva-tarea");
    const btnAgregar = document.getElementById("btn-agregar");
    const listaTareas = document.getElementById("lista-tareas");
  

    function agregarTarea(texto) {
      const li = document.createElement("li");
      
      const taskItem = document.createElement("div");
      taskItem.className = "task-item";
  
      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          li.classList.add("completed");
        } else {
          li.classList.remove("completed");
        }
      });
  
     
      const span = document.createElement("span");
      span.textContent = texto;
  
      taskItem.appendChild(checkbox);
      taskItem.appendChild(span);
  
      
      const btnEliminar = document.createElement("button");
      btnEliminar.className = "delete-btn";
      btnEliminar.textContent = "Eliminar";
      btnEliminar.addEventListener("click", () => {
        listaTareas.removeChild(li);
      });
  
      li.appendChild(taskItem);
      li.appendChild(btnEliminar);
  
      listaTareas.appendChild(li);
    }
  
    
    btnAgregar.addEventListener("click", () => {
      const texto = inputTarea.value.trim();
      if (texto !== "") {
        agregarTarea(texto);
        inputTarea.value = "";
      }
    });
  
   
    inputTarea.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const texto = inputTarea.value.trim();
        if (texto !== "") {
          agregarTarea(texto);
          inputTarea.value = "";
        }
      }
    });
});
  