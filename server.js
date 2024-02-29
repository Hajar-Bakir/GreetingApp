// Laden des Express-Moduls
const express = require("express");

// Portnummer für den Server wird hier festgelegt!
const port = process.env.PORT || 5500;

// Express-Anwendung wird erstellt und in die Variable "app" importiert.
let app = express();

// Middleware, um statische Dateien aus dem "frontend" Ordner bereitzustellen
app.use(express.static('greetingAPP'));

// Server starten und auf Verbindungen auf dem angegebenen Port warten
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});