function printLebenslauf() {
    var lebenslaufUrl = "image/lebenslauf.pdf"; // Replace with your actual PDF file URL
    var win = window.open(lebenslaufUrl, "_blank");

    if (win) {
        // Ensure the print command runs after the PDF loads
        setTimeout(() => {
            win.print();
        }, 2000); // Adjust the delay as needed
    } else {
        alert("Please allow pop-ups to print the document.");
    }
}
