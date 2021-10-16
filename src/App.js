import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES, PRIVATE_ROUTES_ADMIN, PRIVATE_ROUTES_MANAGER, PRIVATE_ROUTES_USER } from './routes/routes';
import './App.css';
import SignUp from './pages/signup';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          {
            showRoutesPublic(ROUTES)
          }
        </Switch>
      </Router>
    </div>
  );
}

const showRoutesPublic = (routes) => {
	var result = null;
	if (routes.length > 0) {
		result = routes.map((route, index) => {
			return (<Route
				key={index}
				path={route.path}
				exact={route.exact}
				render={props => <route.main {...props} />}
			/>)

		})
	}
	return result;
}

const showRotesPrivateManager = (routes, isLoggedIn, role) => {
	var result = null;
	if (routes.length > 0) {
		result = routes.map((route, index) => {
			return (<Route
				key={index}
				path={route.path}
				exact
				render={props => (isLoggedIn && role === 2) ? <route.main {...props} /> :
					<Redirect to={{
						pathname: '',
						state: { from: props.location }
					}} />}
			/>)

		})
	}
	return result;
}

export default App;
