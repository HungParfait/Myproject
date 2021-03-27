window.addEventListener('load', () => {
    let long;
    let lat;
    if(navigation.location) {
        navigator.location.getCurrentPosition(position => {
            long = positon.coords.latitude;
            lat = position.coords.latitude;
            const proxy = ``
            const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={9595c3efc7ed6ecc07b163d745519fc9}`;
            
            
        })
    }else {

    }
})