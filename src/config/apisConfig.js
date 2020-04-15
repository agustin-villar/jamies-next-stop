const PROXY_URL = 'https://dawn-boat-b9aa.easy-cors.workers.dev/';
const WEATHER_API_URL = 'https://dataservice.accuweather.com/';
const WEATHER_API_KEY = '8QjXT0WnbTpXAzYGdr1GX5sIHXrp5yQ8';
const FLIGHTS_API_URL = 'http://api.skypicker.com/';
const PROXIED_FLIGHTS_URL = `${PROXY_URL}?${FLIGHTS_API_URL}`;

export { WEATHER_API_URL, WEATHER_API_KEY, PROXIED_FLIGHTS_URL };
