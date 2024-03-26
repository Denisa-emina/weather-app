
const scrollButton = document.querySelector('.scroll-button');

function isScrolledMoreThanMiddle() {
    const pageHeight = window.innerHeight;
    return window.scrollY > (pageHeight * 0.5);
}

window.addEventListener('scroll', () => {
    if (isScrolledMoreThanMiddle()) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

scrollButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });






