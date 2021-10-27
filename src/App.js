import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES, PRIVATE_ROUTES_ADMIN, PRIVATE_ROUTES_MANAGER, PRIVATE_ROUTES_USER } from './routes/routes';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import HeaderUser from './components/headerUser'
import LocalStorageService from './services/localStorage';

function App() {

  const isLoggedIn = () => {
	//   return true
	  return (LocalStorageService.token !=="" &&  LocalStorageService.token !==null );
  }

  return (
    <div className="app-container">
      <Router>
	    {isLoggedIn() ? <HeaderUser/> : <Header/>}
        <Switch>
          {
            showRoutesPublic(ROUTES)
          }
		  {
			showRoutesPrivateUser(PRIVATE_ROUTES_USER, isLoggedIn())
		  }
        </Switch>
	    <Footer/>
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

const showRoutesPrivateManager = (routes, isLoggedIn, role) => {
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

const  showRoutesPrivateUser = (routes, isLoggedIn, role) => {
	var result = null;
	if (routes.length > 0) {
		result = routes.map((route, index) => {
			return (<Route
				key={index}
				path={route.path}
				exact
				render={props => (isLoggedIn) ? <route.main {...props} /> :
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
