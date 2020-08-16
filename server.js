const express = require('express')
const mysql = require('mysql')

const app = express()

app.get('/', (request, response) => {
    response.send ('<h1></h1>welcome to product services</h1>')
})

app.get('/product', (request, response) => {
    
    const connection = mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'app_db',
        port: 3306
    })

    connection.query('select * from product', (error, data) => {
        connection.end()
        if (error) {
            console.log(error)
            response.send(error)
        } else {
            response.send(data)
        }
    })
})

app.listen(3000, '0.0.0.0', () => {
    console.log('server started  on port 3000')
})