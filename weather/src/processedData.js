export function processWeatherData(data) {
    const processedData = [];
  
    for (const day of data.days) {
      processedData.push({
        date: day.datetime.split('T')[0], 
        conditions: day.conditions,
        high_temp: day.tempmax,
        low_temp: day.tempmin,
        icon: day.icon,
        description: day.description,
        address: data.address // Add address to the processed data
      });
    }
  
    return processedData;
  }