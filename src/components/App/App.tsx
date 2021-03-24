import { Fragment } from 'react';
import { GlobalStyle } from './../../utils/styles/GlobalStyle';

import { Wrapper } from './App.styles';

const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Wrapper>
				<header>
					<h1>Hello</h1>
				</header>

				<div className="App">
					<h2>Bellow</h2>
				</div>
			</Wrapper>
		</Fragment>
	);

}

export default App;
