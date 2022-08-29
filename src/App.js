import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/sign-up' component={SignupPage} />
			</Switch>
		</Router>
	);
}

export default App;
