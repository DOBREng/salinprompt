// ===================================================================
// PUSAT DATA ANDA
// ===================================================================
const promptData = [
    { image: 'images/gambar1.png', 
     category: 'Character Design', 
     tags: ['sketsa', 'anatomi', 'referensi'], 
     prompt: `Sketsa referensi anatomi torso bagian depan dan pinggang...` 
    },
    { image: 'images/gambar2.png', category: 'Illustration', tags: ['vektor', 'wanita', 'selebriti'], prompt: `Vector portrait illustration of Ariana Grande...` },
    { image: 'images/gambar3.png', category: 'Illustration', tags: ['vektor', 'wanita', 'asia', 'realistis'], prompt: `Realistic vector art of an Asian woman...` },
    { image: 'images/gambar4.png', category: 'Sticker', tags: ['vektor', 'wanita', 'asia', 'pink'], prompt: `Vector illustration of an asian woman...` },
    { image: 'images/gambar5.png', category: 'Photos', tags: ['foto', 'candid', 'cosplay'], prompt: `Candid street photograph of a cosplayer...` },
    { image: 'images/gambar6.png', category: 'Character Design', tags: ['sketsa', 'anatomi', 'referensi'], prompt: `Anatomy sketch reference for the upper torso...` },
];

// ===================================================================
// KODE INTI WEBSITE (Jangan diubah)
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
    // --- Elemen-elemen penting ---
    const navMenu = document.getElementById('navMenu');
    const homeBtn = document.getElementById('homeBtn');
    const promptGrid = document.getElementById('promptGrid');
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    const tagFilterBtn = document.getElementById('tagFilterBtn');
    const tagDropdownContent = document.getElementById('tagDropdownContent');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-btn');
    const hamburger = document.getElementById('hamburger');

    // --- FUNGSI-FUNGSI ---

    // Fungsi untuk menampilkan kartu
    function displayCards(data) {
        promptGrid.innerHTML = '';
        if (data.length === 0) {
            promptGrid.innerHTML = '<p class="info-text">Tidak ada gambar untuk filter ini.</p>';
            return;
        }
        data.forEach(item => {
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
    }

    // Fungsi untuk membuat daftar tag di dalam dropdown
    function createTagDropdown() {
        const allTags = promptData.flatMap(item => item.tags);
        const uniqueTags = [...new Set(allTags)];
        tagDropdownContent.innerHTML = '';
        uniqueTags.sort().forEach(tag => {
            const tagButton = document.createElement('button');
            tagButton.className = 'filter-btn';
            tagButton.textContent = tag;
            tagButton.dataset.tag = tag;
            tagDropdownContent.appendChild(tagButton);
        });
    }
    
    // --- INISIALISASI & EVENT LISTENERS ---

    displayCards(promptData);
    createTagDropdown();

    // Event Listener untuk menu hamburger
    hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));

    // Event Listener untuk filter KATEGORI dari menu utama
    navMenu.addEventListener('click', (event) => {
        if (event.target.classList.contains('category-filter-link')) {
            event.preventDefault();
            const categoryToFilter = event.target.dataset.category;
            const filteredData = promptData.filter(item => item.category === categoryToFilter);
            displayCards(filteredData);
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });

    // ===================================================================
    // EVENT LISTENERS UNTUK FILTER TAG (BAGIAN YANG DIPERBAIKI)
    // ===================================================================

    // 1. Tombol utama "Filter by Tag" HANYA untuk membuka/menutup dropdown
    tagFilterBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Mencegah event "window.click" berjalan
        tagDropdownContent.classList.toggle('show');
    });

    // 2. Tombol di DALAM dropdown untuk menjalankan filter
    tagDropdownContent.addEventListener('click', (event) => {
        if (event.target.classList.contains('filter-btn')) {
            const clickedTag = event.target.dataset.tag;

            // Atur status aktif pada tombol
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            resetFilterBtn.classList.remove('active');

            // Filter kartu
            promptGrid.querySelectorAll('.card').forEach(card => {
                if (card.dataset.tags.split(',').includes(clickedTag)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });

            // Tutup dropdown setelah memilih
            tagDropdownContent.classList.remove('show');
        }
    });

    // Fungsi untuk mereset semua filter dan menampilkan semua gambar
    function resetAllFilters() {
        displayCards(promptData);
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        resetFilterBtn.classList.add('active');
    }

    // Pasang fungsi reset ke tombol 'Tampilkan Semua' dan tombol 'Home/Brand'
    resetFilterBtn.addEventListener('click', resetAllFilters);
    homeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resetAllFilters();
    });
    
    // Klik di luar dropdown untuk menutupnya
    window.addEventListener('click', () => {
        if (tagDropdownContent.classList.contains('show')) {
            tagDropdownContent.classList.remove('show');
        }
    });

    // Event Listener untuk tombol copy & preview gambar
    promptGrid.addEventListener('click', (event) => {
        if (event.target.classList.contains('copy-btn')) {
            const card = event.target.closest('.card');
            const promptText = card.querySelector('.prompt-text').value;
            navigator
