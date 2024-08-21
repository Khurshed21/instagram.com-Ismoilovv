const express = import('express');
const bodyParser = import('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/log-key', (req, res) => {
  const key = req.body.key;

  // Store the key в базе данных или любом другом устойчивом хранилище
  // Для целей этого примера, мы просто выведем ключ в консоль
  console.log(`Записанный ключ: ${key}`);

  res.sendStatus(200);
});