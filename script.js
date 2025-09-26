// ===================================================================
// PUSAT DATA ANDA
// ===================================================================
const promptData = [
    { image: 'images/gambar1.png', tags: ['sketsa', 'anatomi', 'referensi'], prompt: `Sketsa referensi anatomi torso bagian depan dan pinggang dengan penekanan pada otot oblique.` },
    { image: 'images/gambar2.png', tags: ['vektor', 'wanita', 'selebriti'], prompt: `Vector portrait illustration of Ariana Grande, flat cell shading, bold separated color blocks, no gradients, orange background.` },
    { image: 'images/gambar3.png', tags: ['vektor', 'wanita', 'asia', 'realistis'], prompt: `Realistic vector art of an Asian woman with long dark hair, wearing a black top and fishnet gloves, looking at the camera.` },
    { image: 'images/gambar4.png', tags: ['vektor', 'wanita', 'asia', 'pink'], prompt: `Vector illustration of an asian woman with dark hair, looking down, wearing a pink shirt.` },
    { image: 'images/gambar5.png', tags: ['foto', 'candid', 'cosplay'], prompt: `Candid street photograph of a cosplayer with purple leggings and top, arms crossed.` },
    { image: 'images/gambar6.png', tags: ['sketsa', 'anatomi', 'referensi'], prompt: `Anatomy sketch reference for the upper torso, showing the connection of the neck, shoulders, and chest muscles.` },
];

// ===================================================================
// KODE INTI WEBSITE (Jangan diubah)
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
    // --- Elemen-elemen penting ---
    const promptGrid = document.getElementById('promptGrid');
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    const tagFilterBtn = document.getElementById('tagFilterBtn');
    const tagDropdownContent = document.getElementById('tagDropdownContent');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-btn');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    // --- FUNGSI-FUNGSI ---

    // Fungsi untuk menampilkan kartu
    function displayCards(data) {
        promptGrid.innerHTML = '';
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
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Event Listener untuk tombol filter utama ('Tampilkan Semua' & tag di dalam dropdown)
    document.querySelector('.filter-controls').addEventListener('click', (event) => {
        if (!event.target.classList.contains('filter-btn')) return;

        // Jika yang diklik adalah tombol dropdown utama, bukan isinya
        if (event.target.id === 'tagFilterBtn') {
            tagDropdownContent.classList.toggle('show');
            return;
        }

        // --- Logika filter ---
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        // Atur juga tombol reset jika yang diklik bukan tombol itu sendiri
        if (event.target.id !== 'resetFilterBtn') {
            resetFilterBtn.classList.remove('active');
        } else {
            tagFilterBtn.classList.remove('active');
        }

        const clickedTag = event.target.dataset.tag;
        promptGrid.querySelectorAll('.card').forEach(card => {
            if (!clickedTag || card.dataset.tags.split(',').includes(clickedTag)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Tutup dropdown setelah tag dipilih
        tagDropdownContent.classList.remove('show');
    });

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
            // ... (logika copy)
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
