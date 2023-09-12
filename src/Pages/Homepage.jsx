import React from 'react'
import tv from "../Assets/Images/tv.png"
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImFacebook2 } from 'react-icons/im';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { BiLogoTwitter } from 'react-icons/bi';
import MovieCard from '../Components/MovieCard';


const Homepage = () => {
  return (
    <div className='homepage_container'>

        <header>
            <div className='header-items'>
                <div className='sub-header-items'>
                    <div className='header-logo'>
                        <img src={tv} alt='tv'/>
                        <span>MovieBox</span>
                    </div>

                    <div className='search-items'>
                        <div className='search-items-box'>
                             <input name="search" id='search' placeholder='What did you want to watch'/>
                        <span><BsSearch size={24}/></span>
                        </div>
                       
                    </div>

                    <div className='sign-in'>
                       <span>Sign In</span>
                       <span><GiHamburgerMenu size={24}/></span>
                    </div>
                </div>

                <div className='movie_info'>
                    <h1>John Wick 3 : Parabellum</h1>
                    <div className='rating'>
                        <img src='' alt="ratingType" />
                        <span>86.0/ 100</span>
                        <span><BiLogoTwitter/> 97%</span>
                    </div>
                    <div className='movie_details'>
                        <p>
                            John Wick is on the run after killing a member of the 
                            international assassins' guild, and with a $14 million price tag 
                            on his head, he is the target of hit men and women everywhere.
                        </p>
                    </div>
                    <button>Watch Trailer</button>
                </div>
               
               
            </div>
        </header>
       
        <main>
            <MovieCard/>
        </main>

        <footer>
            <div className='social_media'>
                <div className='social_media_icons'>
                    <span><ImFacebook2 size={24}/></span>
                    <span><BsInstagram size={24}/></span>
                    <span><BiLogoTwitter size={24}/></span>
                    <span><BsYoutube size={24}/></span>
                </div>
               
                <div className='terms_and_condition'>
                    <p>Conditions of Use</p>
                    <p>Privacy & Policy</p>
                    <p>Press Room</p>

                </div>
                <div className='copyright'>
                    © 2021 MovieBox by Aisha
                </div>
            </div>

           
           

        </footer>
        
    </div>
  )
}

export default Homepage