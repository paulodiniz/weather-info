export const selectCity = (cityName) => {
    return {
        type: 'SELECT_CITY',
        payload: cityName
    };
};
