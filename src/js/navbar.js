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
document.querySelectorAll("")
