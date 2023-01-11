import React from 'react';
import CardsItems from './CardsItems';
import './Cards.css'

function Cards() {
    return (
        <>
            <div className="cards">
                <h1>Check out these Technologies</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardsItems src='images/AI.jpg'
                                text='Learn and Explore Artificial Intelligence'
                                path='/profile' />
                            <CardsItems src='images/DS.jpg'
                                text='Explore DataScience'
                                path='/profile' />
                        </ul>
                        <ul className="cards__items">
                            <CardsItems src='images/EC.jpg'
                                text='Get to know about Electric cars'
                                path='/profile' />
                            <CardsItems src='images/RB.jpg'
                                text='Robots: Future'
                                path='/profile' />
                            <CardsItems src='images/G.jpg'
                                text='Gaming'
                                path='/profile' />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards