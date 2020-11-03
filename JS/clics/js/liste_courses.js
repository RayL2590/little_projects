var app = {
  init: function() {
    // je cible mon formulaire
    app.form = document.querySelector('#shop-item-form');
    // je cible mon input
    app.input = app.form.querySelector('#shop-item-input');
    // je cible ma liste de courses
    app.ol = document.querySelector('#shop-items');

    app.form.addEventListener('submit', app.addToShopList);
  },
  addToShopList: function(event) {
    // preventDefault est une méthode de l'objet d'événement
    // qui empêche le comportement par défaut
    // ici, on bloque l'envoi du formulaire et donc le "rafraichissement" de la page
    event.preventDefault();
    // on récupère la valeur de l'input
    var item = app.input.value;
    // on créé un élément de liste qui contient cette valeur
    var li = document.createElement('li');
    li.textContent = item;
    // puis on l'ajoute à la liste
    app.ol.appendChild(li);
    // on efface la value de l'input
    app.input.value = '';
  }
};

document.addEventListener('DOMContentLoaded', app.init);