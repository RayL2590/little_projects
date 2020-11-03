<?php require('fonction.php') ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>O'clock United</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div class="container">
        <form action="index.php" method="get" class="container__form">
            <h1>Dev Football Club</h1>
            <h2>Section enfants (de 6 à 14 ans)</h2>


            <?php if (isset($age) && isset($categorie)) : ?>
                <p>Âge de l'enfant : <?= $age ?></p>
                <h3>Catégorie : <?= $categorie ?></h3>
                <hr>
            <?php else : ?>
                <p>Veuillez indiquer l'âge de votre enfant.</p>
            <?php endif; ?>

            <label for="age">Quel est l'âge de votre enfant ?</label>
            
            <input type="number" min="1" max="99" name="age" id="age">
            
            <button>Calculer</button>
        </form>

        <div class="container__image">
            <img src="images/bart.png" />
        </div>
    </div>

</body>

</html>