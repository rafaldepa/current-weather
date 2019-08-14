import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';

export default class City extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: props.city,
            weather: undefined,
            fetched: false,
            processing: true
        }
    }

    constructApiURL = (type, data) => {
        const api = {
            url: 'https://api.openweathermap.org/data/2.5/weather',
            city: (data.city) ? data.city : undefined,
            lang: 'en',
            cords: {
                x: (data.cords) ? data.cords.x : undefined,
                y: (data.cords) ? data.cords.y : undefined
            },
            key: 'a8ae92c824cd6654864bb1ee6c903c23'
        }

        switch(type) {
            case 'cords':
                return `${api.url}?lon=${api.cords.x}&lat=${api.cords.y}&lang=${api.lang}&appid=${api.key}&units=metric`;
            case 'city':
                return `${api.url}?q=${api.city}&lang=${api.lang}&appid=${api.key}&units=metric`;
            default:
                return false;
        }
    }

    getWeather = () => {
        const self = this;
        axios({
            method: 'post',
            url: this.constructApiURL('city', { city: this.state.city })
        })
        .then(function(response) {
            if(response.status === 200) {
                self.setState({
                    city: response.data.name,
                    fetched: true,
                    processing: false,
                    weather: {
                        name: response.data.weather[0].main,
                        description: response.data.weather[0].description,
                        icon: response.data.weather[0].icon,
                        temp: response.data.main.temp,
                        temp_min: response.data.main.temp_min,
                        temp_max: response.data.main.temp_max,
                        pressure: response.data.main.pressure,
                        humidity: response.data.main.humidity,
                        clouds: response.data.clouds.all                   
                    }
                });
            } else {
                alert("Something went wrong. Please try again.")
            }
        })
        .catch(function(error) {
            console.log(error);
        }) 
    }

    componentWillMount = () =>{
        this.getWeather();
    }

    render() {
        return(
            <div className="city">
                {!this.state.fetched
                    ?   <div className="city__loading"><Loading /></div>
                    :   <div className="city__content">
                            <h1 className="city__name">{this.state.city}</h1>
                            <div className="city__weather">
                                <h2 className="city__weather--name">{this.state.weather.name}</h2>
                                <p className="city__weather--description">{this.state.weather.description}</p>
                            </div>
                            <div className="city__temp">
                                <b className="city__temp--current">{this.state.weather.temp}°C</b>
                                <small className="city__temp--range">Min. {this.state.weather.temp_min}°C Max. {this.state.weather.temp_max}°C</small>
                            </div>
                        </div>            
                }               
            </div>
        )
    }
}