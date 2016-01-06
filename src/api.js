const _ = require('lodash')
const APIKEY = "058e0caee9fe24d810aa10039a9fc8fb"
const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?'
const queryUrl = rootUrl + 'APPID=' + APIKEY

const kelvinToF = (kelvin) => Math.round((kelvin - 273.15) * 1.8 + 32) + ' ˚F'

module.exports = async function(latitude, longitude) {
    const url = `${queryUrl}&lat=${latitude}&lon=${longitude}`
    // let resp = await fetch(url)
    return fetch(url)
        .then((response) => response.json())
        .then((json) => ({
            city: json.name,
            temperature: kelvinToF(json.main.temp),
            description: _.capitalize(json.weather[0].description)
        }))
}