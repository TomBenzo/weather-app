var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var High = document.querySelector('#temp_max')
var Low = document.querySelector('#temp_min')
var ForeCast = document.querySelector('#description')
var Humidity = document.querySelector('#humidity')


const apikey = "ca71421c749b6185796346f315c13b26"

function conversion(val) {
    return ((parseInt(val) - 273.15) * 9/5 + 32).toFixed(2)
}

btn.addEventListener('click', function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputval.value}&appid=${apikey}`)
        .then(res => res.json())
        .then(data => {
            var placename = data['name']
            console.log(placename)
            var desc = data['weather'][0]['description']
            console.log(desc)
            var high = data['main']['temp_max']  //{conversion(high)}
            console.log(conversion(high))
            var low = data['main']['temp_min']  // {conversion(low)}
            console.log(conversion(low))
            var humid = data['main']['humidity'] 
            console.log(humid)
            
            
            city.innerHTML=`Weather of <span> ${placename}</span>`
            High.innerHTML=`High: <span>${conversion(high)}F</span>`
            Low.innerHTML=`Low: <span> ${conversion(low)}F</span>`
            ForeCast.innerHTML=`Forecast: <span> ${desc}</span>`
            Humidity.innerHTML=`Humidity:<span>${humid}F</span>`
        })
})


// getData = function(city){
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
//         .then((res) => res.json())
//         .then((data) => displayWeather(data))
//     }
// displayWeather = function (data){
//             var placename = data['name']
//             var desc = data['weather']['description']
//             var high = ['main']['temp_max']  //{conversion(high)}
//             var low = ['main']['temp_min']  // {conversion(low)}
//             var humid = ['main']['humidity'] // {conversion(humidity)}

//             city.innerHTML=`Weather of <span> ${placename}</span>`
//             High.innerHTML=`High: <span>${conversion(high)}</span>`
//             Low.innerHTML=`Low: <span> ${conversion(low)}</span>`
//             ForeCast.innerHTML=`Forecast: <span> ${desc}</span>`
//             Humidity.innerHTML=`Humidity:<span>${conversion(humid)}</span>`
// }
// search = function() {
//     getData(document.querySelector('#cityinput').value)
// }

// conversion = function(val) {
//     return ((val - 273.15) * 9/5 + 32).toFixed(2)
// }

// document.querySelector("#add").addEventListener('click', function () {
//     search() })