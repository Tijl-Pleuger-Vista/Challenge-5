SD | Challenge Pokedex voor UrbanEats & Spirits

Challenge: https://padlet.com/ictlyceum/sd-challenge-pokedex-voor-urbaneats-spirits-fzq9c288y3lfb4we

What is the goal: Create a PokeDex

What is a pokedex?
an electronic device designed to catalogue and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series


> Functions:
- Database protected by password so the user can access their own pokemon online
- See other users + their pokemon near your location
- Challenge users with your own pokemon
- A simple game where you can earn pokemon and fight other users
- Scan a card with an NFC to gain loot boxes (After a purchase you get loot boxes that contain a random item or pokemon) => small chance for shiny
- Read, edit and write on the database using an API + key

> Components
- Login/out
- Database
- NFC
- API

> Notes
The game -> old school pokemon turn based fighting
Customer gets card linked to an account
When a customer has ordered something they can give their card to gain loot boxes sent to their account
Loot boxes give a random pokemon after opening
Loot boxes look like pokeballs
Use crud to interact with mysql (create new pokemons. Give lootboxes to accounts)
Can use the pokeApi to gain info so we don't have to update our database : https://pokeapi.co/api/v2/pokemon/dipplin / https://pokeapi.co/

User-database name + password + UUID + Key
Key is used to edit database information (For example your Display name, pokemon nicknames or such)
UUID is used to read Personal-Pokemon-database (List of all pokemon the user has)

When a user clicks on a pokemon they get taken to an "extra info" screen where information will be displayed about the clicked on pokemon using the PokeAPI

A user can set up a team they can use to battle other users or story mode
A user can use items to level up pokemon or give them buffs during battle

> Users
- Jerom
- Tijl
- Jerom
- Jaleel



Link tree:
drawsql = https://drawsql.app/teams/vista-14/diagrams/pokedex
Challenge = https://padlet.com/ictlyceum/sd-challenge-pokedex-voor-urbaneats-spirits-fzq9c288y3lfb4we
Pokemon API = https://pokeapi.co/api/v2/pokemon/dipplin / https://pokeapi.co/

TEMP
index = first page the user will see where they can see what the app is about, a signup-login button and pictures about the pokedex+desc

home = when the user is loged in [session] + key

sign-in = the log-in + sign-up page


dump:
<div class="login-container">
    <h2>Account Portal</h2>
    <form name="myform" method="post" action="http://localhost:5000/signup" onsubmit="return validateform()">
    <!--  http://www.javatpoint.com/javascriptpages/valid.jsp -->
    Username: <input class="textbox" type="text" name="name"><br>
    Password: <input class="textbox" type="password" name="password"><br>
    <div><input class="validlogin" type="submit" value="Login"></div>

    <!-- <div>
        <button type="submit"><a href="app/signup.html">Don't have an account? sign up here.</a></button>
    </div> -->
    <div><button onclick="signup()">Don't have an account? sign up here</button></div>
</div>

//

<!-- <button onclick="signup()">Click me</button>
<button onclick="login()">Click me</button> -->

<!-- <div class="form-group">
<label name="username" for="username">Username:</label>
<input type="text" id="username" name="username" required>
</div>
<div class="form-group">
<label for="password">Password:</label>
<input type="password" id="password" name="password" required>
</div>
<div class="flex-container">
<div class="form-group">
<button type="submit">Login</button></div>
<div class="form-group">
<button type="submit"><a href="../public/signup.html">Sign Up</a></button></div>
</div>
</form> -->
