import"/sass/main.sass";import"/scripts/slider.js";import"/scripts/preset.js";import{fakeSearchData}from"./preset";const toggle=(e,t)=>{document.querySelector(`${e}`).classList.toggle(`${t}`)},toggleMenu=()=>{toggle(".menu","openMenu"),toggle(".blur","block")},toggleLogin=()=>{toggle(".login","visible"),toggle(".blur","block")},setSearchWarning=e=>{document.querySelector(".search__mobile-warning").innerHTML=e};document.addEventListener("click",(({target:e})=>{if(e.classList.contains("button__login")&&toggleLogin(),e.closest(".burger")&&(document.querySelector(".burger__icon").classList.toggle("active"),toggleMenu()),e.closest(".header__search-mobile")&&toggle(".search__mobile","openSearch"),e.classList.contains("search__mobile-submit")){const e=document.querySelector(".search__mobile-field").value.toLowerCase(),t=[];fakeSearchData.forEach((o=>{-1!==o.tagsName.toLowerCase().indexOf(e)&&t.push(o)})),0===Array.from(new Set(t)).length&&setSearchWarning("Nothing found at your request.\n            Try another value")}})),document.querySelector("#close__menu").addEventListener("click",(()=>{toggleMenu()})),document.querySelector("#close__login").addEventListener("click",(()=>{toggleLogin()}));