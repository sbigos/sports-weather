fetch('https://api.weatherapi.com/v1/forecast.json?key=94aa558eb732421292340558200712&q=Las Vegas&days=1')
    .then(response => response.json())
    .then(forecast => showForecast(forecast.results()));

showForecast = forecast => {
    const forecastDiv = document.querySelector('#las-vegas-forcast');
    const forecastElement = document.createElement('p');
    forecastElement.innerText = '${forecast.text}';
    forecastDiv.append(forecastElement);
}
