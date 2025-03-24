const text = '              She said, \"Algaron, no!\"';

const escapedText = 'She said, \"Algaron, no!\"';

//^escaping quotes

function wordCount(str) {
    return str.trim().split(/\s+/).length;
}
console.log("Word Count:", wordCount(text));

//^word count

const trimmedText = text.trim();
console.log("Trimmed Text:", trimmedText);

//^whitespace removal

const wordsArray = trimmedText.split(" ");
console.log("Words Array:", wordsArray);

//^make array

const hasAlgaron = text.includes("Algaron");
console.log("Contains 'Algaron':", hasAlgaron);

const hasBill = text.includes("Bill");
console.log("Contains 'Bill':", hasBill);

//^word check

const slicedText = text.slice(10, 20);
console.log("Substring (Slice 10-20):", slicedText);

//^slice

const replacedText = text.replace("Algaron", "Algaronissivicuun");
console.log("Find and Replace:", replacedText);