import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.jpg'

function Header() {
const Header = styled.header`
        background-color: blue;
        width: 100vw;
        height: 6vmax;
        position: sticky;
        top: 0;
        display: flex;
        z-index: 10;      

        img{
            height: 4vmax;
            width: 4vmax;
            margin: 1vmax 0 1vmax 4vmax;
        }

        nav{
            height: 6vmax;
            width: 92vw;
            .menuBar{
                font-size: 5vmax;
                font-weight: bolder;
                position: absolute;
                right: 5vw;
                bottom: .5vmax;
                color: white;
                height: 100%;
            }
            ul{
                display: none;
                background-color: white;
                flex-direction: column;
                height: calc(100vh - 6vmax);
                width: 100vw;
                justify-content: flex-start;
                position: absolute;
                right: 0;
                top: 6vmax;
                li{
                    font-weight: bolder;
                    margin: 0 0 6vh 0;
                    padding-left: 4vh;
                    list-style-type: none;
                    &:first-child{
                        margin-top: 10vh;
                    }                    
                    a{
                        color: blue;
                    }
                    &.active{
                        background-color: blue;
                        box-sizing: content-box;
                        padding:3vh 0 3vh 4vh;
                        a{
                            color: white;
                        }
                    }
                }
    
            }

            @media (min-width: 600px){
                .menuBar{
                    display: none;
                }
                ul{                                    
                    justify-content: center;
                    align-items: center;
                    background-color: transparent;
                    flex-direction: row;
                    height: 6vmax;
                    width: 100%;
                    position: relative;
                    top: 0;
                    display: flex;
                    li{
                        font-weight: bolder;
                        margin: 0 0 6vh 7vw;
                        padding: .5vw;
                        margin: 0 1.5vw;                 
                        &:first-child{                            
                        margin: 0 1.5vw;
                        }
                        a{
                            color: white;
                        }
                        &.active{
                            background-color: white;
                            box-sizing: content-box;
                            padding:1vmax 1vw 1vmax 1vw;
                            a{
                                color: blue;
                            }
                        }
                    }
                }
            }
        }
    
`;
  return (
    <>
      <Header>
            <a href="./" ><img src={logo} alt="logo"/></a>            
            <nav>
                <a className="menuBar">&#9776;</a>
                <ul className="menuContainer">
                    <li className="active"><a href="./">HOME</a></li>
                    <li><a href="./about.html">ABOUT</a></li>
                    <li><a href="./order.html">ORDER</a></li>
                </ul>
            </nav>
        </Header>
    </>
  )
}

export default Header;


// navbtn.addEventListener('click', e =>{
//     if(nav.style.display === 'none'){
//         nav.style.display = 'flex';
//         navbtn.innerHTML = '&#10006;';
//     }else{
//         nav.style.display = 'none';
//         navbtn.innerHTML = '&#9776;';
//     }
// }