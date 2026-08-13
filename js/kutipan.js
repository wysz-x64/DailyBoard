const kutipanElement = document.getElementById("kutipan-harian");
const statusKutipan = document.getElementById("status-kutipan");

async function ambilKutipan() {
  try {
    // FLOW 1: Beri feedback bahwa request sedang berlangsung.
    statusKutipan.textContent = "Mengambil kutipan...";

    // FLOW 2: Kirim request asynchronous ke endpoint API.
    const response = await fetch(
      "https://dummyjson.com/quotes/random"
    );

    // FLOW 3: Hentikan alur normal jika HTTP response gagal.
    if (!response.ok) {
      throw new Error("Gagal mengambil kutipan.");
    }

    // FLOW 4: Ubah response JSON menjadi object JavaScript.
    const data = await response.json();

    // FLOW 5: Gunakan property yang sesuai dengan struktur response API.
    kutipanElement.textContent =
      `"${data.quote}" — ${data.author}`;

    statusKutipan.textContent = "";
  } catch (error) {
    // FLOW ERROR: tampilkan fallback agar kegagalan API tidak merusak UI.
    kutipanElement.textContent = "Kutipan tidak dapat dimuat.";
    statusKutipan.textContent = error.message;
  }
}

export { ambilKutipan };
