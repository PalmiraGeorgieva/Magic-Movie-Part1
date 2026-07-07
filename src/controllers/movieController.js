import { Router } from "express";

const movieController = Router();
movieController.get('/', (req, res) => {
    res.render('create');
});

movieController.post('/create', (req, res) => {
    console.log('post request received');
    console.log(req.body);
});

export default movieController;