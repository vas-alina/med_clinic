require('dotenv').config();
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors');
const router = require('./routes/index')

const PORT = process.env.PORT || 5000

const app = express();

app.use(cors())
app.use(express.json())

app.use('/', router);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Work!" })
})

app.post('/', async (req, res) => {
    const { name, numberPhone, textProblem } = req.body;
    try {
        const newLead = await models.Lead.create({ name, numberPhone, textProblem });
        res.status(201).json(newLead); 
    } catch (error) {
        console.error("Ошибка при создании лида:", error);
        res.status(500).json({ message: 'Ошибка при создании лида' });
    }
});
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.log(error)
    }
}

start();