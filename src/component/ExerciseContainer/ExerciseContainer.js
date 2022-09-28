import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Details from '../Details/Details';
import './Exercise.css'

const ExerciseContainer = () => {

    const [equpments, setequpment] = useState([])


    useEffect( ()=>{
        fetch('cartinfo.json')
        .then(res => res.json())
        .then(data => setequpment(data))
    } , [])

    
    return (
        
        <div className='Exercise-Container'>

          <div>
            <div><h1 className='cart-title'>Select today’s exercise</h1></div>
                <div className='cart-Container'>
            
                {
                    equpments.map(equpment =>  <Cart 
                        key={equpment.id}
                        eqp = {equpment}></Cart>
                    )
                }
                </div>
          </div>


            <div>
                <Details></Details>
            </div>

        </div>
    );
};

export default ExerciseContainer;