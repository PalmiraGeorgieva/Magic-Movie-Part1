import movieRepository from '../repositories/movieRepository.js';

async function getAll() {
    return movieRepository.getAll();
}
function create(movieData) {
    return movieRepository.create(movieData);
}
const movieServices = {
    getAll
};

export default movieServices;