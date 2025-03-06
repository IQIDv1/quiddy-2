const express = require('express');
const cors = require('cors');
const emailController = require('./controllers/emailController');

const app = express();
app.use(cors({ origin: 'https://mail.google.com' }));
app.use(express.json());

app.post('/process-email', emailController.processEmail);
app.get('/health', (_, res) => res.json({ status: 'ok' }));

app.listen(3000, () => console.log('Server running on port 3000'));
