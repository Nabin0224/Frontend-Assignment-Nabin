document.addEventListener("DOMContentLoaded",() =>  {
const toggleBtn = document.querySelector(".nav__toggle");
const closeSideBar = document.querySelector(".cross-icon");
const navMenu = document.querySelector(".nav__menu")

toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show")
})
closeSideBar.addEventListener("click", ()=> {
  navMenu.classList.toggle("show")
})

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    
   
    item.classList.toggle("active");
  });
});
}
)

