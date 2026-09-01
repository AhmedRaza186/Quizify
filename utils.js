export const API_BASE = window.location.hostname === "localhost"
  ? "http://localhost:8000/api"
  : "https://quizify-backend-nine.vercel.app/api";

const toastStyles = `
    .toast-container { position: fixed; top: 24px; right: 24px; z-index: 10000; display: flex; flex-direction: column; gap: 12px; }
    .toast { min-width: 300px; background: #1e293b; padding: 16px 20px; border-radius: 16px; display: flex; align-items: center; gap: 14px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.1); border-left: 6px solid #475569; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); animation: toastSlideIn 0.4s ease-out; }
    .toast-success { border-left-color: #10b981; }
    .toast-success i { color: #10b981; }
    .toast-error { border-left-color: #ef4444; }
    .toast-error i { color: #ef4444; }
    .toast span { color: white; font-size: 0.9rem; font-weight: 600; }
    @keyframes toastSlideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
`;

function injectToastStyles() {
    if (!document.getElementById('toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = toastStyles;
        document.head.appendChild(style);
    }
}

export function showToast(message, type = 'error') {
    injectToastStyles();
    
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icon = document.createElement('i');
    icon.className = `fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`;
    
    const text = document.createElement('span');
    text.textContent = message;

    toast.appendChild(icon);
    toast.appendChild(text);

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

