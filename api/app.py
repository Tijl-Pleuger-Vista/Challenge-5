from flask import Flask, redirect, url_for, request
from urllib.parse import urlparse, parse_qs
import hashlib

app = Flask(__name__)

@app.route('/auth', methods=['POST'])
def login():
    params = request.form
    usr = params.get('username')
    pas = params.get('password')
    pas = hashlib.md5(pas.encode()).hexdigest()
    combo = usr + ':' + pas
    return combo

@app.route('/signup', methods=['POST'])
def create():
    params = request.form
    usr = params.get('username')
    pas = params.get('password')
    pas = hashlib.md5(pas.encode()).hexdigest()
    combo = usr + ':' + pas
    return combo

if __name__ == '__main__':
    app.run()