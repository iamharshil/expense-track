// setup of express with typescript and mongoose
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";

// configuration
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

// routes
app.use("/api", routes);

// server listening
app.listen(port, () => {
	console.log(`server listening on http://localhost:${port}`);
});
