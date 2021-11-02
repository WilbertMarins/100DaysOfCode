from flask import Flask
from flask_restplus import Api, Resource  #resource responsavel pelos recursos de get, post,...

from src.server.instance import server

app, api = server.app,server.api

#database setado para teste
books_db = [
    {'id': 0, 'title': 'Clean Code' },
    {'id': 1, 'title': 'A arte da Gambiarra' }
]

@api.route('/books')
class BookList(Resource):
    def get(self,):
        return books_db
    def post(self,):
        response = api.payload 
        books_db.append(response)
        return response,200  #payload,statuscode
