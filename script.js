// ===================================================================
// KODE INTI WEBSITE
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DEKLARASI ELEMEN & VARIABEL ---
    const getEl = (id) => document.getElementById(id);

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

    // Variabel State
    let currentPage = 1;
    const itemsPerPage = 12;
    let currentActiveData = [...promptData];
    let currentModalData = null;

    // --- 2. FUNGSI-FUNGSI UTAMA ---

    function updateDisplay(dataToShow) {
        currentActiveData = dataToShow;
        const totalPages = Math.ceil(currentActiveData.length / itemsPerPage);
        
        if (currentPage > totalPages) {
            currentPage = totalPages > 0 ? totalPages : 1;
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedData = currentActiveData.slice(startIndex, startIndex + itemsPerPage);

        displayCards(paginatedData);
        setupPagination(totalPages);
    }

    function displayCards(data) {
        promptGrid.innerHTML = '';
        if (data.length === 0) {
            promptGrid.innerHTML = '<p class="info-text">Tidak ada prompt yang cocok.</p>';
            return;
        }
        data.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.index = promptData.indexOf(item);
            
            const delay = index * 50;
            card.style.animationDelay = `${delay}ms`;

            const tagsHTML = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
            const imageHTML = item.imageInput ? `
                <div class="card-image-container">
                    <img src="${item.imageInput}" alt="Gambar Input" class="card-image img-input" loading="lazy">
                    <img src="${item.image}" alt="${item.title}" class="card-image img-output" loading="lazy">
                    <span class="original-label">Original</span>
                </div>` : `
                <div class="card-image-container">
                    <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy">
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
        const allTags = [...new Set(promptData.flatMap(item => item.tags))];
        tagDropdownContent.innerHTML = '';
        allTags.sort().forEach(tag => {
            const button = document.createElement('button');
            button.className = 'filter-btn';
            button.textContent = tag;
            button.dataset.tag = tag;
            tagDropdownContent.appendChild(button);
        });
    }

    function showPromptModal(cardElement) {
        const dataIndex = cardElement.dataset.index;
        if (dataIndex === undefined) return;

        const itemData = promptData[dataIndex];
        if (!itemData) return;

        currentModalData = itemData;

        promptModalTitle.textContent = currentModalData.title || 'Tanpa Judul';
        promptModalImage.src = currentModalData.image; 
        promptModalImage.dataset.currentView = 'output';
        promptModalImage.alt = currentModalData.title;
        promptModalText.value = currentModalData.prompt;
        promptModalTags.innerHTML = currentModalData.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        if (currentModalData.imageInput) {
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

    function closePromptModal() {
        promptModal.classList.remove('show');
        document.body.style.overflow = '';
        currentModalData = null;
    }

    function toggleModalImage() {
        if (!currentModalData || !currentModalData.imageInput) return;

        const currentView = promptModalImage.dataset.currentView;
        if (currentView === 'output') {
            promptModalImage.src = currentModalData.imageInput;
            promptModalImage.dataset.currentView = 'input';
            modalOriginalLabel.style.display = 'block';
        } else {
            promptModalImage.src = currentModalData.image;
            promptModalImage.dataset.currentView = 'output';
            modalOriginalLabel.style.display = 'none';
        }
    }

    // --- 3. EVENT LISTENERS ---
    
    // Logika untuk Dropdown Menu di Mobile
    document.querySelectorAll('.nav-menu .dropdown > a').forEach(menuItem => {
        menuItem.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const targetDropdown = this.nextElementSibling;
                // Tutup dropdown lain SEBELUM membuka yang baru
                navMenu.querySelectorAll('.dropdown-content.show').forEach(dd => {
                    if (dd !== targetDropdown) {
                        dd.classList.remove('show');
                    }
                });
                targetDropdown.classList.toggle('show');
            }
        });
    });
    
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const filteredData = promptData.filter(item => 
            (item.title && item.title.toLowerCase().includes(searchTerm)) ||
            item.prompt.toLowerCase().includes(searchTerm) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        currentPage = 1;
        updateDisplay(filteredData);
        document.querySelectorAll('.filter-btn.active').forEach(btn => btn.classList.remove('active'));
        resetFilterBtn.classList.add('active');
    });

    navMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-filter-link')) {
            e.preventDefault();
            const category = e.target.dataset.category;
            updateDisplay(promptData.filter(item => item.category === category));
            currentPage = 1;
            searchInput.value = '';
            document.querySelectorAll('.filter-btn.active').forEach(btn => btn.classList.remove('active'));
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                // Tutup semua dropdown di menu mobile
                navMenu.querySelectorAll('.dropdown-content.show').forEach(dd => dd.classList.remove('show'));
            }
        }
    });

    document.querySelector('.filter-controls').addEventListener('click', (e) => {
        const target = e.target;
        if (target.id === 'tagFilterBtn') {
            tagDropdownContent.classList.toggle('show');
            return;
        }
        if (target.classList.contains('filter-btn')) {
            searchInput.value = '';
            // Termasuk tombol di dalam dropdown tag
            document.querySelectorAll('.filter-controls .filter-btn, .tag-list .filter-btn').forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
            
            // Jika yang diklik adalah tombol "Tampilkan Semua" (reset)
            if (target.id === 'resetFilterBtn') {
                updateDisplay(promptData);
            } else { // Jika yang diklik adalah tag
                const tag = target.dataset.tag;
                updateDisplay(promptData.filter(item => item.tags.includes(tag)));
            }
            
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
        searchInput.value = '';
        document.querySelectorAll('.filter-btn.active').forEach(btn => btn.classList.remove('active'));
        resetFilterBtn.classList.add('active');
        currentPage = 1;
        updateDisplay(promptData);
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
                    imageModal.style.display = 'flex'; // Menggunakan flex untuk centering
                }
            }
        }
    });
    
    promptModalCloseBtn.addEventListener('click', closePromptModal);
    promptModal.addEventListener('click', (e) => { if (e.target === promptModal) closePromptModal(); });
    promptModalCopyBtn.addEventListener('click', (e) => {
        navigator.clipboard.writeText(promptModalText.value).then(() => {
            e.target.textContent = 'Tersalin!';
            setTimeout(() => { e.target.textContent = 'Salin'; }, 2000);
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

    // --- 4. INISIALISASI ---
    if(promptCountElement) {
        promptCountElement.textContent = promptData.length;
    }
    createTagDropdown();
    updateDisplay(promptData);
});