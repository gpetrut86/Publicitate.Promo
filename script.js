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


document.addEventListener('DOMContentLoaded', function () {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal
    var modalImg = document.getElementById('img01');

    // Use event delegation to handle click on any image inside the gallery container
    document.getElementById('gallerySectionId').addEventListener('click', function (e) {
        if (e.target.tagName === 'IMG') {
            modal.style.display = "block";
            modalImg.src = e.target.src;
        }
    });

    // Get the <span> element that closes the modal
    modal.addEventListener('click', function () {
        modal.style.display = "none";
    });
});
