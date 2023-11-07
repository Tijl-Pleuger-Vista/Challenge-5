#imports
from flask import Flask, redirect, url_for, request, render_template
from urllib.parse import urlparse, parse_qs
import hashlib
import sqlite3
# conn = sqlite3.connect('sql.db', check_same_thread=False)
# cursor = conn.cursor()
# from functions_db import select_all_records_by_username

def get_cursor():
    conn = sqlite3.connect("sql.db", check_same_thread=False)
    return conn.cursor()

cursor = get_cursor()

# def select_all_records_by_username(cursor, usr):
#     sql = "SELECT * FROM tb_user WHERE username=?"
#     cursor.execute(sql, [usr])
#     print(cursor.fetchall())  # or use fetchone()
#     print("\nHere is a listing of the rows in the table\n")
#     for row in cursor.execute("SELECT rowid, * FROM tb_user ORDER BY username"):
#         return row
#     sql = select_all_records_by_username(cursor, username=usr)
#     return pas + "\n" + sql

salt = "37le" #appending salt too md5 hash
pas = ''

app = Flask(__name__)
# account login route
@app.route('/auth', methods=['POST'])
def login():
    params = request.form
    usr = str(params.get('username'))
    pas = str(params.get('password')) + salt
    pas = hashlib.md5(pas.encode()).hexdigest()
    combo = usr + ':' + pas
    print("Login attempt: "+combo)
    return render_template('response.htm')

# account signup route
@app.route('/signup', methods=['POST'])
def create():
    params = request.form
    usr = str(params.get('username'))
    pas = str(params.get('password') + salt)
    pas = hashlib.md5(pas.encode()).hexdigest()
    combo = usr + ':' + pas
    print("Signup attempt: "+combo)
    return render_template('response.htm')

if __name__ == '__main__':
    app.run()