import movieRepository from '../repositories/movieRepository.js';

async function getAll() {
    return movieRepository.getAll();
}

const movieServices = {
    getAll
};

export default movieServices;