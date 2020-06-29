import React, { Component } from 'react';
import Header from '../components/Header';
import TabComponent from '../components/TabComponent';

/* Main Component including the two sections of the APP */
class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <TabComponent />
            </div>
        )
    }
}

export default Main;