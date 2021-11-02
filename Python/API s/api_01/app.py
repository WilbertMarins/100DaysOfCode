'''
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello World"

@app.route('/teste')
def hello_world2():
    return "Hello World 2 cria"

Werkzeug pacote
'''

from src.server.instance import server

from src.controllers.books import *

server.run()
