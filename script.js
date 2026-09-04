// QR Kod Yaradılması
const WEBSITE_URL = window.location.origin + window.location.pathname.replace('index.html', '');
const MENU_PAGE = WEBSITE_URL + "menu.html";

function generateQRCode() {
    const qrContainer = document.getElementById('qrcode');
    if (qrContainer) {
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(MENU_PAGE)}&color=c5a059&bgcolor=ffffff`;
        qrContainer.innerHTML = `<img src="${qrUrl}" alt="QR Menu">`;
    }
}

// Kateqoriya Aktivləşdirmə
const catItems = document.querySelectorAll('.cat-item');
catItems.forEach(item => {
    item.addEventListener('click', function() {
        catItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', generateQRCode);
