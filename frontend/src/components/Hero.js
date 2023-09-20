import { React, useState, useRef } from 'react';
import { Link, useNavigate  } from 'react-router-dom'
import app from "../images/app.png"
import calendar from "../images/calendar.svg"
import chart from "../images/chart-histogram.svg"
import globe from "../images/globe.svg"
import settings from "../images/settings.svg"
import fb from "../images/facebook.svg"
import ig from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"
import phone from "../images/phone-call.svg"
import twitter from "../images/twitter.svg"


export default function Hero () {
    const start = useRef(null)
    const handleStart = () => {
        start.current.scrollIntoView({ behaviour: 'smooth' })
    }

    const navigate = useNavigate();

    const [category, setCategory] = useState("point of interest")
    const [selected, setSelected] = useState("Select a Place")
    const [showCategory, setShowCategory] = useState(false)

    const handleShowCategory = () => {
        setShowCategory(!showCategory)
    }
    const handleSetCategory = (category_name) => {
        setShowCategory(!showCategory)
        setCategory(category_name)
        setSelected(category_name.toUpperCase())
        console.log(category_name)
    }

    const categoryStyle = {
        visibility: showCategory ? 'visible' : 'hidden'
    }

    const categories = useRef(null)
    if (showCategory) {
        categories.current.scrollIntoView({ behaviour: 'smooth' })
    }

    const setPosition = (position) => {
        alert(position.coords.latitude + ` and ` + position.coords.longitude)
        const longitude = position.coords.longitude
        const latitude = position.coords.latitude
        navigate(`explore?category=${category}&lon=${longitude}&lat=${latitude}`)
    }
    const allowAccess = () => {
        alert("Allow access");
    }

    const locationExplore = (e) => {
        e.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(setPosition, allowAccess);
        }
    }


    return (
        <div className="hero">
            <div className="body">
                <div className="row">
                    <h1>Explore your favourite places with Tourify.</h1>
                    <p className="last">Explore your favourite places with Explora App. Discover new places and tourist destinations with family and friends</p>
                    <button className='get-started' onClick={handleStart}>Get Started</button>
                </div>
                <div className="row illustration">
                    <img src={app} alt="" />
                </div>
            </div>
            <div ref={start} className="container">
                <div className="name">
                    <h1>Explore your favourite places near you</h1>
                </div>
                <div className='typing'>
                    <p>See points of interest around you</p>
                </div>

                <div ref={categories} className="cta-social">
                    <div className='categories' style={categoryStyle}>
                        <span onClick={()=>{handleSetCategory('tourist attraction')}}>Tourist Attraction</span>
                        <span onClick={()=>{handleSetCategory('airport')}}>Airport</span>
                        <span onClick={()=>{handleSetCategory('amusement park')}}>Amusement Park</span>
                        <span onClick={()=>{handleSetCategory('art gallery')}}>Art Gallery</span>
                        <span onClick={()=>{handleSetCategory('bank')}}>Bank</span>
                        <span onClick={()=>{handleSetCategory('bar')}}>Bar</span>
                        <span onClick={()=>{handleSetCategory('beauty salon')}}>Salon</span>
                        <span onClick={()=>{handleSetCategory('store')}}>Store</span>
                        <span onClick={()=>{handleSetCategory('cafe')}}>Cafe</span>
                        <span onClick={()=>{handleSetCategory('casino')}}>Casino</span>
                        <span onClick={()=>{handleSetCategory('church')}}>Church</span>
                        <span onClick={()=>{handleSetCategory('gym')}}>Gym</span>
                        <span onClick={()=>{handleSetCategory('hospital')}}>Hospital</span>
                        <span onClick={()=>{handleSetCategory('library')}}>Library</span>
                        <span onClick={()=>{handleSetCategory('mosque')}}>Mosque</span>
                        <span onClick={()=>{handleSetCategory('movie')}}>Movie</span>
                        <span onClick={()=>{handleSetCategory('museum')}}>Museum</span>
                        <span onClick={()=>{handleSetCategory('night club')}}>Night Club</span>
                        <span onClick={()=>{handleSetCategory('pharmacy')}}>Pharmacy</span>
                        <span onClick={()=>{handleSetCategory('school')}}>School</span>
                        <span onClick={()=>{handleSetCategory('restaurant')}}>Restaurant</span>
                        <span onClick={()=>{handleSetCategory('shopping mall')}}>Shopping Mall</span>
                        <span onClick={()=>{handleSetCategory('stadium')}}>Stadium</span>
                        <span onClick={()=>{handleSetCategory('spa')}}>Spa</span>
                        <span onClick={()=>{handleSetCategory('university')}}>university</span>
                        <span onClick={()=>{handleSetCategory('zoo')}}>Zoo</span>
                    </div>
                    <div className='select-category' tabIndex="1" onClick={handleShowCategory}>
                        <div style={{display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center'}}>
                            {selected} 
                            <svg height="20" viewBox="0 0 1792 1792" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>                    </div>
                        </div>
                    <Link to='/explore' onClick={locationExplore} className="cta">Explore</Link>
                </div>
                
            </div>

            <div className="section-1" id="features">
        <h1>App Features</h1>
        <div className="row">
            <div className="card">
                <div className="illustration illustration-1">
                    <img src={calendar} className="feature-card" alt="" />
                </div>
                <h2>Create schedule</h2>
                <p>THis is a new feature. stay tunes for more feature releases.</p>
            </div>
            <div className="card">
                <div className="illustration illustration-2">
                    <img src={chart} className="feature-card" alt="" />
                </div>
                <h2>Daily stats</h2>
                <p>THis is a new feature. stay tunes for more feature releases.</p>
            </div>
            <div className="card">
                <div className="illustration illustration-3">
                    <img src={globe} className="feature-card" alt="" />
                </div>
                <h2>Worldwide</h2>
                <p>THis is a new feature. stay tunes for more feature releases.</p>
            </div>
            <div className="card">
                <div className="illustration illustration-4">
                    <img src={settings} className="feature-card" alt="" />
                </div>
                <h2>Customizable</h2>
                <p>THis is a new feature. stay tunes for more feature releases.</p>
            </div>
        </div>
    </div>

    <div className="faq" id="faq">
        <h1>Frequently asked questions</h1>

        <div className="accordion">
        
         <div className="accordion__item">
            <div className="accordion__item__header">
             What is an FAQ page?
            </div>
        
            <div className="accordion__item__content">
                <p>Frequently Asked Questions (FAQ) pages contain a list of commonly asked questions and answers on a website about topics such as hours, shipping and handling, product information, and return policies.</p>   
                95% of consumers believe that a good customer experience is important to brand loyalty. Providing a top-notch customer experience can be expensive, time-consuming, and complicated to put into practice.
                <br />
                <br />
                Sure there are chatbots, support lines, and customer reviews to help shoppers on their path to purchase, but there's one forgotten customer service tactic that is cost-effective and streamlined. That tactic is an FAQ page.
                <br />
                <br />
                <p>
                FAQ pages went out of style for a bit because companies viewed them as outdated and unattractive forms of communication. Now they are on most websites because they save time for both the customer and employees. It's easy to get carried away with the design and content on the FAQ page. In this guide, you'll learn all there is to know about crafting an effective FAQ page. Plus, get inspired with 30 best-in-class examples.
                </p>
            </div>
          </div>
        
        
          <div className="accordion__item">
            <div className="accordion__item__header">
             Why you should make an FAQ page?
            </div>
        
            <div className="accordion__item__content">
                <p>An FAQ page is a time-saving customer service tactic that provides the most commonly asked questions and answers for current or potential customers.</p>
                <p>Before diving into how to make an FAQ page, you need to know why having one is so important. There are so many reasons beyond improving the customer experience for perfecting your FAQ page. Keep in mind the importance of an FAQ page when developing your own e-commerce website so you can make sure it increases sales and not the other way around.</p>
                
            </div>
          </div>
        
          <div className="accordion__item">
            <div className="accordion__item__header">
             How to make an FAQ page?
            </div>
        
            <div className="accordion__item__content">
                <p>There are seven simple steps to make the perfect FAQ page for your business. The design of an FAQ page is crucial for an easy-to-use customer experience. Follow these steps and your customer success team will thank you.</p>
            </div>
          </div>
        
          
        </div>
    
      </div>

      <footer>
        <h2>Contact / Follow us</h2>
        <div className="contact" id="contact">
            <img src={fb} alt="" />
            <img src={ig} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            <img src={phone} alt="" />
        </div>
        <table>
            <tr>
                <th>COMPANY</th>
                <th>ABOUT</th>
                <th>SOCIAL</th>
            </tr>
            <tr>
                <td>Our Vision</td>
                <td>Donate</td>
                <td>Twitter</td>
            </tr>
            <tr>
                <td>The Team</td>
                <td>About Us</td>
                <td>Facebook</td>
                
            </tr>
            <tr>
                <td>Awards</td>
                <td>Our mission</td>
                <td>Instagram</td>
            </tr>
        </table>
        <p>Made with ❤ by <a href="https://www.linkedin.com/in/delight-olagbuji">Delight</a></p>
    </footer>
        </div>
    )
}