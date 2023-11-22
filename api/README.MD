<!-- API routes and functions -->

<!-- Key Management -->

# home route
ip:port/

# check key ^ for user return username
ip:port/check/
{key}

# update user key route ^ return new key
ip:port/update/
{key}

<!-- Account Management -->

# account login route & return key
ip:port/auth/
{username=?&password=?}

# create user route ^ returns key
ip:port/create/
{email=?&username=?&password=?}

# delete user route ^ delete user from key
ip:port/delete/
{key}