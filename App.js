import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



/* 
 {
  Header 
  logo 
  links 
 }

 {
  <Body >
  search 
  cart-container
  card 
  <Body/>

  <Footer />
  <
 }
*/

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src="https://images.yourstory.com/cs/images/companies/logosC141575978425306png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" alt="" />
            </div>

            <div className='nav__bar'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Email</li>
                    <li>Contact Us</li>
                    <li>Card</li>
                </ul>
            </div>
        </div>
    )
}

const Card = () => {
    return (
        <div className='card'>
            <div className='card__img'>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/de56dffcc29d6ad046285c5b664bda8f" />
            </div>

            <h2 className='card_hed'>
                Zeeshan - Apna Hyderabadi Food
            </h2>

            <p>
                Biryani, North Indian
            </p>

            <div className="star_rating">
                <p>3.8 ⭐</p>
            </div>
        </div>
    )
}

const MainBody = () => {
    return (
        <div className="body">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

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