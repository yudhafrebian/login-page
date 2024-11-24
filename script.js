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
const loginWelcome = document.getElementById("welcomeLogin");
const loginToggle = document.getElementById("loginToggle");

signToggle.addEventListener ("click", function() {
    signSlide.style.transform = "translateX(-90%)";
    welcomeWrapper.style.opacity = "0";
    welcomeWrapper.style.transitionDelay = "0s"
    signPage.style.opacity = "1";
    signPage.style.transitionDelay ="1s";
    loginPage.style.opacity = "0";
    loginPage.style.transitionDelay ="0s"
    loginWelcome.style.transform = "translateX(0)";
})

loginToggle.addEventListener("click", function () {
    signSlide.style.transform = "translateX(50%)";
    welcomeWrapper.style.opacity = "1";
    welcomeWrapper.style.transitionDelay = "1s"
    signPage.style.opacity = "0";
    signPage.style.transitionDelay ="0s"
    loginPage.style.opacity = "1";
    loginPage.style.transitionDelay = "1s"
    loginWelcome.style.transform = "translateX(-200%)";
    loginWelcome.style.transitionDelay = "0s"
})