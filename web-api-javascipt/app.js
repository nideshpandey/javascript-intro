var button = document.querySelector('.button');

var inputValue = document.querySelector('.inputValue');

var nameCity = document.querySelector('.nameCity');

var description = document.querySelector('.description');

var temperature = document.querySelector('.temperature');

var locationButton = document.querySelector('.locationButton');

//const apiKey = process.env.API_KEY ;

 
const API_KEY = 'YOUR_API_KEY';

button.addEventListener('click', () => {

    const weatherData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(err => alert('Wrong city name !'))

    const display = async () => {

        let data = await weatherData
        console.log(data);

        let nameValue = 'City Name: ' + data.name;
        let descValue = 'Description: ' + data.weather[0].description;
        let tempValue = 'Temperature: ' + data.main.temp + ' ºC';

        //This is where the data is passed to be displayed in HTML page.
        nameCity.innerHTML = nameValue;
        description.innerHTML = descValue;
        temperature.innerHTML = tempValue;
    }

    display()
})

locationButton.addEventListener('click', ()=>{
    console.log('Location Button Clicked');

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);

        } else {
          nameCity.innerHTML = "Geolocation is not supported by this browser.";
        }
      }
      getLocation();
      
        function showPosition(position) {
        // nameCity.innerHTML = "Latitude: " + position.coords.latitude +
        // "<br>Longitude: " + position.coords.longitude;
        
        var latitude = position.coords.latitude;

        var longitude = position.coords.longitude;

        console.log(latitude, longitude);

        const weatherData = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(err => alert('Wrong city name !'))

        const display = async () => {

            let data = await weatherData
            console.log(data);
    
            let nameValue = 'City Name: ' + data.name;
            let descValue = 'Description: ' + data.weather[0].description;
            let tempValue = 'Temperature: ' + data.main.temp + ' ºC';
    
            //This is where the data is passed to be displayed in HTML page.
            nameCity.innerHTML = nameValue;
            description.innerHTML = descValue;
            temperature.innerHTML = tempValue;
        }
    
        display()


}


})

