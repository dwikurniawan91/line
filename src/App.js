import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Switch>
          {routes.map(route => (
            <Route key={route.name} {...route} />
          ))}
        </Switch>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
