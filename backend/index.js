const fs = require('fs');
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile)

const express = require('express');
const app = express();

app.get('/:id/transactions', async (req, res) => {
  try {
    const data = await readFile('../nordea-responses/account-txns.json');
    const json = JSON.parse(data);
    res.json(json);
  } catch(e) {
    res.status(500);
    res.json(e);
  }
});

app.use(express.static('static'));

const port = 3000;
app.listen(port, () => console.log(`GOLD-JACK backend running on port ${port}`));
