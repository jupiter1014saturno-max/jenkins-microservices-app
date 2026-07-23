const express = require("express");

const app = express();

app.get("/products", (req, res) => {
    res.json([
        {
            id: 1,
            producto: "Laptop"
        },
        {
            id: 2,
            producto: "Mouse"
        }
    ]);
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

app.listen(3002, () => {
    console.log("Product Service ejecutándose en puerto 3002");
});