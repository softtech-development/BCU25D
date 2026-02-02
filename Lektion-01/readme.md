# Lektion 1

## JavaScript Quick Intro

Under lektion kommer vi att få en snabb introduktion till vad JavaScript är och varför vi ska bry oss om språket.

### Arbeta med variabler

En variabel är ett namn som vi tilldelar ett värde som vi vill kunna lagra i applikationen för att sedan kunna återanvända värdet.
Exempel på deklaration av en variabel:
`const firstName = "Michael"`

#### Vi har i JavaScript 3 olika sätt att skapa(deklarera) en variabel

1. **_var_** som placerar värdet och namnet på variabeln i det globala namnutrymmet i webbläsaren. Det vill säga att variabel och värde placeras i window objektet i webbläsaren. (_detta är inte rekommenderat, kan leda till svårhittade buggar i applikationen_)
2. **_let_** som låter oss deklarera en variabel i ett så kallat _scope_ utrymme. En variabel som är deklarerad med let nyckelordet är även möjlig att ändra värdet på, så kallad _mutable_.
3. **_const_** som låter oss deklarera en variabel i ett så kallat _scope_ utrymme. När vi deklarerar en variabel med _const_ måste vi initiera(sätta ett värde) samtidigt som vi gör deklareringen.

##### Scope (Namnutrymme)

**_Scope_** är ett samlingsnamn för variablers livslängd. Det vill säga när tas variabel och dess värde bort ifrån minnet.
Om vi deklarerar en variabel med _let_ eller _const_ direkt i en JavaScript fil, så tas variabeln och dess värde inte bort förrän vi når sista raden i filen.
Om vi deklarerar en variabel inuti t ex en funktion så lever variabeln endast under den tid som variabeln används.
