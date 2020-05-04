const express = require('express');
const path = require('path');
const app = express();
const { v4: uuidv4 } = require('uuid');
app.use(express.static(path.join(__dirname, 'build')));

const hostname = 'localhost';
const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/todos', (req, res) => {
    new Promise((res, rej) => {
        const defaultTodos = [
            {
                id: uuidv4(),
                task: 'Buy tickets',
                completed: false,
            },
            {
                id: uuidv4(),
                task: 'Visit a doctor',
                completed: false,
            },
        ];
        res(defaultTodos);
    })
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.listen(port, hostname, () =>
    console.log(`Server is running on: ${hostname}:${port}`)
);
