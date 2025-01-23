import { useRef, useEffect } from "react"
import egg from '../assets/egg-cooked.jpg'
import rice from '../assets/fried rice.jpg'
import chicken from '../assets/shredded chicken.jpg'

export const foodItems= [
    {
        id: 1,
        image: egg,
        opacity: false
    },
    {
        id: 2,
        image: rice,
        opacity: true
    },
    {
        id: 3,
        image: chicken,
        opacity: true
    },
    {
        id: 4,
        image: egg,
        opacity: true
    },
    {
        id: 5,
        image: rice,
        opacity: false
    },
    {
        id: 6,
        image: chicken,
        opacity: true
    },
    {
        id: 7,
        image: egg,
        opacity: true
    },
    {
        id: 8,
        image: rice,
        opacity: true
    },
    {
        id: 9,
        image: chicken,
        opacity: false
    }
]

const Slider: React.FC =()=>{
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;

        const switchAnimation = () => {
        if (slider) {
            const currentAnimation = slider.style.animationName;
            slider.style.animationName = currentAnimation === 'scroll-left' ? 'scroll-right' : 'scroll-left';
        }
        };

        if (slider) {
        slider.addEventListener('animationiteration', switchAnimation);
        }

        return () => {
        if (slider) {
            slider.removeEventListener('animationiteration', switchAnimation);
        }
        };
    }, []);

    return(
        <div className="slider-container">
            <div className="slider" ref={sliderRef}>
                {foodItems?.map((food)=><div className="slider-item"><img src={food.image} alt="food item" /></div>)}
            </div>
        </div>
    )
}

export default Slider