import fs from 'fs/promises';
import { v4 as uuid } from 'uuid';
export async function readDB(collection) {
  const content = await fs.readFile('./src/db.json', { encoding: 'utf-8'});
  const db = JSON.parse(content);

  if (collection && !db.hasOwnProperty(collection)) {
    throw new Error(`Collection '${collection}' not found`);
  }
  return collection ? db[collection] : db;
} 

async function writeDB(db) {
  const content = JSON.stringify(db, null, 2);
  await fs.writeFile('./src/db.json', content);
}

async function getAll() {
    const movies = await readDB('movies');
    return movies;
}    

async function create(movieData) {
    movieData.id = uuid();
    const db = await readDB();
    db.movies.push(movieData);
    await writeDB(db);
}

const movieRepository = {
    getAll,
    create
};

export default movieRepository;