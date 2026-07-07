import movieRepository from '../repositories/movieRepository.js';

async function getAll() {
    return movieRepository.getAll();
}

async function create(movieData) {
    return movieRepository.create(movieData);
}

const movieServices = {
    getAll,
    create
};

export default movieServices;