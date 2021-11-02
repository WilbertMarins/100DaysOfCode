from logging import debug
from flask import Flask
from flask_restplus import Api

class Server():
    def __init__(self,):
        self.app = Flask(__name__)
        self.api = Api(self.app,
            version='1.0',
            title='Wills API',
            description= 'A simple Python API',
            doc='/docs' #url de documentações da API
        )

    def run(self,):
        self.app.run(
            debug=True #auto compile pós mudança, usadoa nivel dfe desenvolvimento
        )
        
server = Server()