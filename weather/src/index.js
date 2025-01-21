import "./styles.css";
import {processWeatherData} from "./processedData.js";
import { displayWeatherData } from './displayWeather.js';
import { displayIcon} from "./displayIcon.js";


async function searchAndDisplayWeather(){
  
  const locationInput = document.getElementById('locationInput').value;
  
  // const loadingSpinner = document.getElementById('loadingSpinner');
  // const displayDiv = document.getElementById('displayDiv');
    try {
      let fetchedData = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInput}/today?unitGroup=metric&include=current&key=BGMXWPTCJ9EFT7U9HKV3TXT2L&contentType=json`
       ,
        { mode: "cors" }
      )

      if (!fetchedData.ok) {
        throw new Error(
          `API request failed with status: ${response.status}`
        );
      }
      let searchData = await fetchedData.json();
      const processedData = processWeatherData(searchData);
      displayWeatherData(processedData, displayDiv); 
     displayIcon(processedData)
      
// console.log(processedData)

      
    }



    catch (error) {
      console.error("Error fetching weather data:", error);
    // Handle the error here, e.g., display an error message to the user
    displayDiv.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
    };
  }

  const searchButton = document.getElementById('searchButton');
  searchButton.addEventListener("click",searchAndDisplayWeather)
