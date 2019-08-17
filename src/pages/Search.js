import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Search from './../components/Search';

export default class SearchPage extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return(
            <section className="app__search">
                <Helmet>
                    <title>Check the current weather in any city</title>                    
                </Helmet>
                <div className="app__header"><h2>Check the current weather in any city</h2></div>
                <Search {...this.props} />
            </section>
        )
    }
}