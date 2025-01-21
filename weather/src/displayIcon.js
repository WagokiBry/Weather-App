import "./cloudy.jpg"

export function displayIcon(data) {
    const firstDayData = data[0]; // Access the first object in the array
  
    // Access the icon property:
    const weatherIcon = firstDayData.icon;
    weatherIconContainer.innerHTML= ""
  
    if (weatherIcon === "partly-cloudy-day") {
      const imageElement = document.createElement('img');
      imageElement.src = '/workspaces/Weather-App/Weather-App/weather/src/images/cloudy.jpg'; // Replace with the actual path to your image
      imageElement.alt = "Partly Cloudy";
  
      const weatherIconContainer = document.getElementById('weatherIconContainer');
      
      weatherIconContainer.appendChild(imageElement);
    }
  }