import express from 'express';
import http from 'http';
import { PORT } from './app/config';
import cors from 'cors';


// Database connection
// import './app/config/connection';

// App config
const app = express();
app.use(cors());

// All middlewares
app.use('/uploads', express.static('uploads'));

// All routes


// server is created...
const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})