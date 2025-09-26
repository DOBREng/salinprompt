// ===================================================================
// PUSAT DATA ANDA (Isi dengan data Anda yang sudah ada 'category')
// ===================================================================
const promptData = [
    { image: 'images/gambar1.png', category: 'Anime', tags: ['sketsa', 'anatomi', 'referensi'], prompt: `Sketsa referensi anatomi torso bagian depan...` },
    { image: 'images/gambar2.png', category: 'Illustration', tags: ['vektor', 'wanita', 'selebriti'], prompt: `Vector portrait illustration of Ariana Grande...` },
    { image: 'images/gambar3.png', category: 'Illustration', tags: ['vektor', 'wanita', 'asia', 'realistis'], prompt: `Realistic vector art of an Asian woman...` },
    { image: 'images/gambar4.png', category: 'Sticker', tags: ['vektor', 'wanita', 'asia', 'pink'], prompt: `Vector illustration of an asian woman...` },
    { image: 'images/gambar5.png', category: 'Photos', tags: ['foto', 'candid', 'cosplay'], prompt: `Candid street photograph of a cosplayer...` },
    { image: 'images/gambar6.png', category: 'Character Design', tags: ['sketsa', 'anatomi', 'referensi'], prompt: `Anatomy sketch reference for the upper torso...` },
];

// ===================================================================
// KODE INTI WEBSITE
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
    // --- Elemen-elemen penting ---
    const navMenu = document.getElementById('navMenu');
    const homeBtn = document.getElementById('homeBtn'); // Kita butuh ini untuk mereset
    const promptGrid = document.getElementById('promptGrid');
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    const tagFilterBtn = document.getElementById('tagFilterBtn');
    const tagDropdownContent = document.getElementById('tagDropdownContent');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-btn');
    const hamburger = document.getElementById('hamburger');

    // --- FUNGSI-FUNGSI ---




// --- Search Function ---
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.toLowerCase();
    const filteredData = promptData.filter(item => 
        item.prompt.toLowerCase().includes(keyword) ||
        item.tags.some(tag => tag.toLowerCase().includes(keyword)) ||
        item.category.toLowerCase().includes(keyword)
    );
    displayCards(filteredData);

    // Reset tombol aktif agar jelas ini hasil pencarian
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
});




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

    function createTagDropdown() {
        // ... (fungsi ini tidak berubah, sudah benar) ...
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

    // Event Listener untuk menu hamburger (tidak berubah)
    hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
    
    // ===================================================================
    // KODE BARU: LOGIKA FILTER KATEGORI
    // ===================================================================
    navMenu.addEventListener('click', (event) => {
        // Hanya jalankan jika yang diklik adalah link filter kategori
        if (event.target.classList.contains('category-filter-link')) {
            event.preventDefault(); 
            const categoryToFilter = event.target.dataset.category;
            
            // Filter data utama berdasarkan kategori yang diklik
            const filteredData = promptData.filter(item => item.category === categoryToFilter);
            
            // Tampilkan kartu yang sudah difilter
            displayCards(filteredData);

            // Reset status aktif pada tombol filter tag
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            
            // Tutup menu mobile setelah item dipilih
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });

    // ===================================================================
    // KODE LAMA ANDA UNTUK FILTER TAG (TETAP BERFUNGSI NORMAL)
    // ===================================================================
    document.querySelector('.filter-controls').addEventListener('click', (event) => {
        if (!event.target.classList.contains('filter-btn')) return;

        if (event.target.id === 'tagFilterBtn') {
            tagDropdownContent.classList.toggle('show');
            return;
        }

        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        if (event.target.id !== 'resetFilterBtn') {
            resetFilterBtn.classList.remove('active');
        } else {
            // Jika "Tampilkan Semua" diklik, tampilkan semua data
            displayCards(promptData);
            tagFilterBtn.classList.remove('active');
            return; // Hentikan fungsi di sini
        }

        const clickedTag = event.target.dataset.tag;
        // Saat filter tag, kita akan memfilter dari SEMUA data
        const filteredByTag = promptData.filter(item => item.tags.includes(clickedTag));
        displayCards(filteredByTag);
        
        tagDropdownContent.classList.remove('show');
    });
    
    // Menambahkan listener ke tombol Home/Brand untuk mereset
    homeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        displayCards(promptData);
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        resetFilterBtn.classList.add('active');
    });

    // ... Sisa kode tidak berubah (klik di luar dropdown, copy, modal) ...
    window.addEventListener('click', (event) => {
        if (!event.target.matches('#tagFilterBtn') && !tagFilterBtn.contains(event.target)) {
            if (tagDropdownContent.classList.contains('show')) {
                tagDropdownContent.classList.remove('show');
            }
        }
    });
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
    closeBtn.onclick = () => { modal.style.display = "none"; }
    modal.onclick = (event) => { if (event.target === modal) { modal.style.display = "none"; } }
});
