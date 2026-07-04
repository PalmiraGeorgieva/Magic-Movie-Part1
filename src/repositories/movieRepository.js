import fs from 'fs/promises';

export async function readDB() {
  const content = await fs.readFile('./src/db.json', { encoding: 'utf-8'});
  const db = JSON.parse(content);
  return db;
} 

export async function getAllMovies() {
    const movies = await readDB();
    return movies;
}    