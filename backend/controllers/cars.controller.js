import Car from "../models/Car.js";

const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json({
            cars
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server error occurred" });
    }
}

const getCarDetailsById = async (req, res) => {
    const { id } = req.params;
    try {
        const car = await Car.findById(id);
        if (!car){
            return res.status(400).json({ message: "Car not found" });
        }
        res.status(200).json({
            car
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server error occurred" });
    }
}

const addCar = async (req, res) => {
    const { make, model, price, year, engineType, color, extras } = req.body;
    const ownerId = req.userId;

    if (!make || !model || !price || !year || !engineType || !color){
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newCar = await Car.create({
                ownerId,
                make,
                model,
                price,
                year,
                engineType,
                color,
                extras
        });
        res.status(201).json({
            car: newCar
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server error occurred" });
    }
}

const deleteCarById = async (req, res) => {
    const { id } = req.params;
    try {
        const car = await Car.findByIdAndDelete(id);
        if (!car){
            return res.status(400).json({ message: "Car not found" });
        }
        if (car.ownerId != req.userId){
            return res.status(401).json({ message: "Unauthorized to delete this car" });
        }
        res.status(200).json({
            message: "Car deleted successfully",
            car
         });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server error occurred" });
    }
}

export { getAllCars, getCarDetailsById, addCar, deleteCarById };