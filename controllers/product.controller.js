const Product = require("../models/product.model");

const addProduct = async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getProducts = async (req, res) => {
	try {
		const product = await Product.find({});
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		if (!product) {
			res.status(404).json({ message: "Product not found" });
		}
		res.status(200).json(product);
	} catch (error) {
		x;
		res.status(500).json({ message: error.message });
	}
};

const updateProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndUpdate(id, req.body);
		if (!product) {
			res.status(404).json({ message: "Product not found" });
		}

		const updatedProduct = await Product.findById(id);
		res.status(200).json(updatedProduct);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const deleteProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndDelete(id, req.body);
		if (!product) {
			res.status(404).json({ message: "Product not found" });
		}

		res.status(200).json({ message: "Product Deleted Succesfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	deleteProduct,
	addProduct,
	getProduct,
	getProducts,
	updateProduct,
};
