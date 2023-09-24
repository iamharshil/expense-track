import { Schema, model, models } from "mongoose";

const Category = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			minLength: 4,
			maxLength: 20,
		},
		type: {
			type: String,
			required: true,
			enum: ["expense", "income"],
		},
	},
	{ timestamps: true, versionKey: false },
);

module.exports = models.Category || model("Category", Category);
