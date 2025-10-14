// ===== ENLACES DE REDES SOCIALES =====

// Email
const emailBtn = document.getElementById('email');
function openEmail() {
    const destinatario = "p.miraspc35@gmail.com";
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}`;
    window.open(url, "_blank");
}
emailBtn.addEventListener('click', openEmail);

// LinkedIn
const linkedInBtn = document.getElementById('linkedIn');
function openLinkedIn() {
    // Añade aquí tu URL de LinkedIn cuando la tengas
    const linkedInURL = "https://www.linkedin.com/in/tu-perfil"; 
    window.open(linkedInURL, "_blank");
}
linkedInBtn.addEventListener('click', openLinkedIn);

// Discord
const discordBtn = document.getElementById('discord');
function openDiscord() {
    window.open("https://discord.com/users/372295881925591041", "_blank");
}
discordBtn.addEventListener('click', openDiscord);

// ===== MANEJO DEL FORMULARIO =====
const contactForm = document.getElementById('contactForm');

// Función para mostrar mensajes
function showMessage(message, type = 'success') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Estilos inline para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #34d399)' : 'linear-gradient(135deg, #ef4444, #f87171)'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 9999;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Agregar estilos de animación
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Evento de envío del formulario
contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir envío por defecto
    
    // Obtener valores del formulario
    const nombre = contactForm.nombre.value.trim();
    const email = contactForm.mail.value.trim();
    const mensaje = contactForm.mensaje.value.trim();
    
    // Validación básica
    if (nombre.length < 3) {
        showMessage('El nombre debe tener al menos 3 caracteres', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showMessage('Por favor, ingresa un email válido', 'error');
        return;
    }
    
    if (mensaje.length < 10) {
        showMessage('El mensaje debe tener al menos 10 caracteres', 'error');
        return;
    }
    
    // Simular envío exitoso
    // En producción, aquí enviarías los datos a un servidor
    showMessage('¡Mensaje enviado correctamente! Te responderé pronto.', 'success');
    
    // Limpiar formulario
    contactForm.reset();
    
    // Opcional: Registrar en consola (para desarrollo)
    console.log('Formulario enviado:', { nombre, email, mensaje });
});

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== EFECTOS VISUALES ADICIONALES =====

// Efecto de escritura en tiempo real para el textarea
const textarea = contactForm.querySelector('textarea');
let typingTimer;

textarea.addEventListener('input', function() {
    clearTimeout(typingTimer);
    
    // Añadir borde animado mientras escribe
    this.style.borderColor = '#3b82f6';
    
    typingTimer = setTimeout(() => {
        this.style.borderColor = '#e5e7eb';
    }, 1000);
});

// Contador de caracteres para el textarea (opcional)
function addCharCounter() {
    const counter = document.createElement('div');
    counter.id = 'charCounter';
    counter.style.cssText = `
        text-align: right;
        font-size: 0.85rem;
        color: #9ca3af;
        margin-top: -15px;
        margin-bottom: 15px;
    `;
    
    textarea.parentNode.insertBefore(counter, textarea.nextSibling);
    
    textarea.addEventListener('input', function() {
        const count = this.value.length;
        counter.textContent = `${count} caracteres`;
        
        if (count < 10) {
            counter.style.color = '#ef4444';
        } else {
            counter.style.color = '#10b981';
        }
    });
}

// Descomentar para activar el contador
// addCharCounter();

// ===== ANIMACIÓN DE ENTRADA =====
window.addEventListener('load', function() {
    const formBox = document.querySelector('.form-box');
    const social = document.querySelector('.social');
    
    setTimeout(() => {
        formBox.style.opacity = '1';
        social.style.opacity = '1';
    }, 100);
});

console.log('📧 Sistema de contacto cargado correctamente');

// Fin contact.js