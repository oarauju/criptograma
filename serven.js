const express = require('express');
const app = express();

app.use(express.static('public')); // Servindo arquivos da pasta "public"

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
