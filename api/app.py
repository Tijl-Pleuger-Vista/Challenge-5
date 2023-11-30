import hashlib
import uuid
import sqlite3
from flask import Flask, request, redirect, make_response, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
hostname = "localhost"
port = 5000
webc = 5500
database = 'database.db' #database file
salt = "37le" #appending salt for md5 hash

cors = CORS(app, resources={ #CORS policy for all routes
    r"/*/": {
        "Access-Control-Allow-Origin": "127.0.0.1:5000",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "true"
        }
    })

def get_db(): #intialize connection with db
    db = getattr(app, '_database', None)
    if db is None:
        db = app._database = sqlite3.connect(database, check_same_thread=False)
        db.row_factory = sqlite3.Row
    return db

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

def get_xid():
    xid = uuid.uuid4() #random uuid for user key
    xid = str(xid)
    return xid

@app.route('/') #home route
def index():
    return 'success'

# check key ^ for user
@app.route('/check/', methods=('POST',))
def check():
    if request.method == 'POST':
        key = request.args.get('key')
        if not key:
            return('Key is required!')
        else:
            for user in query_db('SELECT username FROM tb_user WHERE key = ?', (key,)):
                result = (user['username'])
            if result is None:
                return False
            else:
                return jsonify(result)

# update user key route
@app.route('/update/', methods=('POST',))
def update():
    if request.method == 'POST':
        key = request.args.get('key')
        newkey = get_xid()
        if not key:
            return('Key is required!')
        else:
            conn = get_db()
            conn.execute('UPDATE tb_user SET "key"= ? WHERE key= ?;',(newkey, key))
            conn.execute('UPDATE tb_poke SET "key"= ? WHERE key= ?;',(newkey, key))
            conn.commit()
            return jsonify(newkey)

# account login route & return key
@app.route('/auth/', methods=('POST',))
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
                if result is None:
                    return False
            else:
                resp = make_response('<meta http-equiv="refresh" content="0; url=http://127.0.0.1:5500/app/main.html" />')
                resp.set_cookie('user', result, domain=hostname, samesite=None, max_age=3600*24)
                return resp

# create user route ^ returns key
@app.route('/create/', methods=('POST',))
def create():
    if request.method == 'POST':
        email = request.form['email']
        username = request.form['username']
        password = request.form['password'] + salt
        password = hashlib.md5(password.encode()).hexdigest()
        key = get_xid()
        score = 0
        coins = 0
        if not email and username:
            return('Email/Username is required!')
        elif not password:
            return('Password is required!')
        else:
            conn = get_db()
            conn.execute('INSERT INTO tb_user (email, username, password, score, coins, key) VALUES (?, ?, ?, ?, ?, ?)',
                         (email, username, password, score, coins, key))
            conn.commit()
            resp = make_response('<meta http-equiv="refresh" content="0; url=http://127.0.0.1:5500/app/main.html" />')
            resp.set_cookie('user', key, domain=hostname, samesite=None, max_age=3600*24)
            return resp

# delete user route ^ delete user from key and tb_poke entries
@app.route('/delete/', methods=('POST',))
def delete():
    if request.method == 'POST':
        key = request.args.get('key')
        if not key:
            return('Key is required!')
        else:
            conn = get_db()
            conn.execute('DELETE FROM tb_user WHERE key = ?', (key,))
            conn.execute('DELETE FROM tb_poke WHERE key = ?', (key,))
            conn.commit()
            return "delete action executed on key"

# add pokemon too user route ^ returns status
@app.route('/addpokemon/', methods=('POST',))
def add():
    if request.method == 'POST':
        key = request.args.get('key')
        dispname = request.args.get('dispname')
        pokename = request.args.get('pokename')
        hp = request.args.get('hp')
        att = request.args.get('att')
        deff = request.args.get('deff')
        speed = request.args.get('speed')
        specatt = request.args.get('specatt')
        specdef = request.args.get('specdef')
        amove = request.args.get('amove')
        bmove = request.args.get('bmove')
        cmove = request.args.get('cmove')
        dmove = request.args.get('dmove')
        if not key and pokename:
            return False
        elif not dispname:
            dispname = pokename
        else:
            conn = get_db()
            conn.execute('INSERT INTO tb_poke (key, dispname, pokename, hp, att, deff, speed, specatt, specdef, amove, bmove, cmove, dmove) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                         (key, dispname, pokename, hp, att, deff, speed, specatt, specdef, amove, bmove, cmove, dmove))
            conn.commit()
            return jsonify(200)

# get all pokemon ^ for user return id,pokemonname,displayname for each
@app.route('/getpokemon/', methods=('POST',))
def get():
    if request.method == 'POST':
        key = request.args.get('key')
        if not key:
            return('Key is required!')
        else:
            for user in query_db('SELECT * FROM tb_poke WHERE key = ?', (key,)):
                result = (
                    user['id'],
                    user['pokename'],
                    user['dispname']
                    )
            if result is None:
                return False
            else:
                return jsonify(result)

