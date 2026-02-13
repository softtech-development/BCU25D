# Lektion 6

Idag ska vi avsluta vår applikation _Shopping List_.

Vi ska se till att inlagda varor sparas permanent så att när vi öppnar applikationen så ska vi kunna hämta varor som finns sparade
Vi ska även se till att vi har felhantering i applikationen.

- Vi ska meddela användaren om de inte fyllt i något i inmatningsfältet
- Vi ska meddela användaren om de försöker lägga till något som redan finns i listan

Dessutom ska vi slutligen titta på hur vi kan förbättra koden i vår applikation
det som kallas för _refactoring_

## Övning inför nästa lektion

1.      Fixa till sista localStorage logiken som finns i app.js
2.      Visa Töm allt endast om det finns något i listan.
3.      Fixa buggen som inträffar när vi klickar på en tom lista.
4.      Bonus
    Om ni tar bort manuellt ifrån listan och det inte finns fler
    varor så ska ni ta bort localStoragen nyckeln..
