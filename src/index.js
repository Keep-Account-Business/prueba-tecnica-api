import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import { router } from './routes/index.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

	try {
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) throw new Error("MONGODB_URI must be defined");
    const db = await mongoose.connect(MONGODB_URI);
		console.log(`Connection established to the "${db.connection.name}" MongoDB.`);
	} catch (err) {
		console.error({ err });
	}

app.use('/api', router);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});