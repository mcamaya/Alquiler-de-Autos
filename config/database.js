import mongoose from "mongoose";

const databaseConnection = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected on port ${db.connection.port}`);
    } catch (err) {
        console.log(err.message);
    }
}

export default databaseConnection;