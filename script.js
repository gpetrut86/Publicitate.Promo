$(document).ready(function() {
    const slider = $('.slider');
    const slides = $('.slide');
    const slideCount = slides.length;
    let currentIndex = 0;

    function updateSlider() {
        const translateX = -currentIndex * 100;
        slider.css('transform', `translateX(${translateX}%)`);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }

    // Automatic slide change (you can adjust the interval)
    setInterval(nextSlide, 5000);

    // Event listeners for manual navigation (optional)
    $('#next').click(nextSlide);
    $('#prev').click(prevSlide);
});


