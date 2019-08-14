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
            <section className="search">
                <Helmet>
                    <title>City - {this.state.city.toUpperCase()}</title>                    
                </Helmet>
                <City {...this.state} />
            </section>
        )
    }
}