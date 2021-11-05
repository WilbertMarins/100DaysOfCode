from fastapi import FastAPI

#uvicorn api2:app --reload

print("API com FASTapi")

app = FastAPI()

@app.get('/')
def inicio():
    return "API de cria, seja bem vindo"

@app.get('/intro/{nome}')
def saudacao(nome: str):
    texto = f'Fala {nome}, bem vindo, bora codar?'
    return {"mensagem": texto }

@app.get('/dobro')
def dobro(valor: int):
    resultado = valor * 2
    return {f'O dobro de {valor} é {resultado}'}

@app.get('/sobre')
def sobre():
    return "API de treino, obrigado por verificar"