import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Card from '../components/Card';
import CityMap from '../components/CityMap';
import { selectCity } from '../actions';

class CardContainer extends Component {
    state = { loaded: false, temperature: null, lat: null, lng: null };
    apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&APPID=${this.apiKey}`)
            .then(response => this.parseResponse(response))
            .then(newState => this.setState(newState))
    }

    handleClick() {
        this.props.selectCity(this.props.city);
    }

    renderMap() {
        const { expanded } = this.props;
        if (expanded) {
            return(
                <CityMap
                    lat={this.state.lat}
                    lng={this.state.lng}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            );
        }
    }

    render() {
        if (this.state.loaded) {
            return(
                <div>
                  <a href="#" onClick={this.handleClick}>
                    <Card
                        city={this.props.city}
                        temperature={this.state.temperature}
                    />
                  </a>
                  {this.renderMap()}
                </div>
            );
        } else {
            return <p>Loading {this.props.city}...</p>
        }
    }

    parseResponse(response) {
        return {
            loaded: true,
            temperature: this.convertToCelsius(response.data.main.temp),
            lat: response.data.coord.lat,
            lng: response.data.coord.lon
        };
    }

    convertToCelsius(temperature) {
        return(temperature - 273.15).toFixed(2);
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedCityName == ownProps.city;
    return { expanded };
};

const mapDispatchToProps = { selectCity }
export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
