import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SamplePage from './Pages/SamplePage';
import DataDictionaryPage from './Pages/DataDictionaryPage';
import TablePage from './Pages/TablePage';
import FieldPage from './Pages/FieldPage';
import Error404 from './Pages/404';
import Login from './Auth/Login';
import Register from './Auth/Register';
import ForgotPasswordPage from './Auth/ForgotPassword';

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useSelector(({ auth }) => auth);
  return (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  const { authUser } = useSelector(({ auth }) => auth);
  const location = useLocation();

  if (location.pathname === '' || location.pathname === '/') {
    return <Redirect to={'/sample-page'} />;
  } else if (authUser && location.pathname === '/signin') {
    return <Redirect to={'/data-page'} />;
  }

  return (
    <React.Fragment>
      <Switch>
        <Route path="/sample-page" component={SamplePage} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />

        <RestrictedRoute path="/data-page" component={DataDictionaryPage} />
        <RestrictedRoute path="/table-page" component={TablePage} />
        <RestrictedRoute path="/field-page" component={FieldPage} />

        <Route component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
