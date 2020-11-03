// on va chercher le bouton
var btn = document.querySelector('#button');

// on va chercher l'élément lié au compteur
var cnt = document.querySelector('#counter');

// on initialise le compteur (sa valeur) de clics à 0
var clickCount = 0;

// on prépare une fonction qui va incrémenter le compteur
function countClicks() {
    // incrémentation du compteur
    clickCount++;
    // définir le nouveau contenu du compteur sur ma page
    cnt.textContent = clickCount;
}

// on ajoute un écouteur d'événement 'clic' sur mon bouton
// à chaque déclenchement de l'événement click sur le bouton, la fonction countClicks est éxecutée
btn.addEventListener('click', countClicks);