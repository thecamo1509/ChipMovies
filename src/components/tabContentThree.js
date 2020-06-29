import React from 'react'
import styled from 'styled-components';
import ComingSoon from '../images/comingsoon.png'


//Third Panel Component from the available tabs
function tabContentThree() {
    return (
        <TabContainerThree>
        <div>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{ fontSize: '1.5rem'}}>Stay in touch, we still have great things for you</span>
                </div>
                {/* Tab Bottom Content */}
                <div className="tab-bottom-content">
                    {/* Coming Soon */}
                    <div>
                        <img src={ComingSoon} alt="Coming Soon"/>
                    </div>
                </div>
            </div>
        </div>
        </TabContainerThree>
    )
}

export default tabContentThree;

/* Main Container */
const TabContainerThree = styled.div`
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
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem;
        padding-bottom: 10%;
    }
`;