
async function getData(location) {
    const request = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=SZV84J3X87FSVFXN8RAKDZR9H`, { mode : 'cors'});
    response =  await request.json();
    return response.latitude;
}


const search = document.getElementById("search");
search.addEventListener("click", async () => {
    const locationInput = document.getElementById("location");
    let location = locationInput.value;
    const data = await getData(location);
    console.log(data);
});

