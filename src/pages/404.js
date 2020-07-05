import React from 'react';
import { WrapStyle,MiniCover } from '../styledComponents/GlobalStyles';

const PageNotFound = () => {
    return (
        <WrapStyle>
          <MiniCover>
            <h1>Page Not Found</h1>
            <a href="/">Homepage</a>
          </MiniCover>
        </WrapStyle>
    )
}

export default PageNotFound
