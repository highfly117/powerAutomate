
import fetch from "node-fetch";
import queryString from 'query-string';
import  moment from"moment";

// set the Timelines GET endpoint as the target URL
const getTimelineURL = "https://api.tomorrow.io/v4/timelines";

// get your key from app.tomorrow.io/development/keys
const apikey = "i0iQBy5pn2PzEj5BMD9ua43GDQkqIEZh";

// pick the location, as a latlong pair
let location = [51.38, -0.04];

// list the fields
const fields = [
  "precipitationIntensity",
  "precipitationType",
  "windSpeed",
  "windGust",
  "windDirection",
  "temperature",
  "temperatureApparent",
  "cloudCover",
  "cloudBase",
  "cloudCeiling",
  "weatherCode",
];

// choose the unit system, either metric or imperial
const units = "metric";

// set the timesteps, like "current", "1h" and "1d"
const timesteps = ["current", "1h", "1d"];

// configure the time frame up to 6 hours back and 15 days out
const now = moment.utc();
const startTime = moment.utc(now).add(0, "minutes").toISOString();
const endTime = moment.utc(now).add(1, "days").toISOString();

// specify the timezone, using standard IANA timezone format
const timezone = "Europe/London";

// request the timelines with all the query string parameters as options
const getTimelineParameters =  queryString.stringify({
    apikey,
    location,
    fields,
    units,
    timesteps,
    startTime,
    endTime,
    timezone,
}, {arrayFormat: "comma"});

const getWeather = () => {

    fetch(getTimelineURL + "?" + getTimelineParameters, {method: "GET", compress: true})
    .then((result) => result.json())
    .then((json) => console.log(json))
    .catch((error) => console.error("error: " + error))

}


export default getWeather;
