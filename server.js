const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: [
        "https://ashokkaji-personal-portfolio.netlify.app",
        "https://kaleidoscopic-fox-a3fc3a.netlify.app",
        "https://ashokkaji-portfolio.netlify.app",
        "https://ashokkaji26.github."
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// Health check
app.get("/", (req, res) => {
    res.send("Backend is running");
});

// Contact API
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    console.log("New Contact Message:", { name, email, message });

    return res.status(200).json({
        success: true,
        message: "Message received successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});