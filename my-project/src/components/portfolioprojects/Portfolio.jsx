import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio/wave.png'
import IMG2 from '../../assets/portfolio/wheatherapp.png'
import IMG3 from '../../assets/portfolio/chatapp.png'
import IMG4 from '../../assets/portfolio/foodapp.png'
import IMG5 from '../../assets/portfolio/halowin.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className="w-100% p-2 mx-auto flex flex-col justify-center w-full h-full bg-black text-white lg:pl-[240px]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Protfolio
          </p>
        </div>
        </div>
     
      
      <div className="container portfolio__container pb-32">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3 className='font-extrabold'>Brain Waves</h3>
          <h5>This a is landing page for a AI tool Unleashing the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/ChanduFSD/brainwaves" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://brainwaveaitool.netlify.app" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
          <div className='techHead'>
            <div className='techHead'>
            <span className='JavaScript'></span>
            <span className='TechName'>Javascript</span>
            </div>
            <div className='techHead'>
            <span className='Tailwind'></span>
            <span className='TechName'>Tailwind</span>
            </div>
            {/* <div className='techHead'>
            <span className='NextJs'></span>
            <span className='TechName'>NextJs</span>
            </div> */}
            <div className='techHead'>
            <span className='ReactJs'></span>
            <span className='TechName'>ReactJs</span>
            </div>
          </div>
        </article>
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3 className='font-extrabold'>Nanjji Eats</h3>
          <h5>A simple web app which shows the present south indian foods with price filter and as weel as item filter...</h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/ChanduFSD/Nanjamma.eats" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://warm-custard-fca3f4.netlify.app" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
          <div className='techHead'>
            <div className='techHead'>
            <span className='JavaScript'></span>
            <span className='TechName'>Javascript</span>
            </div>
            <div className='techHead'>
            <span className='Tailwind'></span>
            <span className='TechName'>Tailwind</span>
            </div>
            <div className='techHead'>
            <span className='ReactJs'></span>
            <span className='TechName'>ReactJs</span>
            </div>
          </div>
        </article>
       
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3 className='font-extrabold'>Hallowin</h3>
          <h5>A simple landing page web app with animations,and responsive in any kind of screens...</h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/ChanduFSD/Hallowin-project2" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://hallowinlanding.netlify.app" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
          <div className='techHead'>
            <div className='techHead'>
            <span className='JavaScript'></span>
            <span className='TechName'>Javascript</span>
            </div>
            <div className='techHead'>
            <span className='bootstrap'></span>
            <span className='TechName'>Bootstrap</span>
            </div>
            <div className='techHead'>
            <span className='css'></span>
            <span className='TechName'>CSS</span>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3 className='font-extrabold'>Cold Talk's</h3>
          <h5>A MERN stack project,where you can creat a account and chat with online other users in real time... </h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/ChanduFSD/online-chat-app" className='btn' target='_blank' rel="noreferrer">Github</a>
          </div>
          <div className='techHead'>
            <div className='techHead'>
            <span className='JavaScript'></span>
            <span className='TechName'>Javascript</span>
            </div>
            <div className='techHead'>
            <span className='Tailwind'></span>
            <span className='TechName'>Tailwind</span>
            </div>
            <div className='techHead'>
            <span className='ReactJs'></span>
            <span className='TechName'>ReactJs</span>
            </div>
            <div className='techHead'>
            <span className='mongoDB'></span>
            <span className='TechName'>MongoDB</span>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3 className='font-extrabold'>Weather App</h3>
          <h5>A Simple app which uses API to fetch the weather teamperature ,windspeed and humidity of a loction...</h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/ChanduFSD/Weatherapiapp" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://weatherappusingapiapp.netlify.app" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
          <div className='techHead'>
            <div className='techHead'>
            <span className='JavaScript'></span>
            <span className='TechName'>Javascript</span>
            </div>
            {/* <div className='techHead'>
            <span className='bootstrap'></span>
            <span className='TechName'>Bootstrap</span>
            </div> */}
            <div className='techHead'>
            <span className='css'></span>
            <span className='TechName'>CSS</span>
            </div>
          </div>
        </article>
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Fighting game</h3>
          <h5>A simple game where we can heal and attack the oponent. </h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/Mayank-Singh-dev/Fighting-Game.git" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://fighting-game-x.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio