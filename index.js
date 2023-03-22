console.log('Hát itt nincs semmi')

var currentURL = window.location.href;

window.onload = function() {
    var url = window.location.href;
    if (url.indexOf('nightdream-development.github.io') === -1) {
      document.getElementById("warning").style.display = "block";
      console.log('ELBASZTAD LOPÓS GECI')
      //Figyu lopjad amúgyis a felét a chatgpt csinálta hiszen drazox egy kibaszott retard js terén!
    }
    console.log(currentURL, 'Sikeres betöltés!')
  };
