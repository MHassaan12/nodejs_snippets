import mongoose from 'mongoose';
import { DB_URL } from '.';

mongoose.connect(DB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connectionError'));
database.once('open', () => {
    console.log('Database connected....');
})