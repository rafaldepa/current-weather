import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import City from './../components/City';

export default class CityPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: props.match.params.city
        }
    }
    render() {
        return(
            <section className="app__city">
                <Helmet>
                    <title>The current weather in {this.state.city.toUpperCase()}</title>                    
                </Helmet>
                <City {...this.state} {...this.props} />
            </section>
        )
    }
}