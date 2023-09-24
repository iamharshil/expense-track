// mongoose connection with express with typescript
import mongoose, { ConnectOptions } from "mongoose";

let cachedConnection: typeof mongoose | null = null;

const MongoDB = async () => {
	try {
		if (cachedConnection) {
			console.log("MongoDB cached connection");
			return cachedConnection;
		}

		if (!process.env.MONGODB_URI) {
			return console.log("MONGODB_URI is not defined");
		}

		console.log(mongoose.connections);
		const options: ConnectOptions = {
			autoIndex: true,
			// useNewUrlParser: true,
			// useUnifiedTopology: true,
		};

		const connection = await mongoose.connect(process.env.MONGODB_URI, options);

		cachedConnection = connection;

		console.log("MongoDB new connection");

		return connection;
	} catch (error) {
		console.log("Error while connecting to the database", error);
	}
};

export default MongoDB;
