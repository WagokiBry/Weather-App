import "./styles.css"

async function searchAndDisplayWeather(location){
    
    try {
      let fetchedData = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days&key=BGMXWPTCJ9EFT7U9HKV3TXT2L&contentType=json`
       ,
        { mode: "cors" }
      )

      if (!fetchedData.ok) {
        throw new Error(
          `API request failed with status: ${response.status}`
        );
      }
      let searchData = await fetchedData.json();
console.log(searchData)

      
    }



    catch (error) {
      console.error("Error fetching GIF:", error);
      // Handle the error here, e.g. display an error message to the user
      // img.src = "sonic.jpg"; // Set a placeholder image
    };
  }

  searchAndDisplayWeather("ottawa")
