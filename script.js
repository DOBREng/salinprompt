// ==========================================================
// ===== VERSI DIAGNOSTIK DENGAN PELACAK (CONSOLE LOG) =====
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('[Langkah 1] DOMContentLoaded terpicu. Memulai aplikasi...');

    // --- 1. KONFIGURASI & VARIABEL GLOBAL ---
    const SUPABASE_URL = 'https://nqhidaxedmomqvrfjobt.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xaGlkYXhlZG1vbXF2cmZqb2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNDI1MTcsImV4cCI6MjA3NDcxODUxN30.FeVwtAnNCtoGUX_G2Da0q05Fc1N11iuO3kRh7OaUmk8';

    const { createClient } = supabase;
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    let allPrompts = [];
    let currentActiveData = [];
    let currentPage = 1;
    const itemsPerPage = 12;
    let currentModalData = null;

    // --- 2. FUNGSI-FUNGSI UTAMA ---

    function getTagsAsArray(tagsData) {
        if (Array.isArray(tagsData)) return tagsData;
        if (typeof tagsData === 'string') {
            try { return JSON.parse(tagsData); } catch (e) { return []; }
        }
        return [];
    }

    function updateDisplay(dataToShow) {
        const promptGrid = document.getElementById('promptGrid');
        currentActiveData = dataToShow;
        const totalPages = Math.ceil(currentActiveData.length / itemsPerPage);
        
        if (currentPage > totalPages) currentPage = totalPages > 0 ? totalPages : 1;

        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedData = currentActiveData.slice(startIndex, startIndex + itemsPerPage);

        displayCards(paginatedData, promptGrid);
        setupPagination(totalPages);
    }

    function displayCards(data, promptGrid) {
        promptGrid.innerHTML = '';
        if (data.length === 0) {
            promptGrid.innerHTML = `<div class="no-results-container"><h3>Tidak ada yang cocok.</h3></div>`;
            return;
        }
        data.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.id = item.id;
            card.style.animationDelay = `${index * 50}ms`;
            const tagsHTML = getTagsAsArray(item.tags).map(tag => `<span class="tag">${tag}</span>`).join('');
            const imageHTML = item.image_input_url ? `<div class="card-image-container"><img src="${item.image_input_url}" alt="Input" class="card-image img-input" loading="lazy"><img src="${item.image_url}" alt="${item.title}" class="card-image img-output" loading="lazy"><span class="original-label">Original</span></div>` : `<div class="card-image-container"><img src="${item.image_url}" alt="${item.title}" class="card-image" loading="lazy"></div>`;
            card.innerHTML = `${imageHTML}<div class="card-content"><h4 class="card-title">${item.title || 'Tanpa Judul'}</h4><div class="tags">${tagsHTML}</div><textarea class="prompt-text" readonly>${item.prompt}</textarea><button class="copy-btn">Salin</button></div>`;
            promptGrid.appendChild(card);
        });
    }

    function showPromptModal(promptId) {
        console.log(`[Langkah 6] Fungsi showPromptModal() dipanggil dengan ID: ${promptId}`);
        const itemData = allPrompts.find(p => p.id === promptId);
        if (!itemData) {
            console.error(`[GAGAL] Data untuk ID ${promptId} tidak ditemukan di dalam 'allPrompts'.`);
            return;
        }
        console.log(`[Langkah 7] Data untuk ID ${promptId} berhasil ditemukan.`, itemData);

        currentModalData = itemData;
        const promptModal = document.getElementById('promptModal');
        document.getElementById('promptModalTitle').textContent = currentModalData.title || 'Tanpa Judul';
        const promptModalImage = document.getElementById('promptModalImage');
        promptModalImage.src = currentModalData.image_url;
        promptModalImage.dataset.currentView = 'output';
        document.getElementById('promptModalText').value = currentModalData.prompt;
        document.getElementById('promptModalTags').innerHTML = getTagsAsArray(currentModalData.tags).map(tag => `<span class="tag">${tag}</span>`).join('');
        document.getElementById('modalPrevBtn').style.display = currentModalData.image_input_url ? 'block' : 'none';
        document.getElementById('modalNextBtn').style.display = currentModalData.image_input_url ? 'block' : 'none';
        document.getElementById('modalOriginalLabel').style.display = 'none';
        promptModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        console.log('[Langkah 8] Modal seharusnya sudah tampil sekarang.');
    }
    
    function closePromptModal() { document.getElementById('promptModal').classList.remove('show'); document.body.style.overflow = ''; currentModalData = null; }
    function toggleModalImage() { if (!currentModalData || !currentModalData.image_input_url) return; const promptModalImage = document.getElementById('promptModalImage'); const isOutput = promptModalImage.dataset.currentView === 'output'; promptModalImage.src = isOutput ? currentModalData.image_input_url : currentModalData.image_url; promptModalImage.dataset.currentView = isOutput ? 'input' : 'output'; document.getElementById('modalOriginalLabel').style.display = isOutput ? 'block' : 'none'; }

    function setupPagination(totalPages) {
        const paginationContainer = document.getElementById('paginationContainer');
        paginationContainer.innerHTML = '';
        if (totalPages <= 1) return;
        const createButton = (text, page) => { const button = document.createElement('button'); button.className = 'page-btn'; if (page === currentPage) button.classList.add('active'); button.disabled = page < 1 || page > totalPages; button.textContent = text; button.addEventListener('click', () => { currentPage = page; updateDisplay(currentActiveData); window.scrollTo(0, 0); }); return button; };
        paginationContainer.appendChild(createButton('<', currentPage - 1));
        for (let i = 1; i <= totalPages; i++) { paginationContainer.appendChild(createButton(i, i)); }
        paginationContainer.appendChild(createButton('>', currentPage + 1));
    }

    function createTagDropdown(tagDropdownContent) { const allTags = [...new Set(allPrompts.flatMap(item => getTagsAsArray(item.tags)))]; tagDropdownContent.innerHTML = ''; allTags.sort().forEach(tag => { const button = document.createElement('button'); button.className = 'filter-btn'; button.textContent = tag; button.dataset.tag = tag; tagDropdownContent.appendChild(button); }); }
    
    async function initializeApp() {
        const getEl = (id) => document.getElementById(id);
        const promptGrid = getEl('promptGrid');
        promptGrid.innerHTML = '<p class="info-text">Memuat prompt...</p>';
        try {
            console.log('[Langkah 2] Mengambil data dari Supabase...');
            const { data, error } = await supabaseClient.from('prompts').select('*');
            if (error) throw error;
            allPrompts = data;
            console.log(`[Langkah 3] Berhasil mengambil ${allPrompts.length} data dari Supabase.`);

            getEl('promptCount').textContent = allPrompts.length;
            createTagDropdown(getEl('tagDropdownContent'));
            setupEventListeners();
            updateDisplay(allPrompts);
        } catch (error) {
            console.error('Error fetching prompts:', error);
            promptGrid.innerHTML = '<p class="info-text">Gagal memuat. Coba refresh.</p>';
        }
    }

    function setupEventListeners() {
        const getEl = (id) => document.getElementById(id);
        const searchInput = getEl('searchInput'), promptGrid = getEl('promptGrid'), homeBtn = getEl('homeBtn'), resetFilterBtn = getEl('resetFilterBtn'), tagFilterBtn = getEl('tagFilterBtn'), tagDropdownContent = getEl('tagDropdownContent'), hamburger = getEl('hamburger'), backToTopBtn = getEl('backToTopBtn'), imageModal = getEl('imageModal'), modalImage = getEl('modalImage'), promptModal = getEl('promptModal'), promptModalCopyBtn = getEl('promptModalCopyBtn');
        const imageModalCloseBtn = imageModal.querySelector('.close-btn'), promptModalCloseBtn = promptModal.querySelector('.modal-prompt-close'), modalPrevBtn = getEl('modalPrevBtn'), modalNextBtn = getEl('modalNextBtn');

        console.log('[Langkah 4] Memasang semua event listener...');
        promptGrid.addEventListener('click', (e) => {
            console.log('[Langkah 5] Klik terdeteksi di dalam promptGrid!');
            const card = e.target.closest('.card');
            if (!card) return;
            if (window.innerWidth <= 768) {
                if (card.dataset.id) {
                    const promptId = parseInt(card.dataset.id, 10);
                    showPromptModal(promptId);
                }
            } else {
                if (e.target.classList.contains('copy-btn')) { const text = card.querySelector('.prompt-text').value; navigator.clipboard.writeText(text).then(() => { e.target.textContent = 'Tersalin!'; setTimeout(() => { e.target.textContent = 'Salin'; }, 2000); }); } else if (e.target.closest('.card-image-container')) { const img = card.querySelector('.img-output') || card.querySelector('.card-image'); if(img) { modalImage.src = img.src; imageModal.style.display = 'flex'; } }
            }
        });
        
        searchInput.addEventListener('input', () => { const searchTerm = searchInput.value.toLowerCase().trim(); const filteredData = allPrompts.filter(item => (item.title && item.title.toLowerCase().includes(searchTerm)) || (item.prompt && item.prompt.toLowerCase().includes(searchTerm)) || getTagsAsArray(item.tags).some(tag => tag.toLowerCase().includes(searchTerm))); currentPage = 1; updateDisplay(filteredData); });
        homeBtn.addEventListener('click', (e) => { e.preventDefault(); searchInput.value = ''; currentPage = 1; updateDisplay(allPrompts); });
        resetFilterBtn.addEventListener('click', () => { searchInput.value = ''; currentPage = 1; updateDisplay(allPrompts); });
        tagFilterBtn.addEventListener('click', () => tagDropdownContent.classList.toggle('show'));
        tagDropdownContent.addEventListener('click', (e) => { if (e.target.classList.contains('filter-btn')) { const tag = e.target.dataset.tag; currentPage = 1; updateDisplay(allPrompts.filter(item => getTagsAsArray(item.tags).includes(tag))); tagDropdownContent.classList.remove('show'); } });
        promptModalCloseBtn.addEventListener('click', closePromptModal);
        promptModal.addEventListener('click', (e) => { if (e.target === promptModal) closePromptModal(); });
        promptModalCopyBtn.addEventListener('click', (e) => { navigator.clipboard.writeText(getEl('promptModalText').value).then(() => { e.target.textContent = 'Tersalin!'; setTimeout(() => { e.target.textContent = 'Salin Prompt'; }, 2000); }); });
        modalPrevBtn.addEventListener('click', toggleModalImage);
        modalNextBtn.addEventListener('click', toggleModalImage);
        imageModalCloseBtn.addEventListener('click', () => imageModal.style.display = "none");
        imageModal.addEventListener('click', (e) => { if (e.target === imageModal) imageModal.style.display = "none"; });
        hamburger.addEventListener('click', () => { hamburger.classList.toggle('active'); getEl('navMenu').classList.toggle('active'); });
        window.addEventListener('scroll', () => { backToTopBtn.style.display = (window.scrollY > 300) ? "block" : "none"; });
        backToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: "smooth" }); });
        console.log('[Langkah 4 Selesai] Semua event listener sudah terpasang.');
    }

    initializeApp();
});