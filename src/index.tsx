import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createTheme, CssBaseline, Theme, ThemeProvider} from "@mui/material";
import {indigo} from "@mui/material/colors";
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const theme: Theme = createTheme({
    palette: {
        primary: indigo,
        background:{
            default: '#f2f2f4'
        }
    },
});
ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
            <CssBaseline/>
            <App/>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorkerRegistration.register();
