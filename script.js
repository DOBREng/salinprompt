document.addEventListener('DOMContentLoaded', () => {
    // --- 1. KONFIGURASI & DEKLARASI ELEMEN ---

    // Masukkan URL dan Key dari akun Supabase Anda di sini
    const SUPABASE_URL = 'https://nqhidaxedmomqvrfjobt.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xaGlkYXhlZG1vbXF2cmZqb2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNDI1MTcsImV4cCI6MjA3NDcxODUxN30.FeVwtAnNCtoGUX_G2Da0q05Fc1N11iuO3kRh7OaUmk8';

    // Membuat koneksi ke Supabase menggunakan "kamus" dari CDN
    const { createClient } = supabase;
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const getEl = (id) => document.getElementById(id);

    // Deklarasi semua elemen seperti sebelumnya...
    const promptGrid = getEl('promptGrid');
    const searchInput = getEl('searchInput');
    const navMenu = getEl('navMenu');
    const homeBtn = getEl('homeBtn');
    const resetFilterBtn = getEl('resetFilterBtn');
    const tagFilterBtn = getEl('tagFilterBtn');
    const tagDropdownContent = getEl('tagDropdownContent');
    const hamburger = getEl('hamburger');
    const paginationContainer = getEl('paginationContainer');
    const backToTopBtn = getEl('backToTopBtn');
    const promptCountElement = getEl('promptCount');
    const imageModal = getEl('imageModal');
    const modalImage = getEl('modalImage');
    const imageModalCloseBtn = imageModal.querySelector('.close-btn');
    const promptModal = getEl('promptModal');
    const promptModalTitle = getEl('promptModalTitle');
    const promptModalImage = getEl('promptModalImage');
    const promptModalTags = getEl('promptModalTags');
    const promptModalText = getEl('promptModalText');
    const promptModalCopyBtn = getEl('promptModalCopyBtn');
    const promptModalCloseBtn = promptModal.querySelector('.modal-prompt-close');
    const modalPrevBtn = getEl('modalPrevBtn');
    const modalNextBtn = getEl('modalNextBtn');
    const modalOriginalLabel = getEl('modalOriginalLabel');
    
    // --- 2. VARIABEL STATE & DATA ---
    let allPrompts = [];
    let currentActiveData = [];
    let currentPage = 1;
    const itemsPerPage = 12;
    let currentModalData = null;

    // --- 3. FUNGSI-FUNGSI UTAMA ---

    function updateDisplay(dataToShow) {
        currentActiveData = dataToShow;
        const totalPages = Math.ceil(currentActiveData.length / itemsPerPage);
        
        if (currentPage > totalPages && totalPages > 0) {
            currentPage = totalPages;
        } else if (totalPages === 0) {
            currentPage = 1;
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedData = currentActiveData.slice(startIndex, startIndex + itemsPerPage);

        displayCards(paginatedData);
        setupPagination(totalPages);
    }

    function displayCards(data) {
    promptGrid.innerHTML = '';
    if (data.length === 0) {
        promptGrid.innerHTML = `
            <div class="no-results-container">
                <div class="no-results-icon">🔎</div>
                <h3 class="no-results-title">Oops, Tidak Ditemukan!</h3>
                <p class="no-results-text">Sepertinya tidak ada prompt yang cocok dengan pencarian Anda. Coba gunakan kata kunci atau filter yang lain.</p>
            </div>
        `;
        return;
    }
    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.id = item.id;

        const delay = index * 50;
        card.style.animationDelay = `${delay}ms`;

        // === PERUBAHAN DI SINI ===
        const tags = typeof item.tags === 'string' ? JSON.parse(item.tags) : (item.tags || []);
        const tagsHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        const imageHTML = item.image_input_url ? `
            <div class="card-image-container">
                <img src="${item.image_input_url}" alt="Gambar Input" class="card-image img-input" loading="lazy">
                <img src="${item.image_url}" alt="${item.title}" class="card-image img-output" loading="lazy">
                <span class="original-label">Original</span>
            </div>` : `
            <div class="card-image-container">
                <img src="${item.image_url}" alt="${item.title}" class="card-image" loading="lazy">
            </div>`;

        card.innerHTML = `
            ${imageHTML}
            <div class="card-content">
                <h4 class="card-title">${item.title || 'Tanpa Judul'}</h4>
                <div class="tags">${tagsHTML}</div>
                <textarea class="prompt-text" readonly>${item.prompt}</textarea>
                <button class="copy-btn">Salin</button>
            </div>`;
        promptGrid.appendChild(card);
    });
}
    
    function showPromptModal(cardElement) {
    const promptId = parseInt(cardElement.dataset.id, 10);
    const itemData = allPrompts.find(p => p.id === promptId);

    if (!itemData) return;

    currentModalData = itemData;

    promptModalTitle.textContent = currentModalData.title || 'Tanpa Judul';
    promptModalImage.src = currentModalData.image_url;
    promptModalImage.dataset.currentView = 'output';
    promptModalImage.alt = currentModalData.title;
    promptModalText.value = currentModalData.prompt;

    // === PERUBAHAN DI SINI ===
    const tags = typeof currentModalData.tags === 'string' ? JSON.parse(currentModalData.tags) : (currentModalData.tags || []);
    promptModalTags.innerHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    if (currentModalData.image_input_url) {
        modalPrevBtn.style.display = 'block';
        modalNextBtn.style.display = 'block';
    } else {
        modalPrevBtn.style.display = 'none';
        modalNextBtn.style.display = 'none';
    }
    
    modalOriginalLabel.style.display = 'none';
    promptModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

    function toggleModalImage() {
        if (!currentModalData || !currentModalData.image_input_url) return;
        const currentView = promptModalImage.dataset.currentView;
        if (currentView === 'output') {
            promptModalImage.src = currentModalData.image_input_url;
            promptModalImage.dataset.currentView = 'input';
            modalOriginalLabel.style.display = 'block';
        } else {
            promptModalImage.src = currentModalData.image_url;
            promptModalImage.dataset.currentView = 'output';
            modalOriginalLabel.style.display = 'none';
        }
    }
    
    function setupPagination(totalPages) {
        paginationContainer.innerHTML = '';
        if (totalPages <= 1) return;
        const createButton = (text, onClick, isDisabled = false, isActive = false) => {
            const button = document.createElement('button');
            button.className = 'page-btn';
            button.textContent = text;
            button.disabled = isDisabled;
            if (isActive) button.classList.add('active');
            button.addEventListener('click', onClick);
            return button;
        };
        const goToPage = (page) => {
            currentPage = page;
            updateDisplay(currentActiveData);
            window.scrollTo(0, 0);
        };
        paginationContainer.appendChild(createButton('<', () => goToPage(currentPage - 1), currentPage === 1));
        for (let i = 1; i <= totalPages; i++) {
            paginationContainer.appendChild(createButton(i, () => goToPage(i), false, i === currentPage));
        }
        paginationContainer.appendChild(createButton('>', () => goToPage(currentPage + 1), currentPage === totalPages));
    }
    
    function createTagDropdown() {
    // === PERUBAHAN DI SINI ===
    const allTags = [...new Set(allPrompts.flatMap(item => {
        const tags = typeof item.tags === 'string' ? JSON.parse(item.tags) : (item.tags || []);
        return tags;
    }))];
    
    tagDropdownContent.innerHTML = '';
    allTags.sort().forEach(tag => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.textContent = tag;
        button.dataset.tag = tag;
        tagDropdownContent.appendChild(button);
    });
}

    function closePromptModal() {
        promptModal.classList.remove('show');
        document.body.style.overflow = '';
        currentModalData = null;
    }

    // --- 4. EVENT LISTENERS ---
    
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const filteredData = allPrompts.filter(item => 
            (item.title && item.title.toLowerCase().includes(searchTerm)) ||
            (item.prompt && item.prompt.toLowerCase().includes(searchTerm)) ||
            (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
        );
        currentPage = 1;
        updateDisplay(filteredData);
    });
    navMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-filter-link')) {
            e.preventDefault();
            const category = e.target.dataset.category;
            updateDisplay(allPrompts.filter(item => item.category === category));
            currentPage = 1;
        }
    });
    document.querySelector('.filter-controls').addEventListener('click', (e) => {
        const target = e.target;
        if (target.id === 'tagFilterBtn') {
            tagDropdownContent.classList.toggle('show');
            return;
        }
        if (target.classList.contains('filter-btn')) {
            const tag = target.dataset.tag;
            updateDisplay(tag ? allPrompts.filter(item => (item.tags || []).includes(tag)) : allPrompts);
            currentPage = 1;
            tagDropdownContent.classList.remove('show');
        }
    });
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.tag-dropdown')) {
            tagDropdownContent.classList.remove('show');
        }
    });
    homeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = 1;
        updateDisplay(allPrompts);
    });
    promptGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (!card) return;
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            showPromptModal(card);
        } else {
            if (e.target.classList.contains('copy-btn')) {
                const promptText = card.querySelector('.prompt-text').value;
                navigator.clipboard.writeText(promptText).then(() => {
                    e.target.textContent = 'Tersalin!';
                    setTimeout(() => { e.target.textContent = 'Salin'; }, 2000);
                });
            } else if (e.target.closest('.card-image-container')) {
                const img = card.querySelector('.img-output') || card.querySelector('.card-image');
                if (img) {
                    modalImage.src = img.src;
                    imageModal.style.display = 'flex';
                }
            }
        }
    });
    promptModalImage.addEventListener('click', () => {
        if (promptModalImage.src) {
            modalImage.src = promptModalImage.src;
            imageModal.style.display = 'flex';
        }
    });
    promptModalCloseBtn.addEventListener('click', closePromptModal);
    promptModal.addEventListener('click', (e) => { if (e.target === promptModal) closePromptModal(); });
    promptModalCopyBtn.addEventListener('click', (e) => {
        navigator.clipboard.writeText(promptModalText.value).then(() => {
            e.target.textContent = 'Tersalin!';
            setTimeout(() => { e.target.textContent = 'Salin Prompt'; }, 2000);
        });
    });
    modalPrevBtn.addEventListener('click', toggleModalImage);
    modalNextBtn.addEventListener('click', toggleModalImage);
    imageModalCloseBtn.addEventListener('click', () => imageModal.style.display = "none");
    imageModal.addEventListener('click', (e) => { if (e.target === imageModal) imageModal.style.display = "none"; });
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    window.addEventListener('scroll', () => {
        backToTopBtn.style.display = (window.scrollY > 300) ? "block" : "none";
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.querySelectorAll('.nav-menu .dropdown > a').forEach(menuItem => {
        menuItem.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const targetDropdown = this.nextElementSibling;
                navMenu.querySelectorAll('.dropdown-content').forEach(dd => {
                    if (dd !== targetDropdown) {
                        dd.classList.remove('show');
                    }
                });
                targetDropdown.classList.toggle('show');
            }
        });
    });

    // --- 5. FUNGSI INISIALISASI ---

    async function initializeApp() {
        promptGrid.innerHTML = '<p class="info-text">Memuat prompt...</p>';
        
        try {
            const { data, error } = await supabaseClient
				.from('prompts')
				.select('*')
				.order('created_at', { ascending: false }); // <--- TAMBAHKAN BARIS INI

            if (error) {
                throw error;
            }

            allPrompts = data;
            
            if (promptCountElement) {
                promptCountElement.textContent = allPrompts.length;
            }
            createTagDropdown();
            updateDisplay(allPrompts);
        } catch (error) {
            console.error('Error fetching prompts:', error);
            promptGrid.innerHTML = '<p class="info-text">Gagal memuat prompt. Coba refresh halaman.</p>';
        }
    }

    initializeApp();
});