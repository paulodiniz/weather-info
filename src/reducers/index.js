import { combineReducers } from 'redux';
import CitySelectionReducer from './CitySelectionReducer';
import CitiesReducer from './CitiesReducer';

export default combineReducers({
    selectedCityName: CitySelectionReducer,
    cities: CitiesReducer
});
