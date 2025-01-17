const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/validationRoutes");
const postRoutes = require("./routes/postRoutes");

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://tejasvikumar108:tejasvi108@cluster0.p5saiiu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.use('/socialMedia/user',userRoutes);
app.use('/socialMedia/authToken', authRoutes);
app.use('/socialMedia/posts', postRoutes);

app.listen(PORT,()=>console.log(`Server is running at port: ${PORT}`))