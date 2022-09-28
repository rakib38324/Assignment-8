import React from 'react';
import './Details.css'
import img from '../../images/formal-image.jpeg'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Details = (props) => {
    return (
        <div className='detailes-Container'>

            <div className='profile'>
                <img src={img} alt="" />
                <div className='name-location'>
                <h1 className='name-title'>MD. Aminul Islam Rakib</h1>
                <div className='location'>
                    <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></p>
                    <p>Savar,Dhaka</p>
                </div>
                </div>
            </div>


            <div>
                <div>

                </div>

                <div>

                </div>

                <div>
                    
                </div>
            </div>

            <p>length:{props.details.length}</p>
        </div>
    );
};

export default Details;