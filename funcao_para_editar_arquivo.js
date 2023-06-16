const fs = require('fs');

function modificarUsuario(nome,curso,categoria){
    //lendo arquivo 
    fs.readFile("usuario.json",{encoding: "utf-8"},(erro,dados)=>{

        if(erro){

            console.log('Ocorreu um erro de leitura')

        }else{
            //convertendo pra json pra pode acessar os atributos

            var conteudo = JSON.parse(dados);

            //modificando os atributos

            conteudo.nome = nome;
            conteudo.curso = curso;
            conteudo.categoria = categoria;
            
            //escrevendo no aruivo      //conevetendo ele de volta pra texto    
            fs.writeFile('usuario.json',JSON.stringify(conteudo),(erro)=>{
                if(erro){
                    console.log('Ocorreu um erro de escrita');
                }
            })


        }

    })
}


modificarUsuario('José Silva','java','java se');