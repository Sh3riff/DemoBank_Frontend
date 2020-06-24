import styled, { createGlobalStyle } from 'styled-components';
import bg from '../img/bg.jpg'

export default createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing: border-box;
    font-family: 'Gugi', cursive;
    outline: none;
    text-decoration: none;
    }
`;

export const WrapStyle = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5vh 0;
    @media (orientation: landscape){
        position: absolute;
        top: ${props => props.auth ? "7vh" : 0 };
    }

`;

export const ValidationError = styled.p`
    color: ${props => props.theme.color.red};
    font-size: calc(0.75rem + ((1vw - 3.75px) * 0.4036));
`;

export const CardContainer = styled.div`
    background-color: ${props => props.theme.color.white};
    border-radius: 5vmin;
    max-width: 90vw;
    min-width: 75vw;    
    margin-bottom: 3vmin;
    padding: 0 5vmin 5vmin;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    div{
        background-color: ${props => props.theme.color.red};
        align-self: center;
        position: relative;
        border-radius: 0 0 3.5vw 3.5vw;
        margin-bottom: 5vmin;
        h1{
            color: ${props => props.theme.color.white};
            margin: 0 3vw;
            font-size: calc(1.5rem + ((1vw - 3.75px) * 3.6327));
        }
    }

    p{
        font-size: calc(0.875rem + ((1vw - 3.75px) * 1.0091));
        line-height: calc(2 * (0.875rem + ((1vw - 3.75px) * 1.0091)));
        color: ${props => props.theme.color.red};
    }

`;

export const Button = styled.button`
    background-image: linear-gradient(to right, #08d3df, #7575ed, #f605fe);
    font-size: calc(1.125rem + ((1vw - 3.75px) * 1.2109));
    color: ${props => props.theme.color.white};
    min-width: 20%;
    position: relative;
    margin: 5vh 0;
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
`;

export const Toggle = styled.label`    
    position: relative;
    display: inline-block;
    width: 6vmin;
    height: 3.4vmin;

    input { 
    opacity: 0;
    width: 0;
    height: 0;
    }

    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    }

    .slider:before {
    position: absolute;
    content: "";
    height: 2.6vmin;
    width: 2.6vmin;
    left: .4vmin;
    bottom: .4vmin;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    }

    input:checked + .slider {
    background-color: ${props => props.theme.color.red};
    }

    input:focus + .slider {
        box-shadow: 0 0 1px ${props => props.theme.color.red};
    }

    input:checked + .slider:before {
    -webkit-transform: translateX(2.6vmin);
    -ms-transform: translateX(2.6vmin);
    transform: translateX(2.6vmin);
    }

    /* Rounded sliders */
    .slider.round {
    border-radius: 3.4vmin;
    }

    .slider.round:before {
    border-radius: 50%;
    }
`;

export const Select = styled.select`
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;       

    &::-ms-expand {
        display: none;
    }
    &:hover {
        border-color: #888;
    }
    &:focus {
        border-color: #aaa;
        box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
        box-shadow: 0 0 0 3px -moz-mac-focusring;
        color: #222;
        outline: none;
    }
`;

export const Transactions = styled.div`
    background-color: ${props => props.theme.color.white};
    border-radius: 5vmin;
    max-width: 90vw;
    min-width: 75vw;
    font-size: calc(0.875rem + ((1vw - 3.75px) * 1.0091));
    line-height: calc(2 * (0.875rem + ((1vw - 3.75px) * 1.0091)));
    color: ${props => props.theme.color.red};
    margin-bottom: 3vmin;
    padding: 0 5vmin 5vmin;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    h1{
        align-self: center;
        margin: 1vmin 0 3vmin;
        font-size: calc(1.125rem + ((1vw - 3.75px) * 1.2109));
    }

    div{
        p{
            margin-left: calc(.5 * (0.875rem + ((1vw - 3.75px) * 1.0091)));
            margin-left: calc(0.875rem + ((1vw - 3.75px) * 1.0091));
            &:before{
                content: '';                
                position: absolute;
                background-color: ${props => props.theme.color.red};
                height: calc(.5 * (0.875rem + ((1vw - 3.75px) * 1.0091)));
                width: calc(.5 * (0.875rem + ((1vw - 3.75px) * 1.0091)));
                transform: translate(-200%, 170%);
                border-radius: 50%;
            }

        }
    }
`;

export const FormContainer =  styled.div`
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
    h1{
        font-size: 5vmin;
    }
    span.error{
        color: ${props => props.theme.color.red};
        font-size: calc(0.875rem + ((1vw - 3.75px) * 1.0091));
        margin: 10px 0 0;
    }
    form{
        width: 100%;
        label{
            display: block;
            position: relative;
            margin: 4% 0;
            font-size: calc(0.875rem + ((1vw - 3.75px) * 1.0091));

            &:last-of-type{
                margin-bottom: 0;
            }

            input{
                width: 100%;
                margin-right: 1%;
                padding: .5vmin 0 0;
                border: none;
                outline: none;
                border-bottom: 2px solid ${props => props.theme.color.red};
                font-size: calc(0.875rem + ((1vw - 3.75px) * 1.0091));
            }
        }
        a{
            float: right;
            font-size: calc(0.75rem + ((1vw - 3.75px) * 0.4036));
            color: ${props => props.theme.color.red};
        }
        button{
            background-image: linear-gradient(to right, #08d3df, #7575ed, #f605fe);
            font-size: calc(1.125rem + ((1vw - 3.75px) * 1.2109));
            color: ${props => props.theme.color.white};
            min-width: 60%;
            position: relative;
            left: 20%;
            margin: 5vh 0 1vh;
            border-radius: 50px;
            cursor: pointer;

            &:hover{                        
                animation: hover .5s linear 0s infinite alternate;
            }

            @keyframes hover {
                0%   {background-image: linear-gradient(to right, #08d3df, #7575ed, #f605fe)}
                50%   {background-image: linear-gradient(to right, #f605fe, #08d3df, #7575ed)}
                100% {background-image: linear-gradient(to right,#f605fe, #7575ed, #08d3df)}
            }
        }
    }
    div{
        span{
            font-size: calc(0.75rem + ((1vw - 3.75px) * 0.4036));
        }
        a{
            color: ${props => props.theme.color.red};
            text-decoration: underline;
            font-size: calc(0.75rem + ((1vw - 3.75px) * 0.4036));
        }

    }
`;

export const NavBar = styled.nav`
    background-color: ${props => props.theme.color.red};
    height: 7vh;
    width: 100vw;
    padding: 1vh;
    display: flex;
    justify-content: space-around;
    position: fixed; 
    bottom: 0;
    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 5vh;
        svg{
            fill: ${props => props.theme.color.white};
            height: 3vh;
            width: 3vh;
        }
        span{
            color: ${props => props.theme.color.white};
            font-size: 1.5vmax;
        }
    }

    @media (orientation: landscape){
        justify-content: center;
        bottom: 93vh;
        a{
            margin: 0 1.5vmax;
            svg{
                display: none;
            }
            span{
                font-size: 1.5vmax;
            }
        }
    }
`;