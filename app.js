async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const box = document.getElementById('weatherBox');
    const apiKey = "YOUR_API_KEY";
  
    if (!city) {
      box.innerHTML = "<p>Please enter a city name.</p>";
      return;
    }
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
      
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const icon = data.weather[0].icon;
  
      box.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" />
        <p><strong>${temp}°C</strong></p>
        <p>${desc}</p>
      `;
    } catch (err) {
      box.innerHTML = `<p>Error: ${err.message}</p>`;
    }
  }