import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import Layout from '../components/Layout';
import Welcome from './Welcome';
import { routes } from '../constants/routes';
import Master from './Master';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className='switch-wrapper'
        >
          <Route path={routes.MASTER} component={Master} />
          <Route exact path={routes.INDEX} component={Welcome} />
        </AnimatedSwitch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
