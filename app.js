const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] Data Ingress at ${req.method} ${req.url}`);
    next();
});

app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        status: "Online",
        track: "Full Stack Project 2: Backend API Development",
        integrityCheck: "Stable"
    });
});

app.listen(PORT, () => {
    console.log(`===================================================`);
    console.log(` DecodeLabs Digital Engine Initialized Successfully`);
    console.log(` Server Active on Address URL: http://localhost:${PORT}`);
    console.log(`===================================================`);
});