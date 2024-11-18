require('dotenv').config()
const express = require('express')
const axios = require('axios')
const path = require('path')

const app = express()
const API = process.env.API_KEY
const port = 4009

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.post('/weather', (req, res) => {
  axios({
    method: 'get',
    url: `http://api.openweathermap.org/data/2.5/weather?q=${req.body['zip']}&appid=89fa33807d3cd9fca161c65cfc278a4e`
  })
    .then((response) => {
      console.log(response)
      res.render('weather/show.ejs', { data: response.data })
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(port, () => {
  console.log(`App is running on part ${port}`)
})
