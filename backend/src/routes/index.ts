import express from "express";
import ExpenseRouter from "./expense.route";

const router = express.Router();

router.use("/expense", ExpenseRouter);
export default router;
