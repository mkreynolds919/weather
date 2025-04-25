
async function getData(location) {
    const request = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=SZV84J3X87FSVFXN8RAKDZR9H`, { mode : 'cors'});
    response =  await request.json();
    data = await Location.createInstance(response);
    return await data.temp;
}


const search = document.getElementById("search");
search.addEventListener("click", async () => {
    const locationInput = document.getElementById("location");
    let location = locationInput.value;
    const data = await getData(location);
    console.log(data);
});

class Location {
    constructor() {
        this.temp = null;
        this.tempmax = null;
        this.tempmin = null;
        this.uvindex = null;
        this.conditions = null;
        this. precipttype = null;
    }

    static async createInstance(response) {
        const instance = new Location();
        instance.temp = await response.currentConditions.temp;
        instance.tempmax = await response.days.tempmax;
        instance.tempmin = await response.days.tempmin;
        instance.uvindex = await response.uvindex;
        instance.conditions = await response.conditions;
        instance. precipttype = await response.preciptype;
        return instance;
    }
}