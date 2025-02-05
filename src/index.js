const express = require('express')
const app = express()
require('./config/db')

const setupandstartserver = async () => {
    const port = 5555
    app.listen(port, () => {
    
        console.log(`request listening at ${port}`)
         
    })
}
setupandstartserver()
