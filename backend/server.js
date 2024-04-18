const express = require('express');
const cors = require('cors');
const nasaRoutes = require('./routes/nasaRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', nasaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});