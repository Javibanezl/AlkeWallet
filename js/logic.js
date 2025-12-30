// js/logic.js

// Función que se ejecuta al cargar cualquier página
// Verifica si existen datos en el navegador; si no, los crea.
function initData() {
    if (!localStorage.getItem('walletBalance')) {
        localStorage.setItem('walletBalance', '10000'); // Saldo inicial
    }
    if (!localStorage.getItem('walletContacts')) {
        localStorage.setItem('walletContacts', JSON.stringify([])); // Lista de contactos vacía
    }
}