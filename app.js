const fs = require("fs");
const readlineSync = require("readline-sync");

// JSON.parse() - Skriver om till vanlig JS.
// .toString() - Skriver om till sträng.
// const content =
//     "Why, sometimes I've believed as many as six impossible things before breakfast.";

// Uppgift 1
// fs.writeFileSync("alicequotes.txt", content);

// // Uppgift 2
// let text = fs.readFileSync("alicequotes.txt");
// text = text.toString();
// console.log(text);

// // Uppgift 3
// let css = fs.readFileSync("style.css");
// css = css.toString();

// let count = 0;

// for (let i = 0; i < css.length; i++) {
//     let currentChar = css[i];

//     if (currentChar === "#") {
//         count++;
//     }
// }

// console.log(count, "number of ID's");

// Uppgift 4.
// let fileName = readlineSync.question("Enter filename: ");
// let fileContent = readlineSync.question("Enter the content for the file: ");

// fs.writeFileSync(`${fileName}`, fileContent);

// Uppgift 5.
// let insultsData = fs.readFileSync("insults.json");
// insultsData = JSON.parse(insultsData);

// let count = 0;
// insultsData.insults.forEach((element) => {
//     console.log(element.insult);
//     count++;
// });
// console.log("Num of insults: ", count);

// Uppgift 6.
// let htmlData = fs.readFileSync("index.html");
// htmlData = htmlData.toString();
// console.log(htmlData);
