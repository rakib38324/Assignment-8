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


            <div className='healt-info'>
                <div className='helth-unit-info'>
                    <h1>59<small className='unit-style'>Kg</small></h1>
                    <p className='unit-style'>Weight</p>
                </div>

                <div className='helth-unit-info'>
                    <h1>5.4</h1>
                    <p className='unit-style'>Hight</p>
                </div>
                    
                <div className='helth-unit-info'>
                    <h1>25<small className='unit-style'>yrs</small></h1>
                    <p className='unit-style'>Age</p>
                </div>

            </div>

            <h1>Add A Break</h1>

            <div className='healt-info'>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>

            <p>length:{props.details.length}</p>
        </div>
    );
};

export default Details;