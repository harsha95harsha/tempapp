const express = require('express')
const app = express()
const morgan = require('morgan')

const logger = require('./logger')
const authorize = require('./authorize')

//app.use([logger, authorize])
//app.use(express.static('./public'))
//api/home/about/products 

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('products')
})
app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('items')
})

app.listen(5000, () => {
    console.log('Server listening on port 5000...')
})
