import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Header from './components/Header';
import MainBody from './components/MainBody';


const App = () => {
    return (
        <div className='app'>
            <Header />
            <MainBody />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);