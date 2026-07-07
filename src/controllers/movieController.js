import { Router } from "express";

const movieController = Router();
movieController.get('/', (req, res) => {
    res.render('movies/create');
});

export default movieController;