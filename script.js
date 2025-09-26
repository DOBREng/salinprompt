// ===================================================================
// PUSAT DATA ANDA
// ===================================================================
const promptData = [
    // Isi dengan data Anda
    { image: 'images/gambar1.png', category: 'Anime', tags: ['sketsa', 'anatomi', 'referensi'], prompt: `Sketsa referensi anatomi torso...` },
    { image: 'images/gambar2.png', category: 'Illustration', tags: ['vektor', 'wanita', 'selebriti'], prompt: `Vector portrait illustration of Ariana Grande...` },
    // ...tambahkan lebih banyak data untuk mencoba paginasi...
];

// ===================================================================
// KODE INTI WEBSITE
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
    // --- Elemen-elemen penting ---
    const promptGrid = document.getElementById('promptGrid');
    const paginationControls = document.getElementById('paginationControls');
    const searchInput = document.getElementById('searchInput');
    const backToTopBtn = document.getElementById('backToTopBtn');
    // ...elemen lain yang sudah ada...
    const navMenu = document.getElementById('navMenu');
    const homeBtn = document.getElementById('homeBtn');
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    const tagFilterBtn = document.getElementById('tagFilterBtn');
    const tagDropdownContent = document.getElementById('tagDropdownContent');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-btn');
    const hamburger = document.getElementById('hamburger');

    // --- State Aplikasi ---
    let currentPage = 1;
    const cardsPerPage = 6; // Ubah angka ini untuk jumlah kartu per halaman
    let currentFilterData = [...promptData];

    // --- FUNGSI-FUNGSI ---

    // FUNGSI UTAMA: Menampilkan kartu dan paginasi
    function renderPage() {
        promptGrid.innerHTML = '';
        paginationControls.innerHTML = '';

        if (currentFilterData.length === 0) {
            promptGrid.innerHTML = '<p class="info-text">Tidak ada hasil yang cocok.</p>';
            return;
        }

        // 1. Logika untuk memotong data sesuai halaman
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        const paginatedItems = currentFilterData.slice(startIndex, endIndex);

        // 2. Tampilkan kartu untuk halaman ini
        paginatedItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.tags = item.tags.join(',');
            let tagsHTML = '';
            item.tags.forEach(tag => { tagsHTML += `<span class="tag">${tag}</span>`; });
            card.innerHTML = `
                <img src="${item.image}" alt="Gambar prompt">
                <div class="card-content">
                    <div class="tags">${tagsHTML}</div>
                    <textarea class="prompt-text" readonly>${item.prompt}</textarea>
                    <button class="copy-btn">Copy</button>
                </div>`;
            promptGrid.appendChild(card);
        });

        // 3. Buat tombol paginasi
        const pageCount = Math.ceil(currentFilterData.length / cardsPerPage);
        for (let i = 1; i <= pageCount; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = 'pagination-btn';
            pageBtn.textContent = i;
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                renderPage();
                window.scrollTo(0, 0);
            });
            paginationControls.appendChild(pageBtn);
        }
    }

    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        // NOTE: Untuk sementara, kita reset filter kategori/tag saat mencari
        // Atau kita bisa buat logika yang lebih kompleks nanti
        
        currentFilterData = promptData.filter(item => {
            const inSearch = searchTerm === '' ||
                             item.prompt.toLowerCase().includes(searchTerm) ||
                             item.tags.join(' ').toLowerCase().includes(searchTerm);
            return inSearch; // Tambahkan filter lain di sini jika perlu
        });
        
        currentPage = 1;
        renderPage();
    }
    
    // ...fungsi lain seperti createTagDropdown tidak berubah...
    function createTagDropdown() { /* ... */ }

    // --- INISIALISASI & EVENT LISTENERS ---

    renderPage(); // Ganti displayCards dengan renderPage
    createTagDropdown();

    // Event Listener untuk PENCARIAN
    searchInput.addEventListener('input', applyFilters);

    // Event Listener untuk Tombol Kembali ke Atas
    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Sesuaikan listener filter yang ada untuk menggunakan sistem baru
    navMenu.addEventListener('click', (event) => {
        if (event.target.classList.contains('category-filter-link')) {
            event.preventDefault();
            const categoryToFilter = event.target.dataset.category;
            currentFilterData = promptData.filter(item => item.category === categoryToFilter);
            currentPage = 1;
            renderPage();
            // ...sisa logika menu...
        }
    });

    // ...sisa event listener disesuaikan untuk memanggil renderPage() atau applyFilters()...
});
