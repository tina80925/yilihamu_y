const express    = require('express');
// const bodyParser = require('body-parser');

const {PORT: port = 8000 } = process.env;
const app = express();

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(port, () => console.log(`listening on port ${port}`));
