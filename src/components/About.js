import React, { forwardRef } from 'react';
import './About.scss';
import AboutImg from '../assets/images/About.png'

const About = forwardRef((props, ref) => {
    return (
        <div className='about-container' ref={ref}>
            <div className='top-section d-flex'>
                <div className='top-wrapper'>
                    <h1 className='font-face-bold'>
                        О нас
                    </h1>
                    <p className='text-justify description'>Адамиус - это торгово-дистрибуционная компания, деятельность
                        которой направлена на осуществление оптовой торговли и дистрибуции товаров по всей территории
                        стран ЕС. Наша цель- помочь вам сделать невозможное возможным, находя труднодоступные товары и
                        новые пути логистики.
                    </p>
                    <div className='services-points d-flex align-stretch justify-center align-content-stretch'>
                        <p className='point text-capitalize'>Грузоперевозка</p>
                        <p className='point text-capitalize'>Дистрибуция</p>
                        <p className='point text-capitalize'>Оптовая продажа</p>
                    </div>
                </div>
            </div>
            <div className='bottom-section'>
                <div className='left-wrapper'>
                    <h2 className='font-face-semi-bold'>Мы рады приветствовать Вас на нашем сайте!</h2>
                    <p className='text-justify'>Компания "Адамиус" была неофициально образована в 2014 году и
                        была частью большого Холдинга. Но за короткий срок компания приобрела весомый авторитет
                        среди компаний, занимающихся оптовой торговлей в Армении. Начиная с 2022 года мы
                        являемся отдельной командой.
                    </p>
                    <div className='mobile-bottom-text'>
                        <p className='text-justify'>Быстрый рост компании во многом объясняется работой слаженной
                            команды молодых специалистов, профессионализм которых постоянно растет, а также благодаря
                            четкой организации рабочего процесса. На сегодняшний день мы являемся надежным партнером
                            для множество компаний, предоставляя широкий спектр логистических услуг и обеспечивая
                            прибыльный торговый бизнес.
                        </p>
                    </div>
                </div>
                <div className='right-wrapper'>
                    <img src={AboutImg} alt="Adamius LLC"/>
                </div>
            </div>
            <div className='bottom-text'>
                <p className='text-justify'>Быстрый рост компании во многом объясняется работой слаженной
                    команды молодых специалистов, профессионализм которых постоянно растет, а также благодаря
                    четкой организации рабочего процесса. На сегодняшний день мы являемся надежным партнером
                    для множество компаний, предоставляя широкий спектр логистических услуг и обеспечивая
                    прибыльный торговый бизнес.
                </p>
            </div>
        </div>
    );
});

export default About;
