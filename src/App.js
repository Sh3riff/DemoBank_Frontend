import React from 'react';
import GlobalStyles from './styledComponents/GlobalStyles';
import { AuthContextProvider, LoadContextProvider, AccountContextProvider} from "./contexts";
import Theme from "./styledComponents/GlobalTheme";
import AppRoutes from "./customRoutes/appRoutes";

function App() {
  return (
    <> 
      <GlobalStyles />
      <Theme>
        <LoadContextProvider>
          <AuthContextProvider>
            <AccountContextProvider>
              <AppRoutes />
            </AccountContextProvider>
          </AuthContextProvider>
        </LoadContextProvider>
      </Theme>      
    </>
  )
}

export default App;