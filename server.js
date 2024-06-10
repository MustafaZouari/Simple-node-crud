const dotenv = require("dotenv");
const express = require("express");

const mongoose = require("mongoose");
const productsRoute = require("./routes/product.route");
const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");

dotenv.config({ path: ".env" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
	.connect(
		`mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@mongodb.msiejfc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=MongoDB`
	)
	.then(() => {
		app.listen(process.env.PORT || 4000, () => {
			console.log("Listenning", process.env.PORT);
		});
	})
	.catch((err) => {
		console.log(err, "Error connecting");
	});

app.get("/", (req, res) => {
	res.send("Hello from api");
});

app.use("/api/products", productsRoute);
app.use("/api/auth", authRoutes);

app.use("/api/user", userRoutes);
