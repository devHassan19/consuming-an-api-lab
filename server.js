const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.urlencoded({ extended: false }))
const port = 4001

// app.get('/', (req, res) => {
//   axios({
//     method: 'get',
//     url: 'http://api.openweathermap.org/data/2.5/weather?zip=[ZIP CODE],us&units=imperial&appid=89fa33807d3cd9fca161c65cfc278a4e'
//   })
//     .then((response) => {
//       res.render('../views/weather/show.ejs', { data: response.data.Search })
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// app.use('/', async (req, res) => {
//   res.render('index.ejs')
// })

app.post('/weather', (req, res) => {
  const zip = req.body.zip

  try {
    const response = axios({
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?zip=99589,us&units=imperial&appid=89fa33807d3cd9fca161c65cfc278a4e`
    })
    const weatherData = response.data
    res.render('weather/show.ejs', { weatherData })
  } catch (error) {
    console.log(error)
  }
})

// app.get('/wether/show', (req, res) => {
//   axios({
//     method: 'get',
//     url: `http://api.openweathermap.org/data/2.5/weather?zip=94040,us&units=imperial&appid=89fa33807d3cd9fca161c65cfc278a4e`
//   })
//     .then((response) => {
//       res.render('weather/show.ejs', { data: response.data.Search })
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

app.get('/weather/show', (req, res) => {
  res.render('weather/show.ejs')
})
app.listen(port, () => {
  console.log(`App is running on part ${port}`)
})
