// const fs = require('fs');
import fs from 'fs'

const getLinks = (text) => {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arrayResult = [];
    let temp;

    while((temp = regex.exec(text)) !== null) {
        arrayResult.push({ [temp[1]]:temp[2] })
    }
    return arrayResult.length === 0 ? "Não há links" : arrayResult;
};

const errorHandling = (erro)=>{
    throw new Error(erro, 'Tem nada aqui não')
};

const getFile = async (filePath) => {
    const encoding = 'utf-8';
    
    try {
        const text = await fs.promises.readFile(filePath, encoding);
        const links = getLinks(text);
        return links;
    } catch(erro) {
        errorHandling(erro)
    }
}

export default getFile
