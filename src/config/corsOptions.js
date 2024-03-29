// CROSS ORIGIN RESOURCE SHARING
const whitelist = [ 'http://localhost:5000', 'http://localhost:5173']
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin){
            callback(null, true)
            // allow
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    }, optionsSuccessStatus: 200
}

module.exports = corsOptions