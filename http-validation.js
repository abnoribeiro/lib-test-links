// const fetch = require("node-fetch");
import fetch from 'node-fetch'
import chalk from 'chalk';

const checkStatusUrls = async (arraysUrls) => {
    const arrayStatus = await Promise.all(arraysUrls.map(async(url) => {
        const res = await fetch(url);
        return res.status
    }))

    return(arraysUrls.map((e,i)=>({'Url':e,'Status':arrayStatus[i]})))
};

const arrayURLs = (arraysLinks) => {
    const urls = arraysLinks.map(objectLink=> Object.values(objectLink).join())

    return(urls)
};

const validateUrl = async(arrayLinks) => {
    const urlArray = arrayURLs(arrayLinks);
    const urlArrayObject = await checkStatusUrls(urlArray)
    return(urlArrayObject)
};

export default validateUrl