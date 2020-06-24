import React from 'react';
import { NavLink} from 'react-router-dom';
import styled from 'styled-components';
import { WrapStyle } from '../styledComponents/GlobalStyles';

const Cover = styled.div`
    background-color: ${props => props.theme.color.white};
    border-radius: 5vmin;
    max-width: 90vw;
    min-width: ${props => props.full ? "75vw" : "50vmin"};
    margin-bottom: 3vmin;
    padding: 5vmin;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    a{
        background-image: linear-gradient(to right, #08d3df, #7575ed, #f605fe);
        font-size: calc(1.125rem + ((1vw - 3.75px) * 1.2109));
        color: ${props => props.theme.color.white};
        min-width: 60%;
        position: relative;
        margin: 5vh 0 1vh;
        border-radius: 50px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{                        
            animation: hover .5s linear 0s infinite alternate;
        }

        @keyframes hover {
            0%   {background-image: linear-gradient(to right, #08d3df, #7575ed, #f605fe)}
            50%   {background-image: linear-gradient(to right, #f605fe, #08d3df, #7575ed)}
            100% {background-image: linear-gradient(to right,#f605fe, #7575ed, #08d3df)}
        }
    }
`;

const SignupComplete = (props) => {
    return (
        <WrapStyle>
          <Cover>
            <h1>Account created, you may login now.</h1>
            <NavLink to={"/login"}>login</NavLink>
          </Cover>
        </WrapStyle>
    )
}

export default SignupComplete
