
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Header.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import img1 from '../../../public/img/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg';
import img2 from '../../../public/img/comfortable-modern-bedroom-with-elegant-decoration-lighting-generative-ai.jpg';
import img3 from '../../../public/img/3d-rendering-modern-dining-room-living-room-with-luxury-decor.jpg';
import img4 from '../../../public/img/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg'


const Header = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide> <img className='' src={img1} alt="" /></SwiperSlide>
                <SwiperSlide> <img className='' src={img2} alt="" /></SwiperSlide>
                <SwiperSlide> <img className='' src={img3} alt="" /></SwiperSlide>
                <SwiperSlide> <img className='' src={img4} alt="" /></SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
};

export default Header;