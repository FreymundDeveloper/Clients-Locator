import React from 'react';
import { Theme } from './themes/theme';
import { GlobalStyles } from './themes/style';
import { RoutesCall } from './routes';

const App = () => {
    return (
        <Theme>
            <GlobalStyles />
            <RoutesCall />
        </Theme>
    );
}

export default App;