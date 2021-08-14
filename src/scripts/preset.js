import odnoKarta from "../images/slider/OdnoKarta.png";
import raketa from "../images/slider/Raketa.png";
import { paintSlider } from "./slider";
const projectsSlider = document.querySelector(".projects__slider");

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

slidersData.forEach((slider) => {
    const { image, title, desc, link } = slider;
    projectsSlider.insertAdjacentHTML(
        "beforeend",
        paintSlider({ image, title, desc, link })
    );
});
