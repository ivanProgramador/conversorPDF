const fs = require('fs');
const Util = require('util');




// essa função recebe como parametro a localização do arquivo

class Reader{

    constructor(){
        this.reader = Util.promisify(fs.readFile);
    }

    async Read(filepath){
        try {
            return await this.reader(filepath,"utf8");

        } catch (err) {

            return undefined;
            
        }

    }

  
}

module.exports = Reader;