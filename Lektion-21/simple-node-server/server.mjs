import http from 'http';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const PORT = 8080;
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

// Sätta upp servern..
const server = http.createServer(async (req, res) => {
  const { headers, method, url } = req;
  const filePath = path.join(
    __dirname,
    'static',
    req.url === '/' ? 'index.html' : req.url,
  );

  console.log(filePath);

  //   Hämta filen(index.html) ifrån filsystemet...
  const content = await fs.readFile(filePath);
  console.log(content);
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(content, 'utf-8');
});

// Starta servern och börja lyssna på anrop...
server.listen(PORT, () =>
  console.log(`Servern är startad och lyssnar på port: ${PORT}`),
);
