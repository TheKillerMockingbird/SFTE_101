function convertCurrency(amount, fromCurrency, toCurrency) {
    let exchangeRate;

    switch (fromCurrency.toUpperCase() + "-" + toCurrency.toUpperCase()) {
        case "USD-EUR":
            exchangeRate = 0.93;
            break;
        case "EUR-USD":
            exchangeRate = 1.09;
            break;
        case "USD-INR":
            exchangeRate = 83;
            break;
        case "INR-USD":
            exchangeRate = 0.012;
            break;
        default:
            console.log("Currency isn't available for this. Sorry.");
            break;
    }

    return amount * exchangeRate;
}

console.log(convertCurrency(100, "USD", "EUR"));
console.log(convertCurrency(100, "USD", "INR"));
console.log(convertCurrency(100, "EUR", "usd"));
console.log(convertCurrency(100, "USD", "CRC"));