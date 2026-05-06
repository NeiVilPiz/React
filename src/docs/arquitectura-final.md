# Arquitectura Final del Proyecto

Este proyecto ha sido desarrollado utilizando TypeScript con un enfoque fuertemente tipado, reduciendor significativamente los errores en tiempo de ejecución en comparación con JavaScript estándar.

## Uso de genéricos

Se ha implementado un componente genérico DataTable<T>, permitiendo reutilizar la misma lógica con diferentes tipos de datos sin perder seguridad de tipos. Lo cual evita errores comunes como acceder a propiedades inexistentes.

## Uniones discriminadas

Se ha utilizado una unión discriminada para modelar estados complejos como el estado de matrícula. Esto permite un control exhaustivo mediante estructuras como switch, asegurando que todos los casos posibles sean manejados.

## Tipo never

El uso del tipo never en bloques de control permite garantizar la exhaustividad del código. Si se añade un nuevo caso no contemplado, TypeScript lo detecta en tiempo de compilación.

## Tipos de utilidad

Se han utilizado tipos como Partial<T> para modelar estados intermedios de edición, evitando la necesidad de estructuras duplicadas y reduciendo errores en la manipulación de datos incompletos.

## Librerías externas tipadas

Se ha integrado date-fns para el manejo de fechas, aprovechando su tipado nativo para mantener consistencia en toda la aplicación.

## Conclusión

El uso combinado de estas características de TypeScript permite trasladar muchos errores que normalmente ocurrirían en runtime al tiempo de compilación, aumentando la fiabilidad y mantenibilidad del sistema.