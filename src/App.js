//ANA LUIZA LOPES PENNA-2023000060
//WALQUIRIA MAFADO-2022009098
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PA from './pages/PA';
import NOF from './pages/NOF';
import OFE from './pages/OFE';
import REP from './pages/REP';
import Signup from './pages/Signup';

function App() {
return (
	<Router>
	<Header/>
	<Navbar /> 
	<Routes>
	    <Route path='/' exact element ={<PA/>}></Route>
		<Route path='/PA' element ={<PA/>}></Route>
		<Route path='/NOF' element ={<NOF/>}></Route>
		<Route path='/OFE' element ={<OFE/>}></Route>
		<Route path='/REP' element ={<REP/>}></Route>
		<Route path='/Signup' element ={<Signup/>}></Route>
	</Routes>

	</Router>
);
}

export default App;
