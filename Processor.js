class Processor{
 


    static process(data){
        //a a função split serve para dividir uma string grande em pedaços
        // ela recebe como parametro oque vai ser usado para quebrar a string 
        //no caso e a quebra de linha e joga esse text dividido dentro da variavel a
        var a = data.split("\r\n");

        //para defnir as colunas 

        var rows = []; // array que vai abrigar as palavras

        // agora que eu tenho 4 linhas agora eu tenho que dividir as linhas por palavras
        //agora eu uso o foreach pra ler os conteudo do array a e jogas dentro da variavel row
        a.forEach(row => {
            
            //agora a cada ciclo ele pega a alinha e divide com base nas virgulas presentes nelas 
            var arr = row.split(",");
            // agora eu coloco os dados que estão na variavel 
            //.arr dentro do array rows 
            rows.push(arr);
            
        });

        return rows;


    }
}

module.exports = Processor;