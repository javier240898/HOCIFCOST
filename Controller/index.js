var slideIndex = 0;
    var slides = document.getElementsByClassName("carousel-item");
    function showSlide(n) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex += n;

        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }

        slides[slideIndex].style.display = "contents";
    }

    function autoSlide() {
        showSlide(1);
    }

    setInterval(autoSlide, 8000); // Cambiar de imagen cada 3 segundos



// Cambios de Estilo en el Header al hacer Scroll
window.onscroll = function () {
  var header = document.querySelector(".containerHeader");
  if (window.pageYOffset > 0) {
    header.classList.add("containerHeaderScroll");
  } else {
    header.classList.remove("containerHeaderScroll");
  }
};

