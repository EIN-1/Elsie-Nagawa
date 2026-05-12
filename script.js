function printKontaktmeUrl() {
    var kontaktmeUrl = "image/portfolio_doc.pdf"; // PDF file URL
    console.log("Checking PDF existence:", kontaktmeUrl);

    // Check if the PDF file exists before opening it
    fetch(kontaktmeUrl, { method: "HEAD" })
        .then(response => {
            if (response.ok) {
                console.log("PDF exists. Opening...");
                window.open(kontaktmeUrl, "_blank"); // Open PDF in a new tab
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
