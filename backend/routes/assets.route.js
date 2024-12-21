import { Router } from 'express';
import { getAllCars, getCarDetailsById, addCar, deleteCarById } from "../controllers/cars.controller.js";
import { queryAssets, getMyAssets } from "../controllers/assets.controller.js";

const router = Router();

// CARS
router.get('/cars', getAllCars);
router.post('/cars', addCar);
router.get('/cars/:id', getCarDetailsById);
router.delete('/cars/:id', deleteCarById);

// router.get('/properties', )

// ASSETS
router.get('/search', queryAssets);
router.get('/my-assets', getMyAssets);

export { router as assetsRouter };