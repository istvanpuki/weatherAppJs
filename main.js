
function loadEvent() {

    const inputValue = document.getElementById('inputValue');
    const clickBtn = document.getElementById('clickBtn');
    const name = document.querySelector('.name');
    const desc = document.querySelector('.desc');
    const temp = document.querySelector('.temp');

    
    clickBtn.addEventListener("click", function() {
        //fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=780645f5cee19a00a603d8f76db647ed')
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&APPID=780645f5cee19a00a603d8f76db647ed')
        .then(res => res.json())
        .then(data => { console.log(data) 
            const cityName = data['name'];
            const cityTemp = data['main']['temp'];
            const cityDesc = data['weather'][0]['description'];

            name.innerHTML = "City: "+cityName;
            temp.innerHTML = "Temperature: "+cityTemp+" °C";
            desc.innerHTML = "Informations: "+cityDesc;
        })

        .catch(err => alert("Wrong city name"))
    })
}

window.addEventListener("load", loadEvent);
