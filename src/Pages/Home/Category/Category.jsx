import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle 
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Order online"}
            ></SectionTitle>
            <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-16"
        >
            <SwiperSlide>
                <img src={slide1} alt="" />
                <h3 className='uppercase text-xl text-center -mt-14 text-white'>Salads</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
                <h3 className='uppercase text-xl text-center -mt-14 text-white'>Pizza</h3>
                </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <h3 className='uppercase text-xl text-center -mt-14 text-white'>Soup</h3>
                </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
                <h3 className='uppercase text-xl text-center -mt-14 text-white'>Dessert</h3>
                </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="" />
                <h3 className='uppercase text-xl text-center -mt-14 text-white'>Salads</h3>
                </SwiperSlide>
        </Swiper>
        </section>
    );
};

export default Category;