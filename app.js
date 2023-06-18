var Reader = require('./Reader');
var Writer = require('./Writer');
var Processor = require('./Processor');
var Table = require('./Table');
var HtmlParser = require('./HtmlParser');
var PDFWriter = require('./PDFWriter');

var Leitor = new Reader('users.csv');
var leitor = new Reader();
var escritor = new Writer();




async function main(){

    var dados = await Leitor.Read('users.csv');
    
    var dadosProcessados = Processor.process(dados);  

    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(usuarios); 

    escritor.Write("htmlNovo.html",html); //gera html

    PDFWriter.WritePdf(Date.now() + ".PDF", html); //gera pdf
    

}
main();
