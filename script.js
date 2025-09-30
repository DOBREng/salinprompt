document.addEventListener('DOMContentLoaded', () => {
    // --- 1. KONFIGURASI & DEKLARASI ELEMEN ---
    const SUPABASE_URL = 'https://nqhidaxedmomqvrfjobt.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xaGlkYXhlZG1vbXF2cmZqb2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNDI1MTcsImV4cCI6MjA3NDcxODUxN30.FeVwtAnNCtoGUX_G2Da0q05Fc1N11iuO3kRh7OaUmk8';

    const { createClient } = supabase;
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const getEl = (id) => document.getElementById(id);

    const promptGrid = getEl('promptGrid');
    const searchInput = getEl('searchInput');
    const navMenu = getEl('navMenu');
    const homeBtn = getEl('homeBtn');
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
    let currentPage = 1;
    const itemsPerPage = 12;
    let currentModalData = null;
    let currentPromptsOnPage = []; // Menyimpan data dari halaman yang sedang aktif
    let currentFilter = { type: 'all', value: null }; // Menyimpan state filter saat ini

    // --- 3. FUNGSI-FUNGSI UTAMA ---

    // FUNGSI UTAMA BARU: Mengambil data dari Supabase sesuai halaman dan filter
    async function fetchAndDisplayPrompts(page = 1) {
        currentPage = page;
        promptGrid.innerHTML = '<p class="info-text">Memuat prompt...</p>';
        paginationContainer.innerHTML = '';

        let query = supabaseClient.from('prompts').select('*', { count: 'exact' });

        // Terapkan filter berdasarkan state 'currentFilter'
        if (currentFilter.type === 'search' && currentFilter.value) {
            const searchTerm = `%${currentFilter.value}%`;
            query = query.or(`title.ilike.${searchTerm},prompt.ilike.${searchTerm},tags.ilike.${searchTerm}`);
        } else if (currentFilter.type === 'category' && currentFilter.value) {
            query = query.eq('category', currentFilter.value);
        } else if (currentFilter.type === 'tag' && currentFilter.value) {
			query = query.ilike('tags', `%${currentFilter.value}%`); // <--- BARIS INI SALAH
		}
        
        // Atur urutan dan jangkauan data (Pagination)
        query = query.order('created_at', { ascending: false })
                     .range((page - 1) * itemsPerPage, page * itemsPerPage - 1);

        const { data, error, count } = await query;

        if (error) {
            console.error('Error fetching prompts:', error);
            promptGrid.innerHTML = '<p class="info-text">Gagal memuat prompt.</p>';
            return;
        }

        currentPromptsOnPage = data; // Simpan data halaman ini
        displayCards(data);

        const totalPages = Math.ceil(count / itemsPerPage);
        setupPagination(totalPages);
        
        if (promptCountElement) {
            promptCountElement.textContent = count;
        }
    }

    // Fungsi untuk menampilkan kartu (tidak berubah)
    function displayCards(data) {
        promptGrid.innerHTML = '';
        if (data.length === 0) {
            promptGrid.innerHTML = `
                <div class="no-results-container">
                    <div class="no-results-icon">🔎</div>
                    <h3 class="no-results-title">Oops, Tidak Ditemukan!</h3>
                    <p class="no-results-text">Tidak ada prompt yang cocok. Coba kata kunci atau filter lain.</p>
                </div>`;
            return;
        }
        data.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.id = item.id;
            card.style.animationDelay = `${index * 50}ms`;

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

    // Fungsi untuk menampilkan modal detail (sedikit penyesuaian)
    function showPromptModal(cardElement) {
        const promptId = parseInt(cardElement.dataset.id, 10);
        // Cari data dari prompt yang ditampilkan di halaman saat ini
        const itemData = currentPromptsOnPage.find(p => p.id === promptId);

        if (!itemData) return;

        currentModalData = itemData;
        promptModalTitle.textContent = currentModalData.title || 'Tanpa Judul';
        promptModalImage.src = currentModalData.image_url;
        promptModalImage.dataset.currentView = 'output';
        promptModalImage.alt = currentModalData.title;
        promptModalText.value = currentModalData.prompt;

        const tags = typeof currentModalData.tags === 'string' ? JSON.parse(currentModalData.tags) : (currentModalData.tags || []);
        promptModalTags.innerHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        modalPrevBtn.style.display = currentModalData.image_input_url ? 'block' : 'none';
        modalNextBtn.style.display = currentModalData.image_input_url ? 'block' : 'none';
        
        modalOriginalLabel.style.display = 'none';
        promptModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    // Fungsi untuk paginasi "cerdas"
    function setupPagination(totalPages) {
        paginationContainer.innerHTML = '';
        if (totalPages <= 1) return;

        const goToPage = (page) => {
            if (page < 1 || page > totalPages || page === currentPage) return;
            window.scrollTo(0, 0);
            fetchAndDisplayPrompts(page); 
        };

        const createButton = (text, page, isDisabled = false, isActive = false, isEllipsis = false) => {
            const button = document.createElement('button');
            button.className = 'page-btn';
            if (isActive) button.classList.add('active');
            if (isEllipsis) button.classList.add('ellipsis');
            
            button.textContent = text;
            button.disabled = isDisabled || isEllipsis;

            if (!isEllipsis) {
                button.addEventListener('click', () => goToPage(page));
            }
            return button;
        };

        const pagesToShow = [];
        const windowSize = 1; 

        paginationContainer.appendChild(createButton('<', currentPage - 1, currentPage === 1));

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - windowSize && i <= currentPage + windowSize)) {
                pagesToShow.push(i);
            }
        }

        let prevPage = 0;
        for (const page of pagesToShow) {
            if (page > prevPage + 1) {
                paginationContainer.appendChild(createButton('...', 0, false, false, true));
            }
            paginationContainer.appendChild(createButton(page, page, false, page === currentPage));
            prevPage = page;
        }

        paginationContainer.appendChild(createButton('>', currentPage + 1, currentPage === totalPages));
    }

    // Fungsi-fungsi utilitas lain (tidak berubah)
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
    
    function closePromptModal() {
        promptModal.classList.remove('show');
        document.body.style.overflow = '';
        currentModalData = null;
    }

    // --- 4. EVENT LISTENERS ---

    // Helper function untuk 'debounce' agar pencarian tidak berjalan terus-menerus
    function debounce(func, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // Event Listener untuk PENCARIAN (diperbarui)
    searchInput.addEventListener('input', debounce((e) => {
        const searchTerm = e.target.value.trim();
        currentFilter = { type: 'search', value: searchTerm };
        fetchAndDisplayPrompts(1); // Selalu kembali ke halaman 1 saat pencarian baru
    }, 500)); // Delay 500ms setelah user berhenti mengetik

    // Event Listener untuk FILTER KATEGORI (diperbarui)
    navMenu.addEventListener('click', (e) => {
        const link = e.target.closest('.category-filter-link');
        if (link) {
            e.preventDefault();
            const category = link.dataset.category;
            currentFilter = { type: 'category', value: category };
            fetchAndDisplayPrompts(1);
            if (window.innerWidth <= 992) { // Tutup hamburger menu di mobile
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
    
    // Event Listener untuk FILTER TAG (diperbarui)
    document.querySelector('.filter-controls').addEventListener('click', (e) => {
        const target = e.target;
        if (target.id === 'tagFilterBtn') {
            tagDropdownContent.classList.toggle('show');
            return;
        }
        if (target.classList.contains('filter-btn') && target.dataset.tag) {
            const tag = target.dataset.tag;
            currentFilter = { type: 'tag', value: tag };
            fetchAndDisplayPrompts(1);
            tagDropdownContent.classList.remove('show');
        }
    });

    // Event Listener untuk TOMBOL HOME & RESET (diperbarui)
    const resetAllFilters = (e) => {
        e.preventDefault();
        searchInput.value = '';
        currentFilter = { type: 'all', value: null };
        fetchAndDisplayPrompts(1);
    };
    homeBtn.addEventListener('click', resetAllFilters);
    getEl('resetFilterBtn').addEventListener('click', resetAllFilters);


    // Event Listener lain (sebagian besar tidak berubah)
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.tag-dropdown')) {
            tagDropdownContent.classList.remove('show');
        }
    });
    
    promptGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (!card) return;
        
        if (e.target.classList.contains('copy-btn')) {
            const promptText = card.querySelector('.prompt-text').value;
            navigator.clipboard.writeText(promptText).then(() => {
                e.target.textContent = 'Tersalin!';
                setTimeout(() => { e.target.textContent = 'Salin'; }, 2000);
            });
        } else if (window.innerWidth <= 768) {
            showPromptModal(card);
        } else if (e.target.closest('.card-image-container')) {
            const img = card.querySelector('.img-output') || card.querySelector('.card-image');
            if (img) {
                modalImage.src = img.src;
                imageModal.style.display = 'flex';
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
                    if (dd !== targetDropdown) dd.classList.remove('show');
                });
                targetDropdown.classList.toggle('show');
            }
        });
    });

    // --- 5. FUNGSI INISIALISASI ---
    async function initializeApp() {
        fetchAndDisplayPrompts(1);
        
        try {
            const { data, error } = await supabaseClient.from('prompts').select('tags');
            if (error) throw error;
            
            const allTags = [...new Set(data.flatMap(item => typeof item.tags === 'string' ? JSON.parse(item.tags) : (item.tags || [])))];
            
            tagDropdownContent.innerHTML = '';
            allTags.sort().forEach(tag => {
                const button = document.createElement('button');
                button.className = 'filter-btn';
                button.textContent = tag;
                button.dataset.tag = tag;
                tagDropdownContent.appendChild(button);
            });
        } catch(error) {
            console.error('Gagal memuat tags:', error);
        }
    }

    initializeApp();
});