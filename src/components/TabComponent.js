import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabDevices from './tabs_nav/TabDevices';
import TabPrices from './tabs_nav/TabPrices';
import '../css/TabsNav.css'
import TabContentOne from './tabContentOne';

class TabComponent extends Component {
    state = {
        tabIndex: 0
    }
    render() {
        return (
            <div>
                <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}>
                    <TabList className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'active tab-selected' : null}`}>
                            <TabDoor />
                            <p style={{marginBottom: '1.875rem'}}><strong>Take a look at the Best <br/> Movies in SF</strong></p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'active tab-selected' : null}`}>
                            <TabDevices />
                            <p style={{marginTop: '-5.3125rem'}}><strong>En Tu Barrio <br/> Pela</strong></p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'active tab-selected' : null}`}>
                            <TabPrices />
                            <p><strong>Holiwi esto es una <br/> Prueba</strong></p>
                        </Tab>
                    </TabList>
                    {/* Tabs Content */}
                    <TabPanel>
                        <TabContentOne />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default TabComponent;