import * as fs from 'fs'


const database=JSON.parse(fs.readFileSync('./database.json'))    
console.log(database.comida)