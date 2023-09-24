import { Schema, model, models } from "mongoose";

const Expense = new Schema(
	{
		title: {
			type: String,
			required: true,
			minLength: 4,
			maxLength: 20,
		},
		amount: {
			type: Number,
			required: true,
			min: 0,
		},
		category: {
			type: String,
			required: true,
			minLength: 4,
			maxLength: 20,
		},
		date: {
			type: Date,
			required: true,
		},
	},
	{ timestamps: true, versionKey: false },
);

module.exports = models.Expense || model("Expense", Expense);
