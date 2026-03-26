import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import movieRouter from './routes/movie-routes.mjs';

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

// Delegera anrop till vår egen implementering av routern...
app.use('/api/movies', movieRouter);

app.listen(PORT, () =>
  console.log(`Servern är startad och lyssnar på port: ${PORT}`),
);
