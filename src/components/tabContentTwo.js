import React from 'react'
import styled from  'styled-components';
import AntMan from '../images/antman-wasp.png'
import smile from '../images/smilelikeyours.png'
import fiftydates from '../images/50firstdates.png'
import fourtydays from '../images/40days.png'


// Second Panel Component from the available tabs
function tabContentTwo() {
    return (
        <TabContainer>
            <div>
                <div className="tab-content">
                    <div className="tab-top-content">
                        <span style={{ fontSize: '1.5rem'}}>Some of the titles you can find here!</span>
                    </div>
                    {/* Tab Bottom Content */}
                    <div className="tab-bottom-content">
                        {/* Ant Man */}
                        <div>
                            <img src={AntMan} alt="Ant-man"/>
                            <h3>Ant-Man and the Wasp</h3>
                        </div>
                        {/* Smile Like yours */}
                         <div>
                            <img src={smile} alt="Smile like yours"/>
                            <h3>Smile like yours</h3>
                        </div>
                        {/* 50 dates */}
                        <div>
                            <img src={fiftydates} alt="Fifty Dates"/>
                            <h3>50 First Dates</h3>
                        </div>
                        {/* 40 days 40 nights */}
                        <div>
                            <img src={fourtydays} alt="40 days 40 nights"/>
                            <h3>40 days and 40 nights</h3>
                        </div>
                    </div>
                </div>
            </div>
        </TabContainer>
    )
}

export default tabContentTwo;

/* Main Tab Container */

const TabContainer = styled.div`
    background: var(--main-deep-dark);

    .tab-content {
        margin: 0 15%;
    }

    // Tab Top Content
    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
    }

    span {
        grid-column: 5 / 9;
        text-align: center;
        padding: 0 2.5rem;
    }

    // Tab Bottom Content
    .tab-bottom-content {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem;
    }
`;