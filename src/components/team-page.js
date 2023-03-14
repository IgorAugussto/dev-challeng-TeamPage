import React from 'react';
import bill from '../assets/img/photo1.png';
import saba from '../assets/img/photo2.png';
import shae from '../assets/img/photo3.png';
import skyla from '../assets/img/photo4.png';
import griff from '../assets/img/photo5.png';
import stan from '../assets/img/photo6.png';


const TeamPage = () => {
    return (
        <main>
            <header>
                <div className='container-header'>
                    <h1>The creative crew</h1>
                    <h3>Who we are</h3>
                    <h6>We are team of creatively diverse.  driven.  innovative individuals
                        working in various locations from the world.</h6>
                </div>
            </header>
            <body>
                <div className='container-body'>
                    <div className='container-img-bill'>
                        <img className='img-bill' src={bill} alt="photo1" />
                        <p className='bill'>Bill Mahoney</p>
                        <p className='func-bill'>Product owner</p>
                    </div>
                    <div className='container-img-saba'>
                        <img className='img-saba' src={saba} alt="photo2" />
                        <p className='saba'>Saba Cabrera</p>
                        <p className='func-saba'>Art director</p>
                    </div>
                    <div className='container-img-shae'>
                        <img className='img-shae' src={shae} alt="photo3" />
                        <p className='shae'>Shae Le</p>
                        <p className='func-shae'>Tech Lead</p>
                    </div>
                    <div className='container-img-skyla'>
                        <img className='img-skyla' src={skyla} alt="photo4" />
                        <p className='skyla'>Skylah Lu</p>
                        <p className='func-skyla'>UX Designer</p>
                    </div>
                    <div className='container-img-griff'>
                        <img className='img-griff' src={griff} alt="photo5" />
                        <p className='griff'>Griff Richards</p>
                        <p className='func-griff'>Developer</p>
                    </div>
                    <div className='container-img-stan'>
                        <img className='img-stan' src={stan} alt="photo6" />
                        <p className='stan'>Stan John</p>
                        <p className='func-stan'>Developer</p>
                    </div>
                </div>
            </body>
            <footer>
                <div className='footer'>
                    <p>Created by <span className="name-bold">IgorAugusto</span> - devChallenges.io</p>
                </div>
            </footer>
        </main>
    );
}

export default TeamPage;