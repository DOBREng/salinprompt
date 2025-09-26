// ===================================================================
// PUSAT DATA ANDA
// ===================================================================
const promptData = [
    // ... (data Anda tidak berubah) ...
    { image: 'images/gambar1.png', category: 'Anime', tags: ['sketsa', 'anatomi', 'referensi'], prompt: `Sketsa referensi anatomi torso bagian depan...` },
    { image: 'images/gambar2.png', category: 'Illustration', tags: ['vektor', 'wanita', 'selebriti'], prompt: `Vector portrait illustration of Ariana Grande...` },
];

// ===================================================================
// KODE INTI WEBSITE
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
    // --- Elemen-elemen penting ---
    const navMenu = document.getElementById('navMenu');
    const searchInput = document.getElementById('searchInput'); // <-- ELEMEN BARU
    // ... (sisa elemen penting tidak berubah) ...
    const homeBtn = document.getElementById('homeBtn'); 
    const promptGrid = document.getElementById('promptGrid');
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    const hamburger = document.getElementById('hamburger');

    // ... (Semua fungsi seperti displayCards, createTagDropdown, dll tidak berubah) ...

    // --- INISIALISASI & EVENT LISTENERS ---

    displayCards(promptData);
    createTagDropdown();

    // ===================================================================
    // KODE BARU: LOGIKA FITUR PENCARIAN
    // ===================================================================
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();

        // Filter data utama berdasarkan apa yang diketik
        const filteredData = promptData.filter(item => {
            // Pencarian tidak case-sensitive (huruf besar/kecil tidak masalah)
            return item.prompt.toLowerCase().includes(searchTerm);
        });

        // Tampilkan hasil pencarian
        displayCards(filteredData);
    });


    // ... (Sisa semua Event Listener Anda yang lain tidak berubah) ...
    hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
    navMenu.addEventListener('click', (event) => { /* ... */ });
    // ...dan seterusnya...
});
