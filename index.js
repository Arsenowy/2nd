window.onscroll = function() {
  myFunction();
};

var header = document.getElementById('img');

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('img-width');
  } else {
    header.classList.remove('img-width');
  }
}
