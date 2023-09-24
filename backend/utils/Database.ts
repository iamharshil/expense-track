// mongoose connection with express with typescript
import mongoose, { ConnectOptions } from "mongoose";

const MongoDB = async () => {
	try {
		if (
			!mongoose.ConnectionStates.connected ||
			!mongoose.ConnectionStates.connecting
		) {
			await mongoose
				.connect(process.env.MONGODB_URI)
				.then(() => {
					console.log("connected to mongoDB");
				})
				.catch((error) => {
					console.log("error while connecting database", error);
				});
		}
	} catch (error) {
		console.log(error);
	}
};

export default MongoDB;
