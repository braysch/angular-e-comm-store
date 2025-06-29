const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors");
const categoryRouter = require("./routes/category");

app.use(cors());
app.use(express.json());

app.get("/",(req, res) => {
    res.send("Server running");
});

app.use("/category", categoryRouter);

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