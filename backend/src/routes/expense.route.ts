import express, { Request, Response } from "express";
import MongoDB from "../../utils/Database";
import Expense from "../../models/Expense.model";

const ExpenseRouter = express.Router();

ExpenseRouter.get("/", async (req: Request, res: Response) => {
	try {
		await MongoDB();
		const expenses = await Expense.find();
		return res.status(200).json({ success: true, data: expenses });
	} catch (error) {
		console.error("expense get:", error);
		return res
			.status(500)
			.json({ success: false, message: "Internal server error." });
	}
});

ExpenseRouter.post("/create", async (req: Request, res: Response) => {
	try {
		await MongoDB();
		const { title, amount, category, date } = req.body;
		const expense = new Expense({ title, amount, category, date });
		await expense.save();
		return res.status(200).json({ success: true, data: expense });
	} catch (error) {
		console.error("expense create:", error);
		return res
			.status(500)
			.json({ success: false, message: "Internal server error." });
	}
});

export default ExpenseRouter;
