import React from 'react';
import { WrapStyle,MiniCover } from '../styledComponents/GlobalStyles';

const SignupComplete = () => {
    return (
        <WrapStyle>
          <MiniCover>
            <h1>Account created, you may login now.</h1>
            <a href="/login">login</a>
          </MiniCover>
        </WrapStyle>
    )
}

export default SignupComplete
