import blackstar from '../assets/blackStar.svg';
import loveVec1 from '../assets/love-vec1.svg';
import loveVec2 from '../assets/love-vec2.svg';
import onion from '../assets/onion.png';
import turkey from '../assets/turkey.png';
import thumb from '../assets/thumb.png';
import money from '../assets/money.png';
import cloud1 from '../assets/cloud1.svg';
import cloud2 from '../assets/cloud 2.svg';
import manPic from '../assets/emmanuel-ikwuegbu-81fRHbVliQI-unsplash 1.svg';
import { foodItems } from './Slider';

const MainBody: React.FC=()=>{
    return(
        <div className="main-section">
            <section className="main-section1">
                <p>
                    <span><img src={blackstar} alt='blackstar'/></span>
                        JOIN THE CHOWAFRICA WAITLIST
                    <span><img src={blackstar} alt='blackstar'/></span>
                </p>
                <h2>
                    Are you tired of eating the same dishes <button>everyday?</button>
                </h2>
                <p>Do you crave new and exciting dishes? Look no further! Chow is the perfect solution for discovering your next dish.</p>
                <img src={cloud1} alt="cloud" />
                <img src={cloud2} alt="cloud" />
            </section>
            <section className="main-section2">
                <div>
                    {foodItems.map((food)=> <div className={food.id !==1 && food.opacity === false ? 'grid-item reduce-space' : food.id === 1 ? 'grid-item' : 'grid-item add-opacity'}><img src={food.image} alt="item" /></div>)}
                </div>
                <img src={loveVec1} alt='vec' />
                <img src={loveVec2} alt='vec' />
                <div>
                    <img src={manPic} alt="human" />
                    <div className='main-note'>
                        <img src={money} alt="money" />
                    </div>
                    <div className='note'>
                        <img src={thumb} alt="thumb" />
                    </div>
                    <div className='note'>
                        <img src={onion} alt="onion" />
                    </div>
                    <div className='note'>
                        <img src={turkey} alt="turkey" />
                    </div>
                </div>
            </section>
            <div className='separator'></div>
            <section className='main-section3'>
                <div>Signup to <button>chowafrica</button> today and say <button>goodbye 👋🏽</button> to mealtime stress.</div>
                <button className='waitlist-form-button'>JOIN WAITLIST</button>
            </section>
        </div>
    )
}

export default MainBody