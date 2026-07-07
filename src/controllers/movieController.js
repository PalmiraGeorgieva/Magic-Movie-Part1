import { Router } from "express";

const movieController = Router();
movieController.get('/', (req, res) => {
    res.render('create');
});

export default movieController;