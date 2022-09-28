import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Details, { addToDb } from '../Details/Details';
import Questions from '../Questions/Questions';
import './Exercise.css'

const ExerciseContainer = () => {

    const [equpments, setequpment] = useState([])
    const [details, setdetails] = useState([])
    const [breaktime, setbreaktime] = useState([])


    useEffect(() => {
        fetch('cartinfo.json')
            .then(res => res.json())
            .then(data => setequpment(data))
    }, [])


    const adddetails = (equpment) => {
        // console.log(equpment);
        const newCart = [...details, equpment];
        setdetails(newCart);

    }


    const addbreaktimes = (time) => {
        // setbreaktime(time);
        localStorage.setItem('Breaking-Time', time);
        let times = localStorage.getItem("Breaking-Time")
        setbreaktime(times)
        Details(time)
    }


    return (

        <div className='main'>
            <div className='Exercise-Container'>

                <div>
                    <div><h1 className='cart-title'>Select today’s exercise</h1></div>
                    <div className='cart-Container'>

                        {
                            equpments.map(equpment => <Cart
                                key={equpment.id}
                                eqp={equpment}
                                handeldetails={adddetails}

                            >
                            </Cart>
                            )
                        }
                    </div>

                   
                </div>


                <div className='details-Container'>
                    <Details details={details}
                        breaktime={addbreaktimes}
                    // breakingtime = {breaktime}
                    ></Details>
                </div>

               

            </div>

            <div className='Question-Container'>
                        <Questions></Questions>
                </div>
        </div>
    );
};

export default ExerciseContainer;