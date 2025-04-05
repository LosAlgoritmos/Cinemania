const modal = document.getElementById('errorModal');
const btn = document.getElementsByClassName('btn-orange-black');
const span = document.querySelector('.closeBtn');

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
