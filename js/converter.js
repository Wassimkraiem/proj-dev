const conversionRate = 3.4; // Conversion rate from EUR to TND
let originalPriceText = ""; // Store original price text
let isConverted = false; // State to check if price is converted

function toggleCurrency() {
    const priceElement = document.getElementById('price'); // Get the price element
    const button = document.getElementById('convert-btn'); // Get the button

    if (!isConverted) {
        // Store original price if not already stored
        if (!originalPriceText) {
            originalPriceText = priceElement.innerText; // Store original price
        }

        // Convert to TND
        const originalPrice = parseFloat(originalPriceText.replace(/[^\d.-]/g, '')); // Parse the original price as float
        const convertedPrice = (originalPrice * conversionRate).toFixed(2); // Convert price
        priceElement.innerText = `${convertedPrice} TND`; // Update the price on the page
        button.innerText = "Retourner en Euros"; // Change button text
    } else {
        // Revert to original price in EUR
        priceElement.innerText = originalPriceText; // Reset price to original
        button.innerText = "Convertir en TND"; // Reset button text
    }

    isConverted = !isConverted; // Toggle the conversion state
}
