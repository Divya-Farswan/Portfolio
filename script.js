const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
    navLinks.classList.remove(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  } else {
    navBar.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
    navLinks.classList.add(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  }
});

// ------- light mode and dark mode ---------

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

/*
so it will detect the dark mode from the system and local system
  when the dark mode is available in window system then it will add 'dark' class name in this html tag
  if the dark theme is not available in the system then it will remove the 'dark' class name
  so it will automatically detect the dark mode


   but we need the click feature also so when we click on the icon it will turn the website into the dark mode or light mode so add toggle function --> toggleTheme()
   and toogleTheme() we check one condition
    if the html file contains the class name dark in that case what will happen? --> it will set the dark in the locak storage
    else we will set theme equal to light

  not in html remove the dark - now the dark mode is removed and add the click feature in moon icon
    in moon icon image  button onClick=toggleTheme()
    so the click function is not working 
    so in toggleTheme() before if statment add toggle
      what will happen?
      when we call toggleTheme() 1st it will check if dark is available then it will remove that and if is not available then it will add that because we have added toggle
*/

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "light";
  } else {
    localStorage.theme = "dark";
  }
}
