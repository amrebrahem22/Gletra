import React from 'react'
import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from './config/Routes';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const App = () => {
    return (
        <BrowserRouter>
            <Route 
                render={props => (
                    <>
                        <Header {...props} />
                        <Routes />
                        <Footer />
                    </>
                )}
            />
        </BrowserRouter>
    )
}

export default App
