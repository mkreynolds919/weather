
async function getData(location) {
    const request = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=SZV84J3X87FSVFXN8RAKDZR9H`, { mode : 'cors'});
    response =  await request.json();
    const data = await Location.createInstance(response);
    return data;
}


const search = document.getElementById("search");
search.addEventListener("click", async () => {
    const locationInput = document.getElementById("location");
    let location = locationInput.value;
    const data = await getData(location);
    console.log(data.conditions);
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
        instance.tempmax = await response.days[0].tempmax;
        instance.tempmin = await response.days[0].tempmin;
        instance.uvindex = await response.currentConditions.uvindex;
        instance.conditions = await response.currentConditions.conditions;
        instance.preciptype = await response.currentConditions.preciptype;
        return instance;
    }
}