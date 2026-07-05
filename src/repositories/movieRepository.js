import fs from 'fs/promises';

export async function readDB(collection) {
  const content = await fs.readFile('./src/db.json', { encoding: 'utf-8'});
  const db = JSON.parse(content);

  if (collection && !db.hasOwnProperty(collection)) {
    throw new Error(`Collection '${collection}' not found`);
  }
  return collection ? db[collection] : db;
} 

async function getAll() {
    const movies = await readDB('movies');
    return movies;
}    

const movieRepository = {
    getAll
};

export default movieRepository;