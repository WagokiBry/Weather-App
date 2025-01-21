import partlyCloudy from './images/cloudy.jpg'; 


export function displayIcon(data) {
    const firstDayData = data[0]; // Access the first object in the array
  
    // Access the icon property:
    const weatherIcon = firstDayData.icon;
    console.log(weatherIcon)
    weatherIconContainer.innerHTML= ""
  
    if (weatherIcon.includes("partly-cloudy-day")) {
      const imageElement = document.createElement('img');
      imageElement.src = partlyCloudy;
      imageElement.alt = "Partly Cloudy";
  
      const weatherIconContainer = document.getElementById('weatherIconContainer');
      
      weatherIconContainer.appendChild(imageElement);
    }
  }