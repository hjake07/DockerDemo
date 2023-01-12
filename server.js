const website = require('express')()
const hostname = require('os').hostname()
website.get('/', (req, res)=>{
    res.send(`
    <!Doctype html>
        <html>
            <body>
                <h1>Hello</h1>
                <div>hostname:${hostname}</div>
            </body>
        </html>`)
})
website.listen(8080, '0.0.0.0')