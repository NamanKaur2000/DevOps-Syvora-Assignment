const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const helloRoute = require('./routes/hello');
app.use('/api', helloRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app; //For Testing 


