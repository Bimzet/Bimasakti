//Toogle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    //Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burgerclasslist.toggle("toggle-burger");
  });
};
navSlide();

//clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
