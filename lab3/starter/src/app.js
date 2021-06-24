"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
class App {
    constructor() {
        this.opwApiKey = '50d53005c0fd5f556bb4ef15224c4209';
        this.getCityInfo('zakopane');
    }
    getCityInfo(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const weather = yield this.getWeather('zakopane');
            this.saveData(weather);
        });
    }
    getWeather(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
            const weatherResponse = yield fetch(openWeatherUrl);
            const weatherData = yield weatherResponse.json();
            console.log(weatherData);
            return weatherData;
        });
    }
    saveData(data) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }
    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        }
        else {
            return {};
        }
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map