import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const refresh = () => {
    window.location.reload();
}

const Weather = ({weatherData}) => (
    <div className="main">
        
            <div className="top">
                <p className="header">City Name: {weatherData.name} </p>
                <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
            </div>
            <div className="flex">
                <p className="day"> Day: {moment().format('dddd')} </p>
                <p className="description"> Date: {moment().format('LL')} </p>
            </div>
            <div className="flex">
                <p className="temp"> Temperature: {weatherData.main.temp} &deg;F</p>
                <p className="temp"> Description: {weatherData.weather[0].description} </p>
            </div>
            <div className="flex">
                <p className="sunrise-sunset"> Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')} </p>
                <p className="sunrise-sunset"> Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')} </p>
            </div>
            
    </div>
)

export default Weather;

