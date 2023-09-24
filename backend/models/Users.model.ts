import { Schema, model, models } from "mongoose";

const User = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			minLength: 4,
			maxLength: 20,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			minLength: 4,
			maxLength: 20,
		},
		password: {
			type: String,
			required: true,
			minLength: 4,
			maxLength: 20,
		},
	},
	{ timestamps: true, versionKey: false },
);

module.exports = models.User || model("User", User);
