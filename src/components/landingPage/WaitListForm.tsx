import star from '../assets/star.svg';
import phone from '../assets/phone.svg';
import Slider from './Slider';
import stroke from '../assets/stroke.svg';
import { useState, useEffect } from 'react';

const WaitListForm: React.FC =()=>{
    const texts = ["Asap!", "Now! Now!", "as e dey hot!", "kia kia!"];
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [fade, setFade] = useState("fade-in");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);
        return () => clearInterval(interval);
      }, [texts.length]);

    return(
        <div className="waitlist-form-cover">
            <section className="waitlist-form">
                <p>
                    <span><img src={star} alt='star'/></span>
                    JOIN THE CHOWAFRICA WAITLIST
                    <span><img src={star} alt='star'/></span>
                </p>
                <h2>
                    Find chow, 
                    <span> {texts[currentIndex]}<img className='stroke' src={stroke} alt='stroke'/></span>
                </h2>
                <p>The patient dog eats left overs. Be the first to know when we launch. Join our Waitlist</p>
                <div>
                    <input type='email' placeholder='Enter your email'/>
                    <button className="waitlist-form-button">JOIN WAITLIST</button>
                </div>
            </section>
            <section className='waitlist-slider'>
                <div>
                    <img src={phone} alt='phone'/>
                </div>
                <div><Slider/></div>
            </section>
        </div>
    )
}

export default WaitListForm;