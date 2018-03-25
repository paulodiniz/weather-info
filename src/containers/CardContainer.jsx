import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Card from '../components/Card';

class CardContainer extends Component {
    state = { loaded: false, temperature: null };
    apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    componentWillMount() {
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&APPID=${this.apiKey}`)
            .then(response => this.parseTemperature(response))
            .then(temperature => this.convertToCelsius(temperature))
            .then(temperature => this.setState({temperature: temperature, loaded: true}) )
    }

    render() {
        if (this.state.loaded) {
            return(
                <Card city={this.props.city} temperature={this.state.temperature}/>
            );
        } else {
            return <p>Loading {this.props.city}...</p>
        }
    }

    parseTemperature(response) {
        return response.data.main.temp;
    }

    convertToCelsius(temperature) {
        return(temperature - 273.15).toFixed(2);
    }
};

const mapStateToProps = (state) => {
    return { state }
};

export default connect(mapStateToProps)(CardContainer);
