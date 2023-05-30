import './Card.css';
import profile from '../../images/profile.jpg'
import React from 'react';

export default function Cards(){
    return (
        <div className='card'>
            <div className='card-header'>
               <img className='profile' src={profile} alt='profile' />
            </div>
            <div className='card-body'>
                <div className='user-info'>
                    <span className='username'>Katherine Awesome</span>
                    <div className='user-role'>Front end developer</div>
                    <div className='user-website'>Katherine's website</div>
                </div>
                <div className='action-buttons'>
                     <div className='button-data'>
                        <button className='email'><i className="fa fa-envelope"></i>Email</button>
                      </div>
                      <div>
                        <button className='linkedIn'><i className="fa fa-external-link"></i>LinkedIn</button>
                      </div>
                </div>
                <div className='content'>
                <div className='about'>
                    <div className='about-heading'>About</div>
                    <p className='about-info'>
                    I am a frontend developer with a particular interest in making 
                    things simple and automating daily tasks. I try to keep up with 
                    security and best practices, and am always looking for new things.
                    </p>
                </div>
                <div className='about'>
                    <div className='about-heading'>Interest</div>
                    <p className='about-info'>
                    I am a frontend developer with a particular interest in making 
                    things simple and automating daily tasks. I try to keep up with 
                    security and best practices, and am always looking for new things.
                    </p>
                </div>
                </div>
                
            </div>
            <div className='card-footer'>
                 <div><i className="fa fa-twitter"></i></div>
                 <div><i className="fa fa-facebook"></i></div>
                 <div><i className="fa fa-instagram"></i></div>
                 <div><i className="fa fa-linkedin"></i></div>
                 <div><i className="fa fa-pinterest"></i></div>
            </div>

        </div>
    );
}