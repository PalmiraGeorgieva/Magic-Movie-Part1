import { Router } from "express";
import movieServices from '../services/movieServices.js';

const movieController = Router();

movieController.get('/search', async (req, res) =>{
    const movies = await movieServices.getAll();
    res.render('movie/search', { movies });
});

movieController.get('/create', (req, res) => {
    res.render('movie/create');
});

movieController.post('/create', async (req, res) => {
    const newMovie = req.body;
    await movieServices.create(newMovie);
    res.redirect('/');
});

movieController.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieServices.getById(movieId);
    res.render('details', { movie });
});

export default movieController;