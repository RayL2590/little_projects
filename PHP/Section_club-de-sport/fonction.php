<?php

if (isset($_GET['age'])) {
    // on récupère l'information depuis $_GET et on transtype pour avoir un entier
    $age = (int) $_GET['age'];
} else {
    $age = null;
}


function calculCategorie($paramAge)
{
    if ($paramAge < 6) {
        $resultatCategorie = "Trop jeune";
    } elseif ($paramAge >= 6 && $paramAge <= 7) {
        $resultatCategorie = "Poussin";
    } elseif ($paramAge >= 8 && $paramAge <= 9) {
        $resultatCategorie = "Pupille";
    } elseif ($paramAge >= 10 && $paramAge <= 11) {
        $resultatCategorie = "Minime";
    } elseif ($paramAge >= 12 && $paramAge < 15) {
        $resultatCategorie = "Cadet";
    } else {
        $resultatCategorie = "Trop âgé";
    }

    return $resultatCategorie;
}

if (isset($age)) {
    $categorie = calculCategorie($age);
}
