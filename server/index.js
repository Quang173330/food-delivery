const express = require('express');
const path = require('path'); // NEW
const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(express.static(DIST_DIR)); // NEW
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 }
}))
app.get('*', (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
});
app.listen(port, () => console.log('port' + port));
