// @murselsen
let theme;
const checkTheme = () => {
  let result = localStorage.getItem('theme');
  if (result === null) {
    localStorage.setItem('theme', 'dark');
    result = 'dark';
    document.querySelector('#nav__theme-toggle').classList.add(result);

    return result;
  }
  document.querySelector('#nav__theme-toggle').classList.add(result);
  return result;
};
theme = checkTheme();

// #nav__theme-toggle
const themeToggle = document.querySelector('#nav__theme-toggle');
themeToggle.classList.add(theme)
document.querySelector('html').setAttribute('data-theme', theme);

themeToggle.addEventListener('click', event => {
  
  let checkThemeResult = checkTheme();
  let newTheme = checkThemeResult === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  themeToggle.classList.remove(checkThemeResult);
  themeToggle.classList.add(newTheme);
  document.querySelector('html').setAttribute('data-theme', newTheme);
});

const pageURL = document.URL.split('/').pop();
document.querySelectorAll('.nav__menu-link').forEach(link => {
  if (link.getAttribute('href') === pageURL) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

const navMenuToggle = document.querySelector('#nav__menu-toggle');
navMenuToggle.addEventListener("click", e => {
  

  const nav = document.querySelector(".nav");
  const nav__menu = document.querySelector(".nav__menu");
  nav__menu.classList.toggle("active");


  if (nav__menu.classList.contains("active")) {
    nav.style.paddingInlineStart = "40px";
    navMenuToggle.textContent = "CLOSE";
  } else {
    nav.style.paddingInlineStart = "20px";
    navMenuToggle.textContent = "MENU";
  }
});