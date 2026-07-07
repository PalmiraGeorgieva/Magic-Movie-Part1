import movieRepository from '../repositories/movieRepository.js';

async function getAll() {
    return movieRepository.getAll();
}

async function create(movieData) {
    return movieRepository.create(movieData);
}

async function getById(movieId) {
    return movieRepository.getById(movieId);
}

const movieServices = {
    getAll,
    create,
    getById
};

export default movieServices;