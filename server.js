const dotenv = require("dotenv");
const express = require("express");

const mongoose = require("mongoose");
const productsRoute = require("./routes/product.route");

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

// app.post("/api/products", async (req, res) => {
// 	try {
// 		const product = await Product.create(req.body);
// 		res.status(200).json(product);
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// });
// app.get("/api/products", async (req, res) => {
// 	try {
// 		const product = await Product.find({});
// 		res.status(200).json(product);
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// });
// app.get("/api/products/:id", async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const product = await Product.findById(id);
// 		if (!product) {
// 			res.status(404).json({ message: "Product not found" });
// 		}
// 		res.status(200).json(product);
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// });
// app.put("/api/products/:id", async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const product = await Product.findByIdAndUpdate(id, req.body);
// 		if (!product) {
// 			res.status(404).json({ message: "Product not found" });
// 		}

// 		const updatedProduct = await Product.findById(id);
// 		res.status(200).json(updatedProduct);
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// });
// app.delete("/api/products/:id", async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const product = await Product.findByIdAndDelete(id, req.body);
// 		if (!product) {
// 			res.status(404).json({ message: "Product not found" });
// 		}

// 		res.status(200).json({ message: "Product Deleted Succesfully" });
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// });
// app.get("/api/products", (req, res) => {
// 	res.send("Hello from product page");
// });

// const connectionString = // ("mongodb+srv://zouarimustafa:0NyyRgmq5L7ugEfh@mongodb.msiejfc.mongodb.net/?retryWrites=true&w=majority&appName=MongoDB");
