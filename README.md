# Utilería JS - Librería de Validación y Formateo

**Nombre:** Martinez Lopez Eduardo Manuel

### ¿Qué problema resuelve?
En el desarrollo de aplicaciones web, validar formularios repetitivamente (correos, contraseñas, edades) y formatear textos para mejorar la experiencia del usuario (UX) suele generar código desordenado y repetitivo. **Utilería JS** resuelve este problema ofreciendo una librería ligera y modular en **Vanilla JavaScript** (cero dependencias, sin frameworks). Permite a los desarrolladores implementar validaciones robustas y formateo automático en tiempo real con solo invocar funciones simples, asegurando que los datos que ingresan al sistema sean limpios y seguros.

---

## Instalación

Para utilizar esta librería en tu proyecto, no necesitas NPM ni gestores de paquetes. Simplemente descarga el archivo `utileria.js` e inclúyelo en tu documento HTML, preferentemente antes de la etiqueta de cierre `</body>`:

```html
<script src="js/utileria.js"></script>
```

## Uso y Ejemplos de Código

A continuación se muestran ejemplos reales de cómo implementar cada una de las funciones integradas.

## 1. Validaciones Obligatorias

**Validar formato de correo electrónico:**

```javascript
const esValido = validarCorreo("usuario@empresa.com");
console.log(esValido); // true

```

**Validar que un campo solo contenga letras (acepta acentos):**

```javascript
const nombreValido = soloLetras("José Antonio");
console.log(nombreValido); // true

```

**Validar la longitud exacta de un número (ej. Teléfono a 10 dígitos):**

```javascript
const telValido = validarLongitud(5512345678, 10);
console.log(telValido); // true

```

**Calcular la edad exacta a partir de una fecha:**

```javascript
const edad = calcularEdad("2003-08-15");
console.log(`El usuario tiene ${edad} años.`); // El usuario tiene 22 años.

```

**Verificar si un usuario es mayor de edad:**

```javascript
const accesoPermitido = esMayorDeEdad("2008-01-01");
console.log(accesoPermitido); // false

```

**Validar políticas de contraseña segura:**
*(Requiere: Mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial)*

```javascript
const passFuerte = validarPassword("Admin123$");
console.log(passFuerte); // true

```

### 2. Funciones Personalizadas (Sección Libre)

Estas funciones están diseñadas para mejorar la interfaz mutando los datos en tiempo real cuando el usuario sale del campo de texto (evento `blur`).

**Capitalizar nombres automáticamente:**

```javascript
const nombreLimpio = capitalizarNombres("ana sofía martínez");
console.log(nombreLimpio); // "Ana Sofía Martínez"

```

**Formatear números como moneda (MXN):**

```javascript
const salarioStr = formatearMoneda(25000.5);
console.log(salarioStr); // "$25,000.50"

```

---

## Capturas de Pantalla

A continuación, se demuestra la librería en acción desde la interfaz de usuario y la consola del navegador:

*Fig 1. Validaciones actuando en tiempo real en el formulario de registro.*
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/43402d2e-6772-428e-a568-ee082cf2a3d3" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/61e59e83-2ce9-44dd-9dcc-d3216bf43b99" />


*Fig 2. Pruebas de las funciones puras ejecutadas directamente en la consola.*
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/34a56af3-167e-4c79-890c-9337c9dd0c89" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/41030dab-b72f-427e-b94d-ebd63ebdce09" />

---

## 🎥 Demo en Video (Pitch)

En el siguiente video de 60 segundos explico el propósito de la librería y una demostración funcional en vivo.

**Ver Video de Demostración en Google Drive (https://drive.google.com/file/d/1tGeZrb6Gp7x-2V8oZ3XiJurJ1lSk9XQi/view?usp=sharing)**

---

*Proyecto entregable individual para la materia de Programación Web.*

```

```
