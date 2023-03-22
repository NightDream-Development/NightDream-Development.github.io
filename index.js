console.log('Hát itt nincs semmi')

var currentURL = window.location.href;

window.onload = function() {
    var url = window.location.href;
    if (url.indexOf('nightdream-development.github.io') === -1) {
      document.getElementById("warning").style.display = "block";
      console.log('ELBASZTAD LOPÓS GECI')
    }
    console.log(currentURL, 'Sikeres betöltés!')
  };
