# setup sql
import sqlite3
conn = sqlite3.connect('sql.db')
cursor = conn.cursor()

# create table with columns
# cursor.execute("""CREATE TABLE tb_user
#                 (username TEXT, password TEXT, key TEXT)
#                """)

# insert a record into the *table in the *database
cursor.execute("""INSERT INTO tb_user
                  VALUES ('test', '89c9a2be576b6a824dbcd85b984f2ff8', 'laop0329')"""
               )

# save data
conn.commit()

# insert multiple records using the more secure "?" method
# books = [('Python Interviews', 'Mike Driscoll',
#           '2/1/2018', 'Packt Publishing', 'softcover'),
#          ('Automate the Boring Stuff with Python',
#           'Al Sweigart', '', 'No Starch Press', 'PDF'),
#          ('The Well-Grounded Python Developer',
#           'Doug Farrell', '2020', 'Manning', 'Kindle')]
# cursor.executemany("INSERT INTO books VALUES (?,?,?,?,?)", books)
# conn.commit()