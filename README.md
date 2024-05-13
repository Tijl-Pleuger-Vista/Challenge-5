# Create a portfolio website
*Challenge 4*<br>

Create a portfolio website that contains your work made at Vista
![ICON](icon.png)<br>
[Website](https://tijl-pleuger-vista.github.io/website.github.io/public/test/)<br>
[Padlet](https://padlet.com/ictlyceum/sd-challenge-pokedex-voor-urbaneats-spirits-fzq9c288y3lfb4we)<br>

---
### Functions
- Password protected users (encrypted)
- Database so can access their own pokémon online (Local DB)
- See other users and their pokemon near your location (Location API)
- Challenge users with your own pokémon
- A way to earn Pokémon by playing a game
- Scan a card with an NFC to gain loot boxes (After a purchase at the store you earn loot boxes that contain a random item or pokemon. This may include a small chance for shiny Pokémon)
- Read, write and edit on the database using an API + key

### Notes
- The game will be a turn-based RPG game played inside the browser
- Users recieve a lootbox at a purchase at the store
- Loot boxes contain a random pokemon after opening
- Loot boxes look like pokeballs
- Use crud to interact with mysql
- Use the pokeApi to gain info so we don't have to update our database
[Poké API](https://pokeapi.co/api/v2/pokemon/dipplin)<br>

- DB_User $name + $password + $UUID + $Key
- The key is used to edit user information inside the database
- UUID is used to read Personal-Pokemon-database (List of all pokemon the user has)

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

in the store -> buy a random pokemon

search box
- all types
- search by name/id
- by gen    
