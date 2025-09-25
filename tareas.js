// tareas.js
let tareas = [];

function agregarTarea(nombre) {
  if (!nombre) throw new Error("La tarea no puede estar vacía");
  const tarea = { id: tareas.length + 1, nombre, completada: false };
  tareas.push(tarea);
  return tarea;
}

function completarTarea(id) {
  const tarea = tareas.find(t => t.id === id);
  if (!tarea) throw new Error("Tarea no encontrada");
  tarea.completada = true;
  return tarea;
}

function listarTareas() {
  return tareas;
}

module.exports = { agregarTarea, completarTarea, listarTareas };
