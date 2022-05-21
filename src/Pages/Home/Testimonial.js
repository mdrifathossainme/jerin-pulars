import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay ,Pagination } from "swiper";

import "./style.css";
 import img1 from '../../accsets/Image/Ellipse 90.png'
 import img2 from '../../accsets/Image/Ellipse 91.png'
 import img3 from '../../accsets/Image/Ellipse 92.png'

const Testimonial = () => {
    return (
        <>
     <Swiper
          slidesPerView={window.innerWidth<1000? 1:3}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay ,Pagination]}
          loopFillGroupWithBlank={true}
          className="mySwiper"
        >
         <div>
         <SwiperSlide>
              <div>
                  <div className='flex  items-center gap-2'>
                      <img src={img1} className="w-[64px] h-[64px]"></img>
                      <span ><h4 className='text-[20px] font-bold' >Nash Patrik</h4>
                      <p className='text-[16px] text-left'>CEO, Manpol</p></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus dicta officia odit reiciendis ad consequuntur voluptas harum, iste distinctio!</p>
                  <div className="flex mt-3">
                           <img className='w-[24px] h-[24px]' src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img className='w-[24px] h-[24px]' src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img className='w-[24px] h-[24px]' src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img className='w-[24px] h-[24px]' src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img className='w-[24px] h-[24px]' src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                       
                 </div>
              </div>
           </SwiperSlide>
             <SwiperSlide>
              <div>
                  <div className='flex  items-center gap-2'>
                      <img src={img2} className="w-[64px] h-[64px]"></img>
                      <span ><h4 className='text-[20px] font-bold' >Miriam Barron</h4>
                      <p className='text-[16px] text-left'>CEO, Manpol</p></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus dicta officia odit reiciendis ad consequuntur voluptas harum, iste distinctio!</p>
                  <div className="flex mt-3">
                           <img className='w-[24px] h-[24px]' src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img className='w-[24px] h-[24px]' src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img className='w-[24px] h-[24px]' src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img className='w-[24px] h-[24px]' src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img className='w-[24px] h-[24px]' src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                       
                 </div>
              </div>
           </SwiperSlide>
             <SwiperSlide>
              <div className=''>
                  <div className='flex  items-center gap-2'>
                      <img src={img3} className="w-[64px] h-[64px]"></img>
                      <span ><h4 className='text-[20px] font-bold' >Bria Malone</h4>
                      <p className='text-[16px] text-left'>CEO, Manpol</p></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus dicta officia odit reiciendis ad consequuntur voluptas harum, iste distinctio!</p>
                  <div className="flex mt-3">
                           <img className='w-[24px] h-[24px]' src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img className='w-[24px] h-[24px]' src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img className='w-[24px] h-[24px]' src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img className='w-[24px] h-[24px]' src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img className='w-[24px] h-[24px]' src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                       
                 </div>
              </div>
           </SwiperSlide>
         </div>
          
       
        </Swiper>
      </>
    );
};

export default Testimonial;