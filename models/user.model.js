const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, " username is required"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			lowercase: false,
		},
	},
	{
		timestamps: true,
	}
);
// UserSchema.pre("save", async function (next) {
// 	const user = this;
// 	if (!user.isModified("password")) return next();

// 	try {
// 		const salt = await bcrypt.genSalt();
// 		user.password = await bcrypt.hash(user.password, salt);
// 		next();
// 	} catch (error) {
// 		return next(error);
// 	}
// });

UserSchema.methods.comparePassword = async function (password) {
	console.log(password, this.password, "this");
	return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", UserSchema);

module.exports = User;
