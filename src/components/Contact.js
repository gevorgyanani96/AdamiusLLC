import React, {forwardRef} from 'react';
import './Contact.scss';


const Contact = forwardRef((props, ref) => {
    return (
        <div className='contact-container text-center' ref={ref}>
            <h1>Контакты</h1>
            <h2 className='contact-description'>Будем рады видеть вас в списке наших партнеров.</h2>
            <p className='contact-description'>Будем рады видеть вас в списке наших партнеров.</p>
            <div className='contacts d-flex justify-center align-center'>
                <div className='contacts-item d-flex flex-column justify-center align-center'>
                    <svg width="51" height="40" viewBox="0 0 51 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.2557 24.4402L50.6652 11.7465V35.3333L50.6498 35.7146C50.5536 36.8825 50.0228 37.971 49.1612 38.7653C48.2996 39.5591 47.1726 40 45.9995 40H4.66572L4.28108 39.9837C3.11561 39.8875 2.02707 39.3557 1.2347 38.4941C0.696204 37.9099 0.319254 37.2032 0.134625 36.4435C0.0461572 36.0829 0 35.7103 0 35.3333V11.7465L24.4095 24.4402L24.7095 24.5652C24.9633 24.6484 25.2287 24.6801 25.4941 24.659C25.7596 24.6374 26.0173 24.5628 26.2557 24.4402Z" fill="#ECEDF0"/>
                        <path d="M4.66572 0H45.9995L46.3803 0.0163473C47.5496 0.112027 48.6381 0.643316 49.4305 1.50492C50.2267 2.36652 50.6652 3.49544 50.6652 4.66668V7.23754L25.3326 20.4106L0 7.23754V4.66668L0.0153857 4.283C0.111547 3.11561 0.642354 2.02755 1.50395 1.23374C2.36556 0.440416 3.49641 0 4.66572 0Z" fill="#ECEDF0"/>
                    </svg>
                    <p>adamiustrade@gmail.com</p>
                </div>
                <span className='divider'></span>
                <div className='contacts-item d-flex flex-column justify-center align-center'>
                    <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.349 40H36.0804C5.0386 38.2615 0.631144 12.7538 0.0150467 4.96923C-0.0345961 4.36397 0.0388828 3.75512 0.231273 3.17756C0.423663 2.6 0.731183 2.06508 1.13621 1.60346C1.54124 1.14185 2.03582 0.762597 2.59161 0.487445C3.1474 0.212294 3.75348 0.0466489 4.37512 1.44245e-06H13.0795C13.7122 -0.000595117 14.3306 0.183863 14.8545 0.529481C15.3784 0.8751 15.7836 1.36595 16.0178 1.93846L18.419 7.69231C18.6502 8.25161 18.7075 8.86474 18.584 9.45552C18.4604 10.0463 18.1613 10.5887 17.7239 11.0154L14.3591 14.3231C14.8847 17.2319 16.3151 19.9133 18.4567 22.0046C20.5984 24.0958 23.348 25.4958 26.3334 26.0154L29.7615 22.7077C30.2062 22.2864 30.7684 22.0019 31.378 21.8898C31.9876 21.7776 32.6176 21.8427 33.1895 22.0769L39.1451 24.4C39.7241 24.6352 40.2181 25.033 40.5641 25.5426C40.9102 26.0522 41.0926 26.6506 41.0882 27.2615V35.3846C41.0882 36.6087 40.5889 37.7826 39.7001 38.6482C38.8113 39.5137 37.6059 40 36.349 40Z" fill="#ECEDF0"/>
                    </svg>
                    <p>+374 (41) 200-208</p>
                </div>
                <span className='divider'></span>
                <div className='contacts-item d-flex flex-column justify-center align-center'>
                    <svg width="33" height="40" viewBox="0 0 33 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.1182 38.5227C15.4091 39.4682 15.4085 39.4677 15.4085 39.4677L15.4075 39.467L15.3947 39.4573L15.359 39.4302C15.3282 39.4068 15.2838 39.3727 15.2265 39.3283C15.1119 39.2395 14.946 39.1094 14.7361 38.9407C14.3164 38.6034 13.7201 38.1115 13.0061 37.4867C11.5798 36.2387 9.67508 34.4534 7.76669 32.3065C4.00535 28.075 0 22.1862 0 16.1182C0 6.03556 8.09621 0 16.1182 0C24.1402 0 32.2364 6.03556 32.2364 16.1182C32.2364 22.1862 28.231 28.075 24.4697 32.3065C22.5613 34.4534 20.6566 36.2387 19.2303 37.4867C18.5163 38.1115 17.92 38.6034 17.5003 38.9407C17.2904 39.1094 17.1245 39.2395 17.0099 39.3283C16.9526 39.3727 16.9081 39.4068 16.8774 39.4302L16.8417 39.4573L16.8289 39.467L16.8279 39.4677C16.8279 39.4677 16.8273 39.4682 16.1182 38.5227ZM16.1182 38.5227L16.8279 39.4677L16.1182 40L15.4085 39.4677L16.1182 38.5227ZM11.3219 11.3219C12.5939 10.0498 14.3192 9.3352 16.1182 9.3352C17.9171 9.3352 19.6424 10.0498 20.9145 11.3219C22.1865 12.5939 22.9012 14.3192 22.9012 16.1182C22.9012 17.9171 22.1865 19.6424 20.9145 20.9145C19.6424 22.1865 17.9171 22.9012 16.1182 22.9012C14.3192 22.9012 12.5939 22.1865 11.3219 20.9145C10.0498 19.6424 9.3352 17.9171 9.3352 16.1182C9.3352 14.3192 10.0498 12.5939 11.3219 11.3219Z" fill="#ECEDF0"/>
                    </svg>
                    <p>RA, 0015, Yerevan, Paronyan 15/1</p>
                </div>
            </div>
        </div>
    );
});

export default Contact;
