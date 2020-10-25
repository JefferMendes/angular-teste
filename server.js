const express = require('express')
const app = express()

app.use(express.static('./dist/<angular-heroku.json>'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/<angular-heroku.json>/'}
  );
});

app.listen(process.env.PORT || 8080);