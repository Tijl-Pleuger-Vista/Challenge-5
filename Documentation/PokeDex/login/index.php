<?php

session_start();

if (isset($_SESSION["user_id"])) {
    
    $mysqli = require __DIR__ . "/database.php";
    
    $sql = "SELECT * FROM user
            WHERE id = {$_SESSION["user_id"]}";
            
    $result = $mysqli->query($sql);
    
    $user = $result->fetch_assoc();
}

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="PokeDex.css">
    <link rel="stylesheet" href="../pokedex.css">
        <script src="../pokedex.js"></script>

</head>
<body>
    
    <h1>Pokedex</h1>
    
    <?php if (isset($user)): ?>
        
        <p>Hello <?= htmlspecialchars($user["name"]) ?></p>
        
        <p><a href="logout.php">Log out</a></p>
        
    <?php else: ?>
        
        <p><a href="login.php">Log in</a> or <a href="signup.html">sign up</a></p>
        
    <?php endif; ?>

    <div id="content-box">
            <!-- Left Side, display pokemon info -->
            <div id="pokemon-info">
                <img id="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
                <div id="pokemon-types">
                    <span class="type-box grass">GRASS</span><span class="type-box poison">POISON</span>
                </div>
                <div id="pokemon-description"></div>
            </div>
            <!-- Right side, display pokemon list -->
            <div id="pokemon-list">
            </div>
        </div>
    
</body>
</html>
    
    
    
    
    
    
    
    
    
    
    