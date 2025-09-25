const { agregarTarea, completarTarea, listarTareas } = require("./tareas");

beforeEach(() => {
  // Reinicia las tareas antes de cada test
  while (listarTareas().length > 0) {
    listarTareas().pop();
  }
});

test("agregarTarea añade una nueva tarea", () => {
  const tarea = agregarTarea("Estudiar Jest");
  expect(tarea.nombre).toBe("Estudiar Jest");
  expect(listarTareas().length).toBe(1);
});

test("agregarTarea lanza error si el nombre está vacío", () => {
  expect(() => agregarTarea("")).toThrow("La tarea no puede estar vacía");
});

test("completarTarea marca la tarea como completada", () => {
  const tarea = agregarTarea("Hacer ejercicio");
  const tareaCompletada = completarTarea(tarea.id);
  expect(tareaCompletada.completada).toBe(true);
});

test("completarTarea lanza error si no existe el id", () => {
  expect(() => completarTarea(99)).toThrow("Tarea no encontrada");
});
