import React, {useEffect, useState} from 'react';
import './Slider.scss';
import SliderImg from "./SliderImg";
import Service from "./Service";
import slider1 from '../../assets/images/slider/slider1.png';
import slider2 from '../../assets/images/slider/slider2.png';
import slider3 from '../../assets/images/slider/slider3.png';
import slider4 from '../../assets/images/slider/slider4.png';
import slider5 from '../../assets/images/slider/slider5.png';
import service1 from '../../assets/images/services/service2.svg';
import service2 from '../../assets/images/services/service1.svg';
import service3 from '../../assets/images/services/service4.svg';
import service4 from '../../assets/images/services/service3.svg';
import service5 from '../../assets/images/services/service5.svg';
import SliderData from '../data/slider-data';
import ServiceData from '../data/services-data';

const sliderLength = 5;

function Slider() {
    const sliderArr = [
        <SliderImg src={slider1}/>,
        <SliderImg src={slider2}/>,
        <SliderImg src={slider3}/>,
        <SliderImg src={slider4}/>,
        <SliderImg src={slider5}/>,
    ];
    const services = [service1, service2, service3, service4, service5];
    const [x, setX] = useState(0);
    const [stopIndex, setStopIndex] = useState(null);
    const timeoutRef = React.useRef(null);


    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        if (!stopIndex && stopIndex !== 0 && window.innerWidth > 768) {
            timeoutRef.current = setTimeout(
                () => {
                    setX(old => {
                        return old === (-100 * (sliderLength - 1)) ? 0 : old - 100
                    });
                }, 4000);
        } else {
            resetTimeout();
        }
        return () => {
            resetTimeout();
        };
    }, [x, stopIndex]);

    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
        setStopIndex(null)
    };

    const goRight = () => {
        (x === -100 * (sliderArr.length - 1)) ? setX(0) : setX(x - 100);
        setStopIndex(null)
    };

    const change = (i) => {
        i === 0 ? setX(0) : setX(-100 * i);
        i === stopIndex ? setStopIndex(null) : setStopIndex(i);
    };
    return (
        <div className='slider d-flex align-center'>
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className='slide' style={{transform: `translate(${x}%)`}}>{item}</div>
                    )
                })
            }
            <div id='leftBtn' onClick={goLeft}>
                <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.82 21.18L5.66 12L14.82 2.82L12 0L0 12L12 24L14.82 21.18Z" fill="white"/>
                </svg>
            </div>
            <div id='rightBtn' className='text-right' onClick={goRight}>
                <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.000312805 2.82L9.16031 12L0.000312805 21.18L2.82031 24L14.8203 12L2.82031
                    0L0.000312805 2.82Z" fill="white"/>
                </svg>
            </div>


            <div className='slider-content d-flex flex-column justify-between'>
                <div className='header'>
                    <h1 className='font-face-bold'>{SliderData[x === 0 ? 0 : -(x / 100)] && SliderData[x === 0 ? 0 : -(x / 100)].header}</h1>
                    <h2>{SliderData[x === 0 ? 0 : -(x / 100)] && SliderData[x === 0 ? 0 : -(x / 100)].description}</h2>
                </div>
                <div className='services-container'>
                    {
                        services.map((item, i) => {
                            return (
                                <div className={i === (x === 0 ? 0 : -(x / 100)) ? 'service-item mobile-item' : 'service-item'} key={i}>
                                    <Service src={item}
                                             active={i === (x === 0 ? 0 : -(x / 100))}
                                             onChange={() => {
                                                 change(i)
                                             }}
                                             header={ServiceData[i] && ServiceData[i].header}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Slider;
