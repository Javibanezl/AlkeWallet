// js/logic.js

// --- 1. Inicialización de Datos ---
function initData() {
    // Saldo inicial
    if (!localStorage.getItem('walletBalance')) {
        localStorage.setItem('walletBalance', '10000');
    }
    // Contactos iniciales
    if (!localStorage.getItem('walletContacts')) {
        localStorage.setItem('walletContacts', JSON.stringify([]));
    }
    // Transacciones iniciales (Ejemplo para que no empiece vacío)
    if (!localStorage.getItem('walletTransactions')) {
        const initialTransactions = [
            { id: 1, type: 'deposito', amount: 10000, date: new Date().toLocaleDateString(), detail: 'Saldo Inicial' }
        ];
        localStorage.setItem('walletTransactions', JSON.stringify(initialTransactions));
    }
}

// --- 2. Gestión de Saldo ---
function getBalance() {
    return parseFloat(localStorage.getItem('walletBalance')) || 0;
}

function saveBalance(amount) {
    localStorage.setItem('walletBalance', amount);
}

function formatMoney(amount) {
    return '$' + amount.toLocaleString('es-CL');
}

function updateUIBalance() {
    const balance = getBalance();
    $('#currentBalance').text(formatMoney(balance));
    $('#displayBalance').text(formatMoney(balance)); // Para la pantalla de envíos
}

// --- 3. Gestión de Transacciones (NUEVO) ---
function getTransactions() {
    return JSON.parse(localStorage.getItem('walletTransactions')) || [];
}

function addTransaction(type, amount, detail) {
    const transactions = getTransactions();
    const newTransaction = {
        id: Date.now(), // ID único basado en la hora
        type: type, // 'ingreso' o 'egreso'
        amount: amount,
        date: new Date().toLocaleDateString(),
        detail: detail
    };
    // Agregamos al principio de la lista
    transactions.unshift(newTransaction);
    localStorage.setItem('walletTransactions', JSON.stringify(transactions));
}

// --- 4. Gestión de Contactos (NUEVO) ---
function getContacts() {
    return JSON.parse(localStorage.getItem('walletContacts')) || [];
}

function saveContact(contact) {
    const contacts = getContacts();
    contacts.push(contact);
    localStorage.setItem('walletContacts', JSON.stringify(contacts));
}

// Inicializar al cargar
$(document).ready(function() {
    initData();
    updateUIBalance();
});