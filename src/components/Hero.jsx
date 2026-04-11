import React from 'react'
import "./Hero.css"
import heroImages from '../assest/hero.webp'


const Hero = () => {
  return (
    <div>
      <section className='hero'>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h3>Since,1983.</h3>
                    <p>The final of the 1983 Cricket World Cup was played between India <br /> and the West Indies at Lord's, London on 25 June 1983. </p>
                    <button>Read more</button>
                </div>
                <div className='col-6'>
                    <img src={heroImages} alt="" />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
