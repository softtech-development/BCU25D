import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const PORT = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Skapa en server...
const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.listen(PORT, () =>
  console.log(`Express servern är startad och kör på port: ${PORT}`),
);
