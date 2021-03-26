import { Fragment } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalStyle } from './../../utils/styles/GlobalStyle';

import { AppWrapper } from './App.styles';

const App = () => {
	return (
		<Router>

			{/* <Fragment> */}
			<GlobalStyle />

			<header>
				<h1>Header</h1>
			</header>

			<AppWrapper>
				<h3>Main</h3>
				<Switch>
					<Route>

					</Route>

				</Switch>
			</AppWrapper>

			<footer>
				<h5>Footer</h5>
			</footer>

			{/* </Fragment> */}
		</Router>
	);

}

export default App;
