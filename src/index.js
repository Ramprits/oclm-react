import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';
import AuthProvider from './context/auth.context';
import App from './App';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
Amplify.configure(awsConfig);
const rootElement = document.querySelector('#root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>,
  rootElement
);
