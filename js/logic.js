// js/logic.js

// 1. Inicializar datos si es la primera vez
function initData() {
    if (!localStorage.getItem('walletBalance')) {
        localStorage.setItem('walletBalance', '10000');
    }
    if (!localStorage.getItem('walletContacts')) {
        localStorage.setItem('walletContacts', JSON.stringify([]));
    }
}

// 2. Obtener saldo actual (número)
function getBalance() {
    return parseFloat(localStorage.getItem('walletBalance')) || 0;
}

// 3. Guardar nuevo saldo
function saveBalance(amount) {
    localStorage.setItem('walletBalance', amount);
}

// 4. Dar formato de moneda (Ej: $10.000)
function formatMoney(amount) {
    return '$' + amount.toLocaleString('es-CL');
}

// 5. Actualizar el saldo en la pantalla automáticamente
function updateUIBalance() {
    const balance = getBalance();
    // Busca cualquier elemento con id "currentBalance" y le pone el saldo
    $('#currentBalance').text(formatMoney(balance));
}

// Ejecutar al cargar cualquier página
$(document).ready(function() {
    initData();
    updateUIBalance();
});