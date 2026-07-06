import { Router } from "express";
import { getAll } from "../repositories/movieRepository.js";
import movieServices from "../services/movieServices.js";

const homeController = Router();
homeController.get('/', async(req, res) => {
   const movies =  await movieServices.getAll();
   
    res.render('home', { movie: movies[1] });
});
homeController.get('/about', (req, res) => {
    res.render('about');
});

export default homeController;