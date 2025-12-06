document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "images/index3.png", 
        "images/index1.png",
        "images/index2.png",
        "images/index4.png",
        "images/index5.png"
    ];

    let currentImageIndex = 0;

    const hero = document.querySelector(".hero");

    // Slides Container
    const slidesContainer = document.createElement("div");
    slidesContainer.classList.add("slides");

    // images
    images.forEach((image) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        slide.style.backgroundImage = `url(${image})`;
        slidesContainer.appendChild(slide);
    });

    hero.appendChild(slidesContainer);

    const indicatorsContainer = document.querySelector(".indicators");

    images.forEach((_, index) => {
        const indicator = document.createElement("div");
        indicator.dataset.index = index;
        if (index === 0) indicator.classList.add("active");
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll(".indicators div");

    const updateSlidePosition = () => {
        slidesContainer.style.transform = `translateX(-${currentImageIndex * 100}%)`;

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentImageIndex);
        });
    };

    // Interval for slidshow
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateSlidePosition();
    }, 5000);

    indicators.forEach(indicator => {
        indicator.addEventListener("click", () => {
            currentImageIndex = Number(indicator.dataset.index);
            updateSlidePosition();
        });
    });
    updateSlidePosition();
});


document.querySelectorAll('.floating-menu button').forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); 
        const href = button.getAttribute('data-href');
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});
