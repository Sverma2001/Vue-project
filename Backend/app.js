const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const port = 5000;

const data = [
    { name:"Sachin", email: "sachin@gmail.com", password: "sachin" },
    { name:"Abc", email: "sverma@gmail.com", password: "sverma2001" },
];

app.get("/signup", (req, res) => {
    try {
        res.json(data);
    } catch (err) {
        console.log(err);
    }
});

app.post("/register", (req, res) => {
    try {
        const {name, email, password } = req.body;
        console.log(name,email, password);
        data.push({ name: name, email_id: email, password_: password });
        res.json(data)
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`port is listening on http://localhost:${port}`);
});