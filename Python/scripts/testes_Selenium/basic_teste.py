from selenium import webdriver

driver = webdriver.Chrome()  # Inicia o browser

driver.get('https://vasco.com.br/')  # Acessar a URL especificada

driver.find_element_by_xpath('//*[@id="s"]').send_keys("camisa") # Digita o texto "camisa" no input
driver.find_element_by_xpath('//*[@id="searchsubmit"]/i').click() # clica no botão de submit para realizar a busca

#driver.find_element_by_css_selector('#submit').click()  # seleção por css 

#Ir até a área de sócio torcedor
#driver.find_element_by_xpath('//*[@id="menu-item-31"]/a').click()  # Clica no botão de ST // seleção por xpath

#driver.quit()  # Encerra o browser