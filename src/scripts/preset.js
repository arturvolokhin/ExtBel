import odnoKarta from "../images/slider/OdnoKarta.png";
import raketa from "../images/slider/Raketa.png";
const projectsSlider = document.querySelector(".projects__slider");

export const fakeSearchData = [];

const slidersData = [
    {
        image: odnoKarta,
        title: "OdnoKarta",
        desc: `Extbel team created an app “Odnokarta”
            that keeps all discount cards quickly and easily in one application.`,
        link: "Read more",
    },

    {
        image: raketa,
        title: "Raketa.by",
        desc: `Extbel team created a website and mobile version
            of the network of offline stores and an online store of children's toys.`,
        link: "Read more",
    },

    {
        image: odnoKarta,
        title: "OdnoKarta",
        desc: `Extbel team created an app “Odnokarta”
            that keeps all discount cards quickly and easily in one application.`,
        link: "Read more",
    },

    {
        image: raketa,
        title: "Raketa.by",
        desc: `Extbel team created a website and mobile version
            of the network of offline stores and an online store of children's toys.`,
        link: "Read more",
    },

    {
        image: odnoKarta,
        title: "OdnoKarta",
        desc: `Extbel team created an app “Odnokarta”
            that keeps all discount cards quickly and easily in one application.`,
        link: "Read more",
    },

    {
        image: raketa,
        title: "Raketa.by",
        desc: `Extbel team created a website and mobile version
            of the network of offline stores and an online store of children's toys.`,
        link: "Read more",
    },
];

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

slidersData.forEach((slider) => {
    const { image, title, desc, link } = slider;
    projectsSlider.insertAdjacentHTML(
        "beforeend",
        paintSlider({ image, title, desc, link })
    );
});
