/* 
fetch('https://rickandmortyapi.com/api/character')
.then(response=>response.json())
.then(json=>console.log(json))
*/

// uma marcação funcionando como marco zero de exibição
var current_page = 1;
var previous_page = 1;
var next_page = 2;

// função fazendo paginação para exibir o conjunto de personagens de cada página
function main(number_page, request_) {
    var URLendpoint = id => `https://rickandmortyapi.com/api/character/?page=${id}`;
    var endpoint = URLendpoint(number_page);
    
    //página atual
    var current_page = number_page;

fetch(endpoint,{
    method: 'GET'
})
.then(response=>response.json())
.then(function(json){
    
    //seleciona area de exibição geral
    var container = document.querySelector('.container');
    var page = document.querySelector('#page');
    container.innerHTML=null;
    page.innerHTML="Página " + number_page + " de 34";
    
    //interpreta o JSON, vamos criar os cards
    json.results.map(function(results){
        container.innerHTML+=
        `
        <div class="card">
        
        <div class="centralized"> <img style="margin-top:10px" src=${results.image} > </div>
        
        <div class="standard-margin">
            
        <h2> ${results.name}</h2>
            
            <button> 
                <ul class="status ${results.status}">
                    <li> <h4> ${results.status}</> </li>
                </ul>
            </button>
            
            <h4>Espécie: ${results.species}</>
            
            <h4>Gênero: ${results.gender}</>

            <h4>Localização: ${results.location.name}</>
        </div>
        
        <h4 class="centralized" >ID: #${results.id}</>
        
        </div>

        `;

    })
})

    //Paginação em JS Vanilla
    if(request_ =="more"  &&(current_page>1 && current_page<34)){      
        previous_page +=1;
        current_page +=1;
        next_page += 1;
    }
    if(request_ =="previous" && (current_page>1 && current_page<35) ){   
        next_page -=1;
        previous_page -= 1;
        current_page -=1;
        
    }
    
    return previous_page,current_page,next_page;

}

//inicializa a 1ª página(padrão)
main(current_page,"nothing") //page1