const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.json({ success: false, message: "All fields !" });
    }

    console.log("Contact Form Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.json({ success: true, message: "Message sent successfully!" });
});

app.use(express.static(path.join(__dirname)));

app.listen(3000, () => {
    console.log("http://localhost:3000");
});