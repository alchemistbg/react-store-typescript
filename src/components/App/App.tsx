//Import external libraries
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import internal libraries

//Import components
import Header from './../Header/Header';

//Import styles
import { GlobalStyle } from './../../utils/styles/GlobalStyle';

import { AppWrapper } from './App.styles';

const App = () => {
	return (
		<Router>

			{/* <Fragment> */}
			<GlobalStyle />

			<Header />

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
