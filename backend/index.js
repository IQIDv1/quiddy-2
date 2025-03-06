require('dotenv').config();
const express = require('express');
const cors = require('cors');
const emailController = require('./controllers/emailController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use(cors({ origin: 'https://mail.google.com' }));
app.use(express.json());

app.post('/process-email', emailController.processEmail);
app.get('/health', (_, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));