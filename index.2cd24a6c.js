const e=document.querySelector(".page__overlay"),t=document.querySelector(".museum__icon"),n=document.querySelector(".header__icon"),o=document.querySelector(".menu__icon"),c=document.querySelectorAll(".menu__link"),l=document.querySelector("body");function r(){e.style.opacity=1,e.style.pointerEvents="auto",l.style.height="100%",l.style.overflowY="hidden"}function i(){e.style.opacity=0,e.style.pointerEvents="none",l.style.height="unset",l.style.overflowY="auto"}t.addEventListener("click",r),n.addEventListener("click",r),o.addEventListener("click",i),c.forEach(e=>{e.addEventListener("click",i)});
//# sourceMappingURL=index.2cd24a6c.js.map
