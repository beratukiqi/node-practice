const fs = require("fs");
// JSON.parse() - Skriver om till vanlig JS.
// .toString() - Skriver om till sträng.
const content =
    "Why, sometimes I've believed as many as six impossible things before breakfast.";

// Uppgift 1
fs.writeFileSync("alicequotes.txt", content);

// Uppgift 2
let text = fs.readFileSync("alicequotes.txt");
text = text.toString();
console.log(text);
