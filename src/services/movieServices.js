import movieRepository, { getAllMovie } from '../repositories/movieRepository.js';

export async function  getAllMovies() {
    return movieRepository.getAll();
}

const movieServices = {
    getAllMovies
};

export default movieServices;