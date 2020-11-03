<!-- 
Pour generer un code hexadecimal je vais avoir besoin des valeur suivantes:  0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F

Pour generer les nuances de gris sur 3 caracteres je vais attendre des codes couleurs comme ceci : 
  Noir : #000
  puis #111, #222, #333 ...
  Blanc #FFF

un code couleur peux se lire comme ceci avec mes données : #valeurvaleurvaleur
-->
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Color generator</title>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
  <div id="root">
    <h2>Nuances de gris</h2>



    <?php


    $colors = [
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'
    ];

    //count permet de compter le nombre d'element dans mon tableau
    //var_dump(count($colors));
    //je dois generer des rectangles de couleur 
    // si je regarde le rendu attendu, je constate que je vais devoir afficher autant de rectangle que de couleurs
    for ($i = 0; $i < count($colors); $i++) {

      $hexaValue = $colors[$i] . $colors[$i] . $colors[$i];
      $width = 100 / count($colors);

      echo '<div style="width:calc(' . $width . '% - 4px); background-color:#' . $hexaValue . ';" title="" data-color="" class="box"></div>';
    }


    ?>
    <div class="clear"></div>

    <h2>Toutes les couleurs</h2>

    <?php

    // ici je vais avoir besoin d'incrementer 3 valeurs separement
    //$r va etre l'index de ma boucle red
    //$g va etre l'index de ma boucle green
    //$b va etre l'index de ma boucle blue
    // #$r.$g.$b

    $nbColors = count($colors);

    for ($r = 0; $r < $nbColors; $r++) {

      for ($g = 0; $g < $nbColors; $g++) {

        for ($b = 0; $b < $nbColors; $b++) {
          $redValue = $colors[$r];
          $greenValue = $colors[$g];
          $blueValue = $colors[$b];

          $hexaValue = $redValue . $greenValue . $blueValue;
          $width = 100 / count($colors);

          echo '<div style="width:calc(' . $width . '% - 4px); background-color:#' . $hexaValue . ';" title="" data-color="" class="box"></div>';
        }
      }
    }

    ?>
    <div class="clear"></div>-->
  </div>
</body>

</html>