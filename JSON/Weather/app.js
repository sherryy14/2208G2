document.getElementById("city").addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
    const city = document.getElementById("city").value;
    const weather = fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=3de7a47ee5bd4401901115244230501&q=${city}&days=5`
        );
        weather
        .then((weatherdata) => {
            return weatherdata.json();
        })
        .then((weatherdetails) => {
            // if (event.key == "Enter") {
                console.log(weatherdetails);
                document.getElementsByTagName('h2')[0].innerHTML = city
                document.getElementsByTagName('img')[0].src =  weatherdetails.current.condition.icon
                document.getElementsByTagName('h1')[0].innerHTML =  weatherdetails.current.condition.text
                document.getElementsByClassName('feelc')[0].innerHTML =  `${weatherdetails.current.feelslike_c}<sup>0</sup>C`;
                
                document.getElementsByClassName('feelf')[0].innerHTML =  `${weatherdetails.current.feelslike_f}<sup>0</sup>F`;
                
                
            // }
            })
            .catch((err) => {
      console.log(err);
    });
}
});
