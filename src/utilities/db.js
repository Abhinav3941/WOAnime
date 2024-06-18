// utilities/db.js
import mongoose from 'mongoose';

const connect = async () => {
    if (mongoose.connections[0].readyState) {
        // Use existing database connection
        return;
    }
    // Use new database connection
    await mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export default connect;
