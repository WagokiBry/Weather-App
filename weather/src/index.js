import "./styles.css";
import {processWeatherData} from "./processedData.js";

async function searchAndDisplayWeather(location){
    
    try {
      let fetchedData = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&include=current&key=BGMXWPTCJ9EFT7U9HKV3TXT2L&contentType=json`
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

console.log(processedData)

      
    }



    catch (error) {
      console.error("Error fetching GIF:", error);
      // Handle the error here, e.g. display an error message to the user
      // img.src = "sonic.jpg"; // Set a placeholder image
    };
  }

  searchAndDisplayWeather("paris")
