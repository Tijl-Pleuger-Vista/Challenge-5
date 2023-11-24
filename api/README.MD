<!-- API routes and functions -->

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
