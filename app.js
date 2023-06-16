var Reader = require('./Reader');
var Processor = require('./Processor');

var Leitor = new Reader('users.csv');

async function main(){
    var dados = await Leitor.Read('users.csv');
    var dadosProcessados = Processor.process(dados);  
}
main();
