Funktionella krav
Admin ska kunna lägga till en ny produkt i menyn. Man ska enbart kunna skicka med de egenskaper som finns på en produkt (id, title, desc, price) i bodyn. Alla egenskaper ska också finnas med. Det ska även läggas på en createdAt med datum och tid när den skapades.
Det ska gå att modifiera en produkt i menyn. Om en produkt modifieras så ska egenskapen modifiedAt läggas till med datum och tid.
Det ska gå att ta bort en produkt i menyn. Det ska enbart gå att ta bort en produkt som finns.
Uppnås inte kraven ovan ska ett passande felmeddelande skickas tillbaka.
Alla tre endpoints ska vara skyddade genom att användaren som loggar in ska ha en admin-roll (som finns sparad i databasen), detta kontrolleras via en middleware. Användaren kan läggas till manuellt i databasen men det ska gå att logga in, dvs. du behöver en endpoint för att logga in (men det är inget krav på att skapa ett konto).
Menyn ska sparas i en NeDB-databas.
Det ska finnas en endpoint för att kunna lägga till kampanjerbjudanden som ska sparas i databasen enligt följande modell:
Produkter som ingår (ex. bryggkaffe och Gustav Adolfsbakelse) och det ska valideras att dessa produkter finns)
Kampanjpris för denna kombination (ex. 40 kr totalt)
Bedömning
För Godkänt
Inlämnad länk till ditt GitHub repo med kod till en fungerande webbapplikation som uppfyller de funktionella kraven. 

För Väl Godkänt
Grundläggande dokumentation för hela projektet, inkl. gruppexaminationen. Dokumentation skall innehålla ALLA endpoints som omfattas av REST-API:et, med tillhörande förklaringar.
