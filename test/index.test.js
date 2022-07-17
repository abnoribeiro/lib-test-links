import getFile from '../index';

describe("getFile::", ()=>{
    it('this is path is a function?', ()=>{
        expect(typeof getFile).toBe('function');
    })
    it('Result function get file is the object?', async ()=>{
        const filePath = '/home/abno/Documentos/projects/alura/test/filesTests/texto1.md';
        const result = await getFile(filePath)
        expect(typeof result).toBe('object');
    })
    it('The return fuction if file dont have a link is a mensage "Não há links"?', async ()=>{
        const filePath = '/home/abno/Documentos/projects/alura/test/filesTests/texto1_dontLinks.md';
        const result = await getFile(filePath)
        expect(result).toBe('Não há links')
    })
})

