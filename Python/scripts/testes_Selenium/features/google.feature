# language: pt

Funcionalidade: realizar pesquisa no Google
  
  # Contexto são ações que serão executadas antes de cada cenário.
  Contexto: acessar página de teste
    Dado que acesso a página do Google

  Cenário: acessar página do Google e realizar busca
    Dado que preencho o campo de pesquisa com Vasco
    Quando clicar no botão de pesquisar
    Então devo visualizar os resultados