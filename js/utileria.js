/**
 * LIBRERÍA DE UTILERÍAS JS
 * Descripción: Colección de funciones puras para validación y formateo de datos.
 */

// ==========================================
// 1. FUNCIONES OBLIGATORIAS
// ==========================================

function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

function soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

function validarLongitud(numero, maxLongitud) {
    const numStr = String(numero).trim();
    return numStr.length === maxLongitud && !isNaN(numStr);
}

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return Math.max(0, edad); 
}

function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}

// ==========================================
// 2. FUNCIONES DE SECCIÓN LIBRE (CREATIVIDAD)
// ==========================================

function formatearMoneda(cantidad) {
    let numero = parseFloat(cantidad);
    if (isNaN(numero)) return "$0.00";
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(numero);
}

function capitalizarNombres(texto) {
    if (!texto) return "";
    return texto.trim().toLowerCase().split(' ').map(palabra => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    }).join(' ');
}
