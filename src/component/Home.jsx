import React from 'react'
import Slider from './Slider'
import Footer from './Footer'
// import Slider from './slider'


const Home = () => {
    return (
        <>
            <div className='container2'>
                <ul>
                    <li>
                        <img src='https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100' alt='item' />
                        <p>Grocery</p>
                    </li>
                    <li>
                        <img src='https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100' alt='item' />
                        <p>Mobiles</p>
                    </li>
                    <li>
                        <img src='https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100' alt='item' />
                        <p>Fashion</p>
                    </li>
                    <li>
                        <img src='https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100' alt='item' />
                        <p>Electronics</p>
                    </li>
                    <li>
                        <img src='https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100' alt='item' />
                        <p>Home & Furniture</p>
                    </li>
                    <li>
                        <img src='https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100' alt='item' />
                        <p>Appliances</p>
                    </li>
                    <li>
                        <img src='https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100' alt='item' />
                        <p>Beauty,Toys & More</p>
                    </li>
                    <li>
                        <img src='https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100' alt='item' />
                        <p>Two Wheeler</p>
                    </li>
                    <li>
                        <img src='https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100' alt='item' />
                        <p>Grocery</p>
                    </li>
                </ul>
            </div>
            <div className='container3'>
               <Slider/>
            </div>
            <Footer/>
        </>
    )
}

export default Home