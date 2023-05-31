const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/express.html'));
});

app.listen(PORT, () => 
  console.log(`server on 127.0.0.1:${PORT}`),
);