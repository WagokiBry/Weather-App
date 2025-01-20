

export function displayWeatherData(weatherData, displayDiv) {
    displayDiv.innerHTML = ''; // Clear any previous content
  
    weatherData.forEach(day => {
      const dayDiv = document.createElement('div');
      dayDiv.innerHTML = `
        <h3>Date: ${day.date}</h3>
        <p>Conditions: ${day.conditions}</p>
        <p>High: ${day.high_temp}°C</p>
        <p>Low: ${day.low_temp}°C</p>
        <p>Weather description: ${day.description}</p>
        <p>Weather icon: ${day.icon}</p>
      `;

      
      displayDiv.appendChild(dayDiv);
    });
  }