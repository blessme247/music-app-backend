
var express = require('express');
const cors = require('cors')
const corsOptions = require("./src/config/corsOptions")
require('dotenv').config()
const router = require('./src/routes/index')

const app = express();

const port = process.env.PORT 

// CORS
app.use(cors(corsOptions))

// built-in middleware for json
app.use(express.json())


// routes
app.use(router)


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});