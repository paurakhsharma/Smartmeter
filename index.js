const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let data = 'No data'

const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req, res) => {
    res.render('index', {
        data
    })
})

app.post('/post', (req, res) => {
    console.log(req.body.data)
    data = req.body.data
    // res.send(`Thank you for ${req.body.data}`)
    res.render('index', {
        data
    })
})

app.get('/data', (req,res) => {
    res.send(200, JSON.stringify(data))
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))