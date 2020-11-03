var app = {
  init: function() {
    app.input = document.querySelector('#colors-input');
    app.errorContainer = document.querySelector('#colors-error');
    app.colorsList = document.querySelector('#colors-list');
    document
      .querySelector('#colors-form')
      .addEventListener('submit', app.handleFormSubmit);
  },
  handleFormSubmit: function(evt) {

    evt.preventDefault();
    app.errorContainer.textContent = '';

    if (app.isColorValid(app.input.value)) {
      var li = document.createElement('li');
      li.textContent = app.input.value;
      li.style.color = app.input.value;
      app.colorsList.appendChild(li);
      app.input.value = '';
    } else {
      app.errorContainer.textContent = "Ceci n'est pas une couleur. Une couleur doit commencer par un #, voici un site sur lequel vous pourrez trouver des couleurs : https://htmlcolorcodes.com/fr/";
      app.input.value = '';
    }
  },
  isColorValid: function(hexa) {
    var startWithHashtag = hexa.startsWith('#');
    var lengthOk = hexa.length == 4 || hexa.length == 7;
    var hexaWithoutHashtag = hexa.substr(1);
    var validHexValue = !isNaN('0x' + hexaWithoutHashtag);
    return startWithHashtag && lengthOk && validHexValue;
  }
};

document.addEventListener('DOMContentLoaded', app.init);
