// --- AYARLAR ---
// Saytı hansı linkdə (GitHub, Netlify və s.) paylaşacaqsınızsa, o linki bura yazın:
const WEBSITE_URL = window.location.origin; // Avtomatik olaraq cari ünvanı götürür
const MENU_PAGE = WEBSITE_URL + "/menu.html";

// 1. QR Kodun yaradılması (index.html-dəki bölmə üçün)
function generateQRCode() {
    const qrContainer = document.getElementById('qrcode');
    if (qrContainer) {
        // Pulsuz QR API istifadə edərək şəkli yaradırıq
        const qrSize = 200;
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(MENU_PAGE)}&color=0-0-0&bgcolor=255-255-255`;
        
        qrContainer.innerHTML = `<img src="${qrUrl}" alt="Menu QR Code">`;
    }
}

// 2. Mobil Hamburger Menyu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#0a0a0a';
        navLinks.style.padding = '20px';
    });
}

// 3. Menyu Kateqoriya Keçidləri (Aktiv sinifləri dəyişmək)
const catItems = document.querySelectorAll('.cat-item');
catItems.forEach(item => {
    item.addEventListener('click', () => {
        catItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// 4. Səhifə yüklənəndə işləsin
document.addEventListener('DOMContentLoaded', () => {
    generateQRCode();
});

// 5. Smooth Scroll (Yumşaq keçid)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});