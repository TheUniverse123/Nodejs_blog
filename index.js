import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('hello')
});

app.listen(port, ()=> console.log(`Example app listening at https://localhost:${port}`));