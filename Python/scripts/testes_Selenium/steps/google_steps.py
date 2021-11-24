from behave import *
from nose.tools import assert_equal
from pages.google_page import GooglePage

googlePage = GooglePage()


@given('que acesso a página do Google')
def step_impl(context):
    googlePage.acess_page('https://www.google.com.br/')


@given('que preencho o campo de pesquisa com Vasco')
def step_impl(context):
    googlePage.send_keys_input_pesquisa()


@when('clicar no botão de pesquisar')
def step_impl(context):
    googlePage.click_button_pesquisar()


@then('devo visualizar os resultados')
def step_impl(context):
    assert_equal(googlePage.get_text_title_resultado(), 'Club de Regatas Vasco da Gama')