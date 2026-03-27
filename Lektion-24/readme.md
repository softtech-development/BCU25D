# Lektion 24

### Komma igång
För att kunna starta upp applikationen så behövs följande göras:
- I api katalogens rot ska en fil .env skapas med följande nycklar
	- PORT=<Ange portnummer>
	- API_URL=https://themoviedb.org/3
	- API_KEY=<Er egen nyckel via profil inställningar>
	- IMAGE_URL=https://image.tmdb.org/t/p
- I api katalogen kör kommandot `npm i`

- I client katalogens rot ska en fil .env skapas med följande nyckel
	- VITE_BASE_URL=http://localhost:portnummer/api
- I client katalogen kör kommandot `npm i`