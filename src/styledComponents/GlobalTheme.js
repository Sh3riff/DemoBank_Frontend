import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme ={
    color:{
        white: 'white',
        red: 'red',
    }    
};


const Theme = ({ children }) => (
    <ThemeProvider theme={ theme }>
        {children}
    </ThemeProvider>
  );

export default Theme;
