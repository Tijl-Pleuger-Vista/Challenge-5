import sqlite3
# make database file
connection = sqlite3.connect('database.db')

# open and execute sql schema
with open('schema.sql') as f:
    connection.executescript(f.read())

# cur = connection.cursor()
# insert test user account data
# cur.execute("INSERT INTO tb_user (email, username, password, key) VALUES (?, ?, ?, ?)",
#             ('alpha@test.nl', 'Alpha', 'Password1', 'abcd1234')
#             )

# cur.execute("INSERT INTO tb_user (email, username, password, key) VALUES (?, ?, ?, ?)",
#             ('beta@test.nl', 'Beta', 'Password2', 'wxyz0987')
#             )

connection.commit()
connection.close()
