function printLebenslauf() {
    var lebenslaufUrl = "image/Elsie_Nagawa_Lebenslauf.pdf"; // PDF file URL
    console.log("Checking PDF existence:", lebenslaufUrl);

    // Check if the PDF file exists before opening it
    fetch(lebenslaufUrl, { method: "HEAD" })
        .then(response => {
            if (response.ok) {
                console.log("PDF exists. Opening...");
                window.open(lebenslaufUrl, "_blank"); // Open PDF in a new tab
            } else {
                console.error("PDF not found. Redirecting to 404 page.");
                window.location.href = "404.html"; // Redirect to 404 page
            }
        })
        .catch(error => {
            console.error("Error checking PDF:", error);
            window.location.href = "404.html"; // Redirect in case of fetch error
        });
}
