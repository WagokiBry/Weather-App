export function displayIcon (data){
    const firstDayData = data[0]; // Access the first object in the array

    // Access the icon property:
    const weatherIcon = firstDayData.icon;
    console.log(weatherIcon)
}



