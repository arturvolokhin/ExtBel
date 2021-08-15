import "/scripts/slick.min.js";

$(document).ready(() => {
    $(".projects__slider").slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 721,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


export const paintSlider = ({ image, title, desc, link }) => {
    return `<div class="projects__slider-item">
                <img class="projects__slider-image" src=${image} alt="Our project">
                <div class="projects__slider-text">
                    <h3 class="projects__slider-title">${title}</h3>
                    <p class="projects__slider-desc">${desc}</p>
                    <a href="#" class="projects__slider-link">${link}</a>
                </div>
            </div>`;
};
