let path = require('path');
let express = require('express');
let app = express();
let mainRouter = require('/Users/user/Desktop/Software3/Lab2/mainRoutes');

let port = process.env.PORT || 3000;

app.use(mainRouter);
app.listen(port);
console.log("Express server running on port 3000");
