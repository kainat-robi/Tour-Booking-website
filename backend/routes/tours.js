import express from "express";
const router = express.Router()
import {createTour , deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from './../Controllers/tourController.js'
import { verifyAdmin } from "../utils/verifyToken.js";
//create new tour 
router.post('/' ,verifyAdmin, createTour);

//update tour 
router.put('/:id' ,verifyAdmin, updateTour);

//delete tour 
router.delete('/:id' ,verifyAdmin, deleteTour);

//get single tour 
router.get('/:id' , getSingleTour);

//get all tour 
router.get('/' , getAllTour);


// get tour by search 
router.get('/search/getTourBySearch' , getTourBySearch );
router.get('/search/getFeaturedTour' , getFeaturedTour );
router.get('/search/getTourCounter' , getTourCount );



export default router;