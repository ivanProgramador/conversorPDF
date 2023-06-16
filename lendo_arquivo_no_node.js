
//a a biblioteca fs não precisa ser isntalada porque ela ja é nativa do node 
// els serve para ler arquivos 

const fs = require('fs');

//primeiro parametro e a url do aruivo , segundo eo tipo de codificação, o terceiro e a função que 
//recebe 2 parametros 1 eo erro se ele aocntecer , 2 são os dados extraidos do arquivo 

fs.readFile( "teste",{encoding:'utf-8'},(erro,dados)=>{

    if(erro){
        console.log('Houve uma falha durante a leitura  ' + erro);
    }else{
        console.log(dados);
    }



});
