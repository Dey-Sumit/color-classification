const express = require('express');

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log("app is running on ", PORT));

app.use(express.static('public'));