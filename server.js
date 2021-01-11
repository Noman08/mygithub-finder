path = require('path');
express = require('express');

publicPath = path.join(__dirname, '/public');
port = process.env.PORT || 3000;
app = express();
app.use(express.static(publicPath));

app.listen(port, ()=> {
    console.log(`Server is up on ${port}`);
})