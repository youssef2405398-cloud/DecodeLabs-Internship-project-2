const userModel = require('../models/userModel');


const getUsers = (req, res) => {
    try {
        const data = userModel.getAllUsers();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error during data transmission." });
    }
};


const getUserById = (req, res) => {
    try {
        const userId = parseInt(req.params.id, 10);
        const user = userModel.getUserById(userId);

        if (!user) {
            return res.status(404).json({ error: `Resource with ID ${userId} could not be located.` });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error processing request." });
    }
};

const createNewUser = (req, res) => {
    try {
        const { firstName, role } = req.body;

        // Basic Data Validation Rule
        if (!firstName || firstName.trim() === "") {
            return res.status(400).json({ 
                error: "Validation failed: 'firstName' field is mandatory and cannot be empty." 
            });
        }

        const addedUser = userModel.createUser({ firstName, role });
        res.status(201).json({
            message: "Resource successfully created inside the data persistence layer.",
            user: addedUser
        });
    } catch (error) {
        res.status(500).json({ error: "Error processing resource payload encapsulation." });
    }
};

module.exports = {
    getUsers,
    getUserById,
    createNewUser
};