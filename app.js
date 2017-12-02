let express = require('express');
let app = express();

app.use(express.static('www'));

app.listen(4000, function () {
  console.log('Webserver listening on port 4000');
});
