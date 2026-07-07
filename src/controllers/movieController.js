import { Router } from "express";
import movieServices from '../services/movieServices.js';

const movieController = Router();
movieController.get('/', (req, res) => {
    res.render('create');
});

movieController.post('/create', async (req, res) => {
    const newMovie = req.body;
    await movieServices.create(newMovie);
    res.redirect('/');
});

export default movieController;