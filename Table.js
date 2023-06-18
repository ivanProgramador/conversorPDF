class Table{
    constructor(arr){
        this.header = arr[0]; //o array que vem com os dados na posição zero eo cabeçalho 
        arr.shift(); //agora como eu quero pegar os dados eu tenho que remover o cabeçalho o shift remove o primeiro elemento de cada array não importa qual array seja
        this.rows = arr; //agora eu coloco dentro da varivel rows somante as linhas da tebela sem o cabeçalho   

    }

    //metodos contadores de linha e coluna
    //não coloquei dentro do construct porque os valores iam ficar desatualizados 

    get RowCount(){
        return this.rows.length;
    }

    get ColumnCount(){
        return this.header.length;
    }
}

module.exports = Table;