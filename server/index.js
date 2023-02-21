require('dotenv').config();
const express = require('express');
const models = require('./models/models');
const sequelize = require('./db');
const cors = require('cors');
const router = require('./routes/index')
const PORT = process.env.PORT || 7000;
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use(errorHandler);

// app.get('/', (req,res)=>{
//     res.status(200).json({message: 'WORKing!'});
// });
const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();