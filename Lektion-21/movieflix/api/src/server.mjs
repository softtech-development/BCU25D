import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();

// Endpoint...
app.get('/api/movies', async (req, res) => {
  // Logik för att hantera anropet...
  const url = process.env.API_URL + '/discover/movie?language=sv-SE';
  const apiKey = `Bearer ${process.env.API_KEY}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: apiKey,
    },
  });

  if (response.ok) {
    const data = await response.json();
    res.status(200).json({
      success: true,
      statusCode: 200,
      page: data.page,
      items: data.results.length,
      data: data.results,
    });
  }
});

app.get('/api/movies/:id', async (req, res) => {
  const url = process.env.API_URL + '/movie/' + req.params.id;
  const apiKey = 'Bearer ' + process.env.API_KEY;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: apiKey,
    },
  });

  if (response.ok) {
    const data = await response.json();
    res.status(200).json({ success: true, statusCode: 200, data });
    return;
  }

  res.status(500).json({ message: 'Gick åt H-E!' });
});

app.listen(PORT, () =>
  console.log(`Servern är startad och lyssnar på port: ${PORT}`),
);
