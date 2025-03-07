let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};

function updateDate() {
    const dateDisplay = document.getElementById('date-display');
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = today.toLocaleDateString('id-ID', options);
}
var timer = null;

function stop() {
    clearTimeout(timer); // Menghentikan timer
}

function start() {
    var time = new Date(); // Mendapatkan waktu saat ini
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    // Format angka agar memiliki dua digit
    minutes = (minutes <10?"0":"") + minutes;
    seconds = (seconds <10?"0":"") + seconds;

    // Format waktu sebagai jam:menit:detik
    var clock =hours + ":" + minutes + ":" + seconds;

    // Menampilkan waktu di elemen input
    document.forms[0].display.value = clock;

    // Memanggil kembali fungsi start setelah 1 detik
    timer = setTimeout(start, 1000);
}

// Memulai jam saat halaman dimuat
start();
// Panggil fungsi updateDate saat halaman dimuat
updateDate();


