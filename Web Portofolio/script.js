function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");

    var activeTab = document.getElementById(tabName);
    var clickedTab = evt.currentTarget;

    // Cek apakah tab yang diklik sudah aktif
    var isActive = clickedTab.classList.contains("active");

    // Sembunyikan semua tab content dan hilangkan status "active"
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Kalau tab yang diklik tidak aktif, baru tampilkan
    if (!isActive) {
        activeTab.style.display = "block";
        clickedTab.classList.add("active");
    }
}

// Secara default, tab pertama dibuka
document.getElementsByClassName("tablinks")[0].click();
