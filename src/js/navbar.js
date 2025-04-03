// @murselsen
console.log('Navbar script loaded.');
const theme = localStorage.getItem('theme') || 'dark';

// #nav__theme-toggle
const themeToggle = document.querySelector('#nav__theme-toggle');

themeToggle.style.backgroundImage = `url(../img/navbar/${theme}-switch.png)`;
themeToggle.style.backgroundSize = 'contain';

themeToggle.addEventListener('click', () => {
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  themeToggle.style.backgroundImage = `url(../img/navbar/${newTheme}-switch.png)`;
  themeToggle.style.backgroundSize = 'contain';
  document.body.classList.toggle('dark-theme', newTheme === 'dark');
  document.body.classList.toggle('light-theme', newTheme === 'light');
}
