const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
 app.use(express.static('public'));


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));