from flask import Flask, redirect, url_for, request
from urllib.parse import urlparse, parse_qs
import hashlib

app = Flask(__name__)

@app.route('/auth', methods=['POST'])
def login():
    params = request.args
    usr = params.get('username')
    pas = params.get('password')
    pas = hashlib.md5(pas.encode()).hexdigest()
    return usr + ':' + pas

if __name__ == '__main__':
    app.run()