import React from 'react';
import { connect } from 'react-redux';
import CardContainer from '../containers/CardContainer';

const CityWeatherList = ({cities}) => {
    return(
        <main class="mw6 center">
          {cities.map(city => <CardContainer city={city} />)}
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities
    }
};

export default connect(mapStateToProps)(CityWeatherList);
