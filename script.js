function printLebenslauf() {
    var lebenslaufUrl = "image/lebenslauf-EN.pdf"; // PDF file URL
    console.log("Opening PDF:", lebenslaufUrl); // Logs the PDF URL in the console

    var win = window.open(lebenslaufUrl, "_blank");

    if (win) {
        console.log("PDF opened successfully.");
    } else {
        console.error("Failed to open PDF. Pop-ups may be blocked.");
    }
}
