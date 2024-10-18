import { Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage';
import AboutPage from './page/AboutPage';
import AboutPage1 from './page/AboutPage1';
import Header from './components/Header';
import Footer from './components/Footer';
import QuickButton from './components/QuickButton';
import SignUpForm from './page/SignUpForm';
import data from './data/data';
import { createContext, useState } from 'react';

const DataContext = createContext();

function App() {
	let [petdata] = useState(data);

  return (
    <DataContext.Provider value={{petdata}}>
    	<div className="App">
			<Header />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/about/:id' element={<AboutPage1 />} />
				<Route path='/signup' element={<SignUpForm />} />
			</Routes>
			<Footer />
			<QuickButton />
	    </div>
    </DataContext.Provider>
  );
}

export default App;
export {DataContext};
