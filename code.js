window.addEventListener('load', () => {
    let long;
    let lat;
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = `https://cors-anywhere.herokuapp.com/`;
            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=9595c3efc7ed6ecc07b163d745519fc9`;
            
            fetch(api)
              .then(response => {
                return response.json()
              })
              .then(data => {
                  console.log(data);
              });
            
        })
    }else {
        console.log("cannot define location");

    }
});
