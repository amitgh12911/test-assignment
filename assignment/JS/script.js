let fieldElements = document.querySelectorAll(".fields");
let onlyNumubers = document.querySelectorAll(".only-number");
let hamburgerElements = document.querySelectorAll(".hamburger");
Array.from(fieldElements).forEach((e, i) => {
    e.addEventListener("click", function () {
        if (!e.nextElementSibling.classList.contains("expand")) {
            e.nextElementSibling.classList.add("expand");
            e.style.borderBottom = "2px solid lightblue";
            if (i != fieldElements.length - 1) {
                e.nextElementSibling.nextElementSibling.style.borderTop = "2px solid lightblue";
            }
        } else {
            e.nextElementSibling.classList.remove("expand");
            e.removeAttribute("style");
            if (i != fieldElements.length - 1) {
                e.nextElementSibling.nextElementSibling.removeAttribute("style");
            }
        }
    });
});

Array.from(onlyNumubers).forEach(e => {
    e.addEventListener("input", function () {
        console.log(e.value.substr(0, e.value.length - 1));
        if (isNaN(e.value[ e.value.length - 1 ])) {
            e.value = e.value.substr(0, e.value.length - 1);
        }
    });
});

$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.customPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [ 300 ]);
    });
});