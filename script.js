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

const signToggle = document.getElementById("signToggle");
const signSlide = document.getElementById("signWrapper");
const signPage = document.getElementById("signPage");
const loginPage = document.getElementById("loginPage");
const welcomeWrapper = document.getElementById("welcomeWrapper");


signToggle.addEventListener ("click", function() {
    signSlide.style.transform = "translateX(-90%)";
    welcomeWrapper.style.opacity = "0";
    signPage.style.opacity = "1";
    loginPage.style.opacity = "0";
})