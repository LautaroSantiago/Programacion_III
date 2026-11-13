# ECMAScript y JavaScript
La diferencia principal es que ECMAScript es el estándar que define cómo debe funcionar el lenguaje, mientras que JavaScript es la implementación de ese estándar que usamos para programar.

## 🟨 JavaScript vs. ECMAScript

| Característica | JavaScript | ECMAScript |
| --- | --- | --- |
| ¿Qué es? | Un lenguaje de programación. | Una especificación o estándar. |
| ¿Quién lo define? | Su evolución se coordina a través de estándares y motores de JavaScript. | Lo mantiene el comité TC39 y se publica como estándar ECMA-262. |
| ¿Para qué sirve? | Crear páginas interactivas, aplicaciones web, servidores, etc. | Definir las reglas, características y el comportamiento del lenguaje. |
| Ejemplo | Escribir y ejecutar código JavaScript. | ES6, ES2020, ES2024, entre otras versiones del estándar. |

## 💡 Un ejemplo práctico

Supongamos que escribís este código:

javascript
```
const nombre = "Juan";

console.log(`Hola, ${nombre}`);
```

- JavaScript es el lenguaje con el que escribís y ejecutás el código.
- ECMAScript define cómo funcionan `const`, las plantillas de texto (template literals) y otras características del lenguaje.
- El motor de JavaScript, como V8 (Chrome y Node.js), interpreta o compila ese código para ejecutarlo.

### ECMAScript

Define las reglas y características del lenguaje.

### JavaScript

Implementa el estándar y permite escribir programas.

### Motor de JavaScript

Ejecuta el código, por ejemplo, V8 o SpiderMonkey.

## ¿Qué significa ES6, ES2020 o ES2024?

Son nombres de versiones de ECMAScript que incorporan nuevas funcionalidades a JavaScript.

Por ejemplo:

- ES5 (2009): consolidó muchas características del JavaScript tradicional.
- ES6 / ES2015: incorporó `let`, `const`, arrow functions, clases y módulos.
- ES2020: incorporó, entre otras cosas, el operador de coalescencia nula (`??`) y `BigInt`.
- ES2024: incorporó características como `Object.groupBy()` y `Promise.withResolvers()`.

## ¿Por qué se suelen usar como sinónimos?

Porque, en la práctica, cuando alguien dice «JavaScript moderno» suele referirse a JavaScript que utiliza características definidas en versiones recientes de ECMAScript.

Además, JavaScript tiene funcionalidades que no forman parte de ECMAScript, como las APIs del navegador:

javascript
```
document.querySelector("h1");
```

`document.querySelector()` pertenece a la API del DOM del navegador, no al estándar ECMAScript. Del mismo modo, `setTimeout()` suele proporcionarlo el entorno de ejecución, como el navegador o Node.js.

En resumen: JavaScript es el lenguaje; ECMAScript es el estándar que define gran parte de cómo funciona ese lenguaje.