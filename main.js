let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.product-slider');
    const totalSlides = document.querySelectorAll('.product-item').length;
    const maxSlides = totalSlides - 5; // Menampilkan 5 produk per slide

    if (direction === 'next') {
        if (currentSlide < maxSlides) {
            currentSlide++;
        } else {
            currentSlide = 0; // Kembali ke slide pertama
        }
    } else {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = maxSlides; // Kembali ke slide terakhir
        }
    }

    slides.style.transform = `translateX(-${currentSlide * 20}%)`;
}
