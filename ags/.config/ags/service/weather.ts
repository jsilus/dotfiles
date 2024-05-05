import options from "options"
import icons from "lib/icons"

const { interval, key, latitude, longitude } = options.datemenu.weather

class Weather extends Service {
    static {
        Service.register(this, {}, {
            "available": ["bool", "r"]
            "city": ["string", "r"],
            "sunrise": ["number", "r"],
            "sunset": ["number", "r"],
            "weather": ["jsobject", "r"],
        })
    }

    #forecast: Forecast = null

    #available = false
    get available() { return this.#available }

    get city() { return this.#Forecast?.city.name }
    get sunrise() { return this.#Forecast?.city.sunrise }
    get sunset() { return this.#Forecast?.city.sunset }

    get weather() { return this.#Forecast?.list.map(f => { return {
            time: f.dt,
            temp: f.main.temp,
            feels_like: f.main.feels_like,
            weather: f.weather?.[0].description,
            icon: icons.weather?.[f.weather?.[0].icon] || "weather-none-available",
        } : WeatherItem
    }) }

    async #fetch() {
        const url = "https://api.openweathermap.org/data/2.5/forecast"
        const res = await Utils.fetch(url, {
            params: {
                lat: latitude.value,
                lon: longitude.value,
                appid: key.value,
                units: unit.value,
            },
        })
        return await res.json()
    }

    constructor() {
        super()
        if (!key.value)
            return this
        this.#available = true

        Utils.interval(interval.value, () => {
            this.#fetch().then(forecast => {
                this.#forecast = forecast as Forecast
                this.changed("city")
                this.changed("sunrise")
                this.changed("sunset")
                this.changed("weather")
            })
        })
    }
}

export default new Weather

type Forecast = {
    city: {
        name: string,
        sunrise: number,
        sunset: number,
    }
    list: Array<{
        dt: number
        main: {
            temp: number
            feels_like: number
        },
        weather: Array<{
            main: string,
            description: string,
            icon: string,
        }>
    }>
}

type WeatherItem = {
    time: number,
    temp: number,
    feels_like: number,
    weather: string,
    icon: string,
}
