const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors({
  origin: 'https://hoppscotch.io'
}));
app.use(express.json()); //Middleware

const notesRoutes = require('./notes');

app.use('/notes', notesRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});