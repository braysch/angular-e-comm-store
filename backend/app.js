const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors");
const categoryRouter = require("./routes/category");
const brandRouter = require("./routes/brand");
const productRouter = require("./routes/product");
const customerRouter = require("./routes/customer");
const authRouter = require("./routes/auth");
const { verifyToken, isAdmin } = require("./middleware/auth-middleware");

app.use(cors());
app.use(express.json());

app.get("/",(req, res) => {
    res.send("Server running");
});

app.use("/category", verifyToken, isAdmin, categoryRouter);
app.use("/brand", verifyToken, isAdmin, brandRouter);
app.use("/product", verifyToken, isAdmin, productRouter);
app.use("/customer", verifyToken, customerRouter);
app.use("/auth", authRouter);

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