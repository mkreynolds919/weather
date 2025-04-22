
async function getData(location) {
    const request = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=SZV84J3X87FSVFXN8RAKDZR9H`, { mode : 'cors'});
    response =  await request.json();
    return response.latitude;
}


let data = getData('london');
data.then(function(response) {
    console.log(response);
})


