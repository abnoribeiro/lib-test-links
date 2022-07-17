// const chalk = require('chalk');
import chalk from 'chalk';
// const getFile = require('./index')
import getFile from './index';
// const validateUrl = require('./http-validation')
import validateUrl from './http-validation'

const pathFile = process.argv;

export const loadText = async (path) => {
    const result = await getFile(path[2]);
    
    if(path[3]){    
        const teste = await validateUrl(result)
        console.log(chalk.yellow("Links validados: "),teste)
    }else {
        console.log(chalk.yellow("Lista de links: "), result)
    }
};

loadText(pathFile)