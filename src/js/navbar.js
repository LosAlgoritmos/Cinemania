// @murselsen
let theme;
const checkTheme = () => {
  let result = localStorage.getItem('theme');
  if (result === null) {
    localStorage.setItem('theme', 'dark');
    result = 'dark';
    return result;
  }
  return result;
};
theme = checkTheme();

// #nav__theme-toggle
const themeToggle = document.querySelector('#nav__theme-toggle');
themeToggle.style.backgroundImage = `url(./img/navbar/${theme}-switch.png)`;
document.querySelector('html').setAttribute('data-theme', theme);

themeToggle.addEventListener('click', event => {
  let checkThemeResult = checkTheme();
  let newTheme = checkThemeResult === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  themeToggle.style.backgroundImage = `url(./img/navbar/${newTheme}-switch.png)`;
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


document.querySelector("#nav__menu-toggle").addEventListener("click",e => {
   
  console.log(e.target);
  const nav = document.querySelector(".nav");
  const nav__menu = document.querySelector(".nav__menu");
  nav__menu.classList.toggle("active");


  if (nav__menu.classList.contains("active")) {
    nav.style.paddingInlineStart = "40px";
  } else {
    nav.style.paddingInlineStart = "20px";

  }


});