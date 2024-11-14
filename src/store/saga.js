import {put, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {GET_DASHBOARD, setDashboard} from './actions/getDashboardAction';
// import {GET_FORECAST, setForecast } from './actions/getForecastAction';
// import { GET_AQ, setAQ } from './actions/getAQ';
// import { GET_WEATHER_BY_COORDS} from './actions/getWeatherByCoords';
// import { GET_SAVEDCITY, setSavedCity } from './actions/getSavedCityAction';
// import { ADD_TO_SAVEDCITY } from './actions/addToSavedCitiesAction';
// import { DELETE_FROM_SAVEDCITY } from './actions/deleteFromSavedCitiesAction';
// import { GET_CHANGE_THEME, ChangeTheme} from './actions/changeTheme';
// import { GET_SEARCH_CITY, setSearchCity } from './actions/searchCity';


export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'


export function requestSearchCity(input) {
    return axios.get(`${GEO_API_URL}/cities?minPopulation=100000&limit=10&namePrefix=${input}`, {
        // headers: {
        //     'X-RapidAPI-Key': '5d95365d57mshfec75e7e062828fp10961cjsne04db372b400',
        //     'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        // }
    })
}

//! export function* handleSearchCity(action) {
//     if(action.input.length < 1) {
//         yield put(setDashboard([]));
//         return
//     }
//     try{
//         const response = yield call(() => requestSearchCity(action.input));
//         const {data} = response.data;
//         // yield put(setSearchCity(data));
//     } catch(error) {
//         console.log(error);
//     }
// }

export async function requestGetDashboard(user_id) {
    return axios.get(`https://fintracker-cpbg.onrender.com/dashboard/${user_id}`)
}

export function* handleGetDashboard(action) {
    try{
        const response = yield call(() => requestGetDashboard(action.user_id));
        const {data} = response;
        console.log(data);
        yield put(setDashboard(data));
    } catch(error) {
        console.log(error);
    }
}

// export function requestGetSavedCitiesWeather(city) {
//     return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf35cac91880cb98375230fb443a116f&units=metric`)
// }

// export function* handleGetSavedCitiesWeather(action) {
//     try{
//         let cities = (JSON.parse(localStorage.savedCity) || []);
//         let data = [];
//         for (let city of cities) {
//             const response = yield call(() => requestGetSavedCitiesWeather(city));
//             data.push(response.data);
//         }
//         yield put(setSavedCity(data));
        
//     } catch(error) {
//         console.log(error);
//     }
// }

// export function* handleChangeTheme() {
//     try{
//         let theme = (localStorage.theme === 'dark') ? 'light' : 'dark';
//         localStorage.theme = theme;
//         yield put(ChangeTheme(theme));
//     } catch(error) {
//         console.log(error);
//     }
// }

// export function requestGetWeatherByCoords(lat, lon) {
//     return axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=bf35cac91880cb98375230fb443a116f&units=metric`)
// }

// export function* handleGetWeatherByCoords(action) {
//     try{
//         const response = yield call(() => requestGetWeatherByCoords(action.lat, action.lon));
//         const {data} = response;
//         const cityName = {city: data[0].name};
//         yield (handleGetWeather(cityName));
//         yield handleGetForecast(cityName);
//     } catch(error) {
//         console.log(error);
//     }
// }


// export function requestGetForecast(city) {
//     return axios.request({
//         method: 'get',
//         url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=bf35cac91880cb98375230fb443a116f&units=metric`
//     })
// }

// export function* handleGetForecast(action) {
//     try{
//         const response = yield call(() => requestGetForecast(action.city));
//         const {data} = response;
//         yield put(setForecast(data))

//     } catch(error) {
//         console.log(error);
//     }
// }

export function* watcherSaga () {
    yield takeLatest(GET_DASHBOARD, handleGetDashboard);
    // yield takeLatest(GET_WEATHER_BY_COORDS, handleGetWeatherByCoords);
    // yield takeLatest(GET_FORECAST, handleGetForecast);
    // yield takeLatest(GET_AQ, handleGetAQ);

}