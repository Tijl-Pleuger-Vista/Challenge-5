<!-- API routes and functions -->
param = url parameters in url of request ?key=value
form = body.form request key:value

<!-- Key Management -->

# home route
ip:port/
(NaN)

# check key ^ for user return username
ip:port/check/
param(key)

# update user key route ^ return new key
ip:port/update/
param(key)

<!-- Account Management -->

# account login route & return key
ip:port/auth/
form{username=?&password=?}

# create user route ^ returns key
ip:port/create/
form{email=?&username=?&password=?}

# delete user route ^ delete user from key
ip:port/delete/
param(key)

# add pokemon ^ add pokemon too user
ip:port/addpokemon/
param(key, dispname, pokename, hp, att, deff, speed, specatt, specdef, amove, bmove, cmove, dmove)

# get pokemon from user ^ return for each row id, pokemon display name and pokemon name
ip:port/getpokemon/
param(key)



# get coins from user ^ return current coins user
ip:port/getcoins/
param(key)

# update coins for user ^ return new coins user
ip:port/updatecoins/
param(key, curcoins, newcoins)
