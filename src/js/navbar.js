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
themeToggle.style.backgroundSize = 'contain';

themeToggle.addEventListener('click', () => {
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  themeToggle.style.backgroundImage = `url(./img/navbar/${newTheme}-switch.png)`;
  themeToggle.style.backgroundSize = 'contain';
});
