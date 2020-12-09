import React from 'react';
import './App.css';
import { Button } from 'antd';
import { Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
	return (
		<Switch>
			<Route path="/example">
				<div className="App">
					<header className="App-header">
						<p>
							Edit <code>src/App.tsx</code> and save to reload.
						</p>
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
						<Button type="primary">Accept</Button>
					</header>
				</div>
			</Route>
			<Route path="/">
				<div>Home</div>
			</Route>
		</Switch>
	);
}

export default App;
