const express =  require('express'); 
const server = express();

// função para interpretar json
server.use(express.json());

const series = ['Super choque', 'KND - Turma do bairro','As aventuras de Jackie Chan','Eu, a patroa e as crianças', 'Todo mundo odeia o Chris' ];

//retorna uma série
server.get('/series/:index',(req,res)=>{
    const{index} = req.params;
    return res.json(series[index]);
})

//retornar TODAS as séries
server.get('/series',(req,res)=>{
    return res.json(series)
})

//registra uma nova série
server.post('/series',(req,res)=>{
    const {name} = req.body;
    series.push(name);

    return res.json(series);
})

//atualizar serie
server.put('/series/:index',(req,res)=>{
    const{index} = req.params;
    const{name} =req.body;

    series[index] = name;

    return res.json(series);
})

//deletar serie
server.delete('/series/:index',(req,res)=>{
    const{index} = req.params;

    series.splice(index,1);

    return res.json({message: "A série foi retirada do catálogo"});
})


server.listen(3000);
console.log("O catálogo tá ON !")