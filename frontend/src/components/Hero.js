import { React, useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom'



export default function Hero () {
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
            <div className="container">
                <div className="name">
                    <h1>Explore your favourite places near you</h1>
                </div>
                <div className='typing'>
                    <p>See points of interest around you</p>
                </div>

                <div className="cta-social">
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
        </div>
    )
}