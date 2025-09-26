// ===================================================================
// PUSAT DATA ANDA
// ===================================================================
const promptData = [
    { 
        image: 'images/gambar1.png',
        category: 'Anime', // <-- Contoh Kategori
        tags: ['sketsa', 'anatomi', 'referensi'], 
        prompt: `Sketsa referensi anatomi torso bagian depan dan pinggang...` 
    },
    { 
        image: 'images/gambar1.png',
        category: 'Illustration', // <-- Contoh Kategori
        tags: ['vektor', 'wanita', 'selebriti'], 
        prompt: `Vector portrait illustration of Ariana Grande...` 
    },
    { 
        image: 'images/gambar1.png',
        category: 'Illustration', // <-- Contoh Kategori
        tags: ['vektor', 'wanita', 'asia', 'realistis'], 
        prompt: `Realistic vector art of an Asian woman...` 
    },
    { 
        image: 'images/gambar1.png',
        category: 'Sticker', // <-- Contoh Kategori
        tags: ['vektor', 'wanita', 'asia', 'pink'], 
        prompt: `Vector illustration of an asian woman...` 
    },
    { 
        image: 'images/gambar1.png',
        category: 'Photos', // <-- Contoh Kategori
        tags: ['foto', 'candid', 'cosplay'], 
        prompt: `Candid street photograph of a cosplayer...` 
    },
    { 
        image: 'images/gambar1.png',
        category: 'Character Design', // <-- Contoh Kategori
        tags: ['sketsa', 'anatomi', 'referensi'], 
        prompt: `Anatomy sketch reference for the upper torso...` 
    },
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
            promptGrid.innerHTML = '<p class="info-text">Tidak ada gambar untuk kategori ini.</p>';
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
        tagDropdownContent.innerHTML = ''; // Kosongkan dulu
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

    // ** BARU: Event Listener untuk filter KATEGORI dari menu utama **
    navMenu.addEventListener('click', (event) => {
        if (event.target.classList.contains('category-filter-link')) {
            event.preventDefault(); // Mencegah link pindah halaman
            const categoryToFilter = event.target.dataset.category;
            
            const filteredData = promptData.filter(item => item.category === categoryToFilter);
            displayCards(filteredData);

            // Tutup menu mobile setelah item dipilih
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });

    // Event Listener untuk tombol filter TAG
    document.querySelector('.filter-controls').addEventListener('click', (event) => {
        // ... (kode filter tag yang sudah ada, tidak perlu diubah) ...
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

    // ... (sisa kode untuk modal, copy, dll. tetap sama) ...
    // Klik di luar dropdown untuk menutupnya
    window.addEventListener('click', (event) => {
        if (!event.target.matches('#tagFilterBtn')) {
            if (tagDropdownContent.classList.contains('show')) {
                tagDropdownContent.classList.remove('show');
            }
        }
    });
    // Event Listener untuk tombol copy & preview gambar
    promptGrid.addEventListener('click', (event) => {
        if (event.target.classList.contains('copy-btn')) {
            const card = event.target.closest('.card');
            const promptText = card.querySelector('.prompt-text').value;
            navigator.clipboard.writeText(promptText).then(() => {
                event.target.textContent = 'Copied!';
                setTimeout(() => { event.target.textContent = 'Copy'; }, 2000);
            });
        }
        if (event.target.tagName === 'IMG') {
            modal.style.display = "block";
            modalImg.src = event.target.src;
        }
    });
    // Event Listener untuk menutup modal
    closeBtn.onclick = () => { modal.style.display = "none"; }
    modal.onclick = (event) => { if (event.target === modal) { modal.style.display = "none"; } }
});
