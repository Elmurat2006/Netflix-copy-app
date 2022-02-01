import Header from './components/elements/Header/Header'
import Main from './components/elements/Main/Main'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Episode from './components/elements/Episodes/Episodes'
import { useState } from 'react'


function App() {
	return (
		<>
		<Router>
			<Switch>
				<Route exact path='/'>
				<Header />
				<Main/> 
				</Route>
				<Route exact path='/Episode'>
					<Episode />
				<Header />

				</Route>
			</Switch>
		</Router>
			
		</>
	)
}

export default App
