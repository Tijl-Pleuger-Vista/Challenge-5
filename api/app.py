import hashlib
import uuid
import sqlite3
from flask import Flask, request, redirect

app = Flask(__name__)
database = 'database.db'
salt = "37le" #appending salt for md5 hash

def get_db(): #intialize connection with db
    db = getattr(app, '_database', None)
    if db is None:
        db = app._database = sqlite3.connect(database, check_same_thread=False)
        db.row_factory = sqlite3.Row
    return db

# def user_exist(username, password, one=False): #check if row exists
#     cur = get_db().execute('SELECT id FROM tb_user WHERE username = ? AND password = ?', (username, password))
#     rv = cur.fetchall()
#     cur.close()
#     if rv == None:
#         return False
#     else:
#         return True
#     #return (rv[0] if rv else None) if one else rv

def get_xid():
    xid = uuid.uuid4() #random uuid for user key
    xid = str(xid)
    return xid

#close db connection after every request
# @app.teardown_appcontext
# def close_connection(exception):
#     db = getattr(app, '_database', None)
#     if db is not None:
#         db.close()

#send sql query & fetch result
def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv

@app.route('/') #home route
def index():
    return 'success'

# check key ^ for user
@app.route('/check/', methods=('POST',))
def check():
    if request.method == 'POST':
        key = request.form['key']
        
        if not key:
            return('Key is required!')
        else:
            for user in query_db('SELECT username FROM tb_user WHERE key = ?', (key,)):
                result = (user['username'])
            return result

# update user key route
@app.route('/update/', methods=('POST',))
def update():
    if request.method == 'POST':
        key = request.form['key']
        newkey = get_xid()

        if not key:
            return('Key is required!')
        else:
            conn = get_db()
            conn.execute('UPDATE tb_user SET "key"= ? WHERE key= ?;',(newkey, key))
            conn.commit()
            # conn.close()
            return newkey

# account login route & return key
@app.route('/auth/', methods=('POST','GET'))
def auth():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password'] + salt
        password = hashlib.md5(password.encode()).hexdigest()
        
        if not username:
            return('Username is required!')
        elif not password:
            return('Password is required!')
        else:
            for user in query_db('SELECT key FROM tb_user WHERE username = ? AND password = ?', (username, password)):
                result = (user['key'])
            return redirect("localhost:5500/app/main.html")

# create user route ^ returns key
@app.route('/create/', methods=('POST',))
def create():
    if request.method == 'POST':
        email = request.form['email']
        username = request.form['username']
        password = request.form['password'] + salt
        password = hashlib.md5(password.encode()).hexdigest()
        key = get_xid()

        if not username:
            return('Username is required!')
        elif not password:
            return('Password is required!')
        else:
            conn = get_db()
            conn.execute('INSERT INTO tb_user (email, username, password, key) VALUES (?, ?, ?, ?)',
                         (email, username, password, key))
            conn.commit()
            # conn.close()
            return key

# delete user route ^ delete user from key
@app.route('/delete/', methods=('POST',))
def delete():
    if request.method == 'POST':
        key = request.form['key']
        
        if not key:
            return('Key is required!')
        else:
            conn = get_db()
            conn.execute('DELETE FROM tb_user WHERE key = ?', (key,))
            conn.commit()
            return "success account deleted"