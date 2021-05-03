import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const Weather = ({weatherData}) => (
    <Card className="main">
        <Card.Content>
            <Card.Header className="header">City Name: {weatherData.name} </Card.Header>

            <div className="flex">
                <p className="day"> Day: {moment().format('dddd')} </p>
                <p className="description"> Date: {moment().format('LL')} </p>
            </div>
            <div className="flex">
                <p className="temp"> Temperature: {weatherData.main.temp} </p>
                <p className="temp"> Description: {weatherData.weather[0].description} </p>
            </div>
            <div className="flex">
                <p className="sunrise-sunset"> Sunrise: {weatherData.sys.sunrise} </p>
                <p className="sunrise-sunset"> Sunset: {weatherData.sys.sunset} </p>
            </div>
            
        </Card.Content>
    </Card>
)

export default Weather;

