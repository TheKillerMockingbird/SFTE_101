function convertCurrency(amount, toCurrency) {
    switch(toCurrency.toUpperCase()) {
        case "EUR":
            console.log("Converting from USD to EUR " + amount * 0.93);
            break;
        case "BRL":
            console.log("Converting from USD to BRl " + amount * 4.95);
            break;
        case "CRC":
            console.log("Converting from USD to CRC " + amount * 533.62);
            break;
        case "INR":
            console.log("Converting from USD to INR " + amount * 83);
            break;
        default:
            console.log("Currency isn't available for this. Sorry.");
            break;
    }
}

convertCurrency(100, "Brl");
convertCurrency(100, "EUR");
convertCurrency(100, "CrC");
convertCurrency(100, "inr");
convertCurrency(100, "bob");