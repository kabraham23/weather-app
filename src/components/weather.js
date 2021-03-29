import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const Weather = ({weatherData}) => (
    <Card>
        <Card.Content>
            <Card.Header className="header">City Name: {weatherData.name} </Card.Header>
            <p> Temperature: {weatherData.main.temp} </p>
            <p> Sunrise: {weatherData.sys.sunrise} </p>
            <p> Sunset: {weatherData.sys.sunset} </p>
            <p> Description: {weatherData.weather[0].description} </p>
            <p> Day: {moment().format('dddd')} </p>
            <p> Date: {moment().format('LL')} </p>
        </Card.Content>
    </Card>
)

export default Weather;

