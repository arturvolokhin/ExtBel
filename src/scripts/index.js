import "/sass/main.sass";
import "/scripts/slider.js";
import "/scripts/preset.js";
import { fakeSearchData } from "./preset";

const toggle = (name, classes) => {
    document.querySelector(`${name}`).classList.toggle(`${classes}`);
};

window.onload = () => {
    //setTimeOut использован специально,
    //для имитации медленного интернет-соединения.
    const preloader = document.querySelector(".preloader");
    setTimeout(() => {
        preloader.classList.add("hide");
    }, 2000);
    setTimeout(() => {
        preloader.remove();
    }, 2500);
};

const toggleMenu = () => {
    toggle(".menu", "openMenu");
    toggle(".blur", "block");
};

const toggleLogin = () => {
    toggle(".login", "visible");
    toggle(".blur", "block");
};

const setSearchWarning = (value) => {
    document.querySelector(".search__mobile-warning").innerHTML = value;
};

document.addEventListener("click", ({ target }) => {
    if (target.classList.contains("button__login")) {
        toggleLogin();
    }

    if (target.closest(".burger")) {
        toggleMenu();
    }

    if (target.closest(".header__search-mobile")) {
        toggle(".search__mobile", "openSearch");
    }

    if (target.classList.contains("search__mobile-submit")) {
        const searchField = document.querySelector(".search__mobile-field");
        const value = searchField.value.toLowerCase();
        const result = [];
        //В базе данных получаем строки в виде тегов для поиска
        //и сравниваем с полученным значением.
        fakeSearchData.forEach((item) => {
            const find = item.tagsName.toLowerCase().indexOf(value);
            find !== -1 && result.push(item);
        });
        //Страхуемся от повторных значений и радуемся.
        const foundResults = Array.from(new Set(result));

        foundResults.length === 0 &&
            setSearchWarning(`Nothing found at your request.
            Try another value`);

        searchField.value = "";
    }
});

document.querySelector("#close__menu").addEventListener("click", () => {
    toggleMenu();
});

document.querySelector("#close__login").addEventListener("click", () => {
    toggleLogin();
});
