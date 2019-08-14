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
            <section className="search">
                <Helmet>
                    <title>Search</title>                    
                </Helmet>
                <Search {...this.props} />
            </section>
        )
    }
}