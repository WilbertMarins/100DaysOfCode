/* 
fetch('https://rickandmortyapi.com/api/character')
.then(response=>response.json())
.then(json=>console.log(json))
*/

fetch('https://rickandmortyapi.com/api/character',{
    method: 'GET'
})
.then(response=>response.json())
.then(function(json){

    //seleciona area de exibição geral
    var container = document.querySelector('.container');

    //interpreta o json, vamos criar os cards
    json.results.map(function(results){

        container.innerHTML+=
        `
        <div class="card">
        
        <div> <img src=${results.image} > </div>
        <h4>${results.name}</>
        <h4>${results.status}</>
        <h4>${results.species}</>

        </div>

        `;

    })
})
