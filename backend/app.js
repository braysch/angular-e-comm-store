const expores = require("express");
const mongoose = require("mongoose");
const app = expores();
const port = 3000;

app.get("/",(req, res) => {
    res.send("Server running");
});

async function connectDB() {
    mongoose.connect("mongodb://localhost:27017/ecommDB", {
        dbName: "e-comm-store-db",
    });
    console.log("Connected to MongoDB");
}
connectDB().catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});


app.listen(port,()=>{
    console.log("Server running on port", port);
});