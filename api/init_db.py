import sqlite3
# make database file
connection = sqlite3.connect('database.db')

# open and execute sql schema
with open('schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()
# insert test user account data with password = test
cur.execute("INSERT INTO tb_user (email, username, password, score, coins, key) VALUES (?, ?, ?, ?, ?, ?)",
            ('test@test.nl', 'test', '89c9a2be576b6a824dbcd85b984f2ff8', 0, 0, 'test123')
            )

# add pokemon too test user account
cur.execute("INSERT INTO tb_poke (key, dispname, pokename, hp, att, deff, speed, specatt, specdef, amove, bmove, cmove, dmove) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            ('test123', 'toast', 'charizard', 100, 50, 80, 30, 200, 100, 'fire', 'punch', 'block', 'skip')
            )

connection.commit()
connection.close()
