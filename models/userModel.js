const users = [
    { id: 1, firstName: "Youssef", role: "Web Development Intern" },
    { id: 2, firstName: "Martina", role: "Nervous System Engineer" }
];

/**
 * Fetch all users from the persistence layer
 * @returns {Array} List of all users
 */
const getAllUsers = () => {
    return users;
};

/**
 * Fetch a specific user by their unique identifier
 * @param {number} id - User ID
 * @returns {Object|undefined} Found user object or undefined
 */
const getUserById = (id) => {
    return users.find(user => user.id === id);
};

/**
 * Persist a newly created user resource
 * @param {Object} userData - Object containing validated user properties
 * @returns {Object} The freshly created user record
 */
const createUser = (userData) => {
    const newUser = {
        id: users.length + 1,
        firstName: userData.firstName,
        role: userData.role || "Intern"
    };
    users.push(newUser);
    return newUser;
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser
};