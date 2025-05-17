// Real-Time Clock
function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Proceed to Confirmation Page
function proceedToConfirmation() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const bot = document.getElementById("bot").value;

    if (!name || !email) {
        alert("Please fill all fields.");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("bot", bot);

    // Send WhatsApp message to the developer with the order details
    sendWhatsAppMessage(name, email, bot);

    // Redirect to confirmation page
    window.location.href = "confirmation.html";
}

// Function to send a WhatsApp message with user data
function sendWhatsAppMessage(userName, userEmail, userBot) {
    const developerPhone = "2349031705641"; // Your WhatsApp number (include country code)
    const message = encodeURIComponent(`*Suggestion Request:*
    *Name:* ${userName}
    *Email:* ${userEmail}
    *SELECTED Suggestion:* ${userBot}`);

    const whatsappLink = `https://wa.me/${developerPhone}?text=${message}`;
    window.open(whatsappLink, "_blank");
}

// Display Order Details on Confirmation Page
if (window.location.pathname.includes("confirmation.html")) {
    document.getElementById("orderDetails").innerHTML = `
        <p>Bot: <strong>${localStorage.getItem("bot")}</strong></p>
        <p>WhatsApp: <strong>${localStorage.getItem("name")}</strong></p>
        <p>Email: <strong>${localStorage.getItem("email")}</strong></p>
    `;
}
