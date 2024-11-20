function changeLanguage(language, languageName, flagURL) {
    // Ubah gambar bendera di tombol
    const flag = document.getElementById("selectedFlag");
    const button = document.getElementById("languageButton");

    flag.src = flagURL;
    flag.alt = languageName;
    button.innerHTML = `<img id="selectedFlag" src="${flagURL}" alt="${languageName}"> ${languageName}`;

    // Anda bisa menambahkan aksi lain di sini, seperti mengubah bahasa halaman
    console.log(`Bahasa yang dipilih: ${language}`);
}