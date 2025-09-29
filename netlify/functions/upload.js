const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event, context) => {
  // Inisialisasi Supabase dengan kunci dari environment variables
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

  try {
    // Karena frontend mengirim JSON, kita cukup parse body-nya
    const data = JSON.parse(event.body);

    // Langsung simpan data yang sudah jadi ke tabel 'prompts'
    const { error } = await supabase
      .from('prompts')
      .insert([data]);

    if (error) {
      // Jika ada error dari Supabase, lemparkan
      throw error;
    }

    // Kirim balasan sukses
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Prompt berhasil disimpan!" }),
    };

  } catch (error) {
    // Tangani semua jenis error
    console.error('Error di dalam function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Terjadi kesalahan: ${error.message}` }),
    };
  }
};