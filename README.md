Guía sobre Jest y el mini-proyecto
## 1. ¿Qué es Jest?

Jest es una biblioteca de pruebas en JavaScript, desarrollada por Meta (antes Facebook).

Se usa para automatizar pruebas unitarias e integrales en proyectos de Node.js y frameworks como React, Angular o Vue.

Su ventaja principal es que es fácil de configurar y permite simular APIs y dependencias sin necesidad de conectarse a servicios reales.

👉 En resumen: sirve para asegurarnos de que nuestro código funciona correctamente y detectar errores antes de que el programa llegue al usuario final.

## 2. ¿Qué hace nuestro mini-proyecto?

Creamos un gestor de tareas muy básico en JavaScript.

El proyecto permite:

Agregar tareas con un nombre.

Marcar tareas como completadas.

Listar las tareas existentes.

Después, con Jest, escribimos pruebas automáticas para comprobar que esas funciones funcionan bien.

## 3. Explicación de los archivos
📄 tareas.js

Aquí está la lógica principal del programa.

agregarTarea(nombre) → agrega una tarea nueva a la lista.

completarTarea(id) → marca una tarea existente como completada.

listarTareas() → devuelve todas las tareas actuales.

Ejemplo práctico:
Si ejecuto agregarTarea("Estudiar Jest"), se guarda como:

{ id: 1, nombre: "Estudiar Jest", completada: false }

📄 tareas.test.js

Aquí están las pruebas automáticas con Jest.

beforeEach(...) → se ejecuta antes de cada prueba y reinicia la lista de tareas para empezar desde cero.

Pruebas incluidas:

Verificar que se pueda agregar una tarea.

Verificar que no se pueda agregar una tarea vacía (lanza error).

Verificar que se pueda completar una tarea existente.

Verificar que no se pueda completar una tarea inexistente (lanza error).

👉 Cada test revisa un caso específico. Si el resultado real coincide con lo esperado, Jest marca el test como “PASSED”.

## 4. Ejecución del proyecto

Usamos el comando:

npm test


Jest busca automáticamente los archivos de prueba (*.test.js) y los ejecuta.

El resultado mostrado fue:

PASS  ./tareas.test.js
✓ agregarTarea añade una nueva tarea
✓ agregarTarea lanza error si el nombre está vacío
✓ completarTarea marca la tarea como completada
✓ completarTarea lanza error si no existe el id


Esto significa que los 4 casos de prueba pasaron correctamente.

## 5. Conclusión

Con este mini-proyecto demostramos cómo usar Jest para validar funciones de manera automática.

Vimos cómo separar el código principal (tareas.js) de las pruebas (tareas.test.js).

Este enfoque ayuda a asegurar la calidad del software, a detectar errores más rápido y a trabajar con mayor confianza en proyectos más grandes.

👉 Incluso con un proyecto muy simple, pudimos aplicar buenas prácticas de pruebas automatizadas.
