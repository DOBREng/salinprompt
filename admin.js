// Ganti dengan nama Cloud dan Upload Preset dari akun Cloudinary Anda
const CLOUDINARY_CLOUD_NAME = 'dtthsrahx';
const CLOUDINARY_UPLOAD_PRESET = 'salinprompt_unsigned';

const form = document.getElementById('uploadForm');
const statusMessage = document.getElementById('statusMessage');
const submitButton = form.querySelector('.submit-btn');

// Fungsi untuk meng-upload satu file ke Cloudinary
async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Gagal meng-upload gambar ke Cloudinary.');
    }

    const data = await response.json();
    return data.secure_url; // Mengembalikan URL gambar yang aman
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    statusMessage.textContent = 'Mengunggah gambar...';
    statusMessage.style.color = 'orange';
    submitButton.disabled = true;

    try {
        const imageOutputFile = document.getElementById('imageOutput').files[0];
        const imageInputField = document.getElementById('imageInput').files[0];

        if (!imageOutputFile) {
            throw new Error("Gambar Hasil (Output) wajib diisi.");
        }

        const imageUrl = await uploadFile(imageOutputFile);
        
        let imageInputUrl = null;
        if (imageInputField) {
            imageInputUrl = await uploadFile(imageInputField);
        }

        statusMessage.textContent = 'Menyimpan data...';
        
        const promptData = {
            title: form.title.value,
            prompt: form.prompt.value,
            category: form.category.value,
            tags: form.tags.value.split(',').map(tag => tag.trim()),
            image_url: imageUrl,
            image_input_url: imageInputUrl
        };
        
        const response = await fetch('/.netlify/functions/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(promptData),
        });

        const result = await response.json();

        if (response.ok) {
            statusMessage.textContent = 'Sukses! Prompt berhasil ditambahkan.';
            statusMessage.style.color = 'green';
            form.reset();
        } else {
            throw new Error(result.message || 'Terjadi kesalahan di server.');
        }

    } catch (error) {
        statusMessage.textContent = `Error: ${error.message}`;
        statusMessage.style.color = 'red';
        console.error('Detail Error:', error);
    } finally {
        submitButton.disabled = false;
    }
});