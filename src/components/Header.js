import React, { Component } from 'react';
import logo from '../images/logo.png';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import {Button} from './Button';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'
import { HashLink as Link } from 'react-router-hash-link';
import { ScrollTo } from 'react-scroll-to';

class Header extends Component {
    render() {
        return (
            <HeaderComponent className="header-container">
                <div className="header-top">
                    <Logo src={logo} />
                </div>
                {/* Header Content */}
                <div className="header-content">
                    <Title>Find your Movies</Title>
                    <SubTitle>ALL OVER SAN FRANCISCO</SubTitle>
                    <ScrollTo>
                    {({ scroll }) => (
                        <Button className="main-offer-btn" primary onClick={() => scroll({ x: 20, y: 550, smooth: true })}><Link to="/TabComponent">TRY IT NOW</Link><Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} /></Button>)}
                    </ScrollTo>
                </div>
            </HeaderComponent>
        )
    }
}

export default Header;

// Logo ChipMovies
const Logo = styled.img`
    width: 20rem;
    height: 10rem;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// Header Container
const HeaderComponent = styled.div`
    .signIn-btn {
        right: 0;
        margin: 1.125rem 3% 0;
        padding: 0.4375rem 1.0;
        font-weight: 400;
        line-height: normal;
        border-radius: 0.1875rem;
        font-size: 1rem;
        background: var(--main-red);
        position: absolute;
        translate: transform(-50%, 50%);
        cursor: pointer;
        transition: background 0.2s ease-in;
        &:hover {
            background: var(--main-red-hover);
        }
    }

    // Header Top
    .header-top {
        position: relative;
        height: 10rem;
        z-index: 1;
    }

    // Header Content
    .header-content {
        width: 65%;
        position: relative;
        margin: 4.5rem auto 0;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: column;
        z-index: 1;
    }

    .Icon svg {
        vertical-align: bottom;
        margin-left: 1.5rem;
    }
`;

// Main Title
const Title = styled.h1`
    margin: 0 0 1.2rem;
    font-size: 5rem;
    font-weight: 700;
    line-height:1.1em;
`;

// SubTitle
// Main Title
const SubTitle = styled.h2`
    margin: 0 0 1.875rem;
    font-size: 1.875rem;
    font-weight: 400;
    line-height: 1.25em;
    text-transform: uppercase;
`;