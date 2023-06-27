import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PA from './pages/PA';
import NOF from './pages/NOF';
import OFE from './pages/OFE';
import REP from './pages/REP';
import SignUp from './pages/Signup';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/PA' exact element ={<PA/>}></Route>
		<Route path='/NOF' element ={<NOF/>}></Route>
		<Route path='/OFE' element ={<OFE/>}></Route>
		<Route path='/REP' element ={<REP/>}></Route>
		<Route path='/Sign-up' component={SignUp} />
	</Routes>
	</Router>
);
}

export default App;
