const express = require('express');
const app = express();

app.use(express.json())

app.get('*', (req, res) => {
    res.status(404).json({ message: 'Page Not Found' });
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server running on localhost:${port}`));