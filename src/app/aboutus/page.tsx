import React from 'react'
import AboutHero from '../components/aHero'
import AboutSection from '../components/aSection'
import AboutPopularProduct from '../components/aPopularProducts';

const about = () => {
    return (
      <div>
        <AboutHero />
            <AboutSection />
            <AboutPopularProduct />
            
      </div>
    );
}

export default about