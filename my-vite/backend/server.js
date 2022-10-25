const express = require('express');
const app = express();
const PORT = 5000;

console.log("Ok for cl")

app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));