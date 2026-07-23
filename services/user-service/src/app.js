const express = require("express");

const app = express();

app.get("/users", (req, res) => {
    res.json([
        {
            id: 1,
            nombre: "Juan"
        }
    ]);
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

app.listen(3001, () => {
    console.log("User Service ejecutándose en puerto 3001");
});