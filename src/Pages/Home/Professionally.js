import React from 'react';
import img from '../../accsets/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'
const Professionally = () => {
    return (
        <div className="hero  bg-[#FFF8F5] lg:p-32 sm:p-8">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className='flex-1 lg:w-[409px]  h-[381px] lg:pl-8'>
            <h1 className="text-[34px] leading-10 font-bold">Let us handle your</h1>
            <h1 className="text-[34px] leading-10 font-bold ">screen <span className='text-primary'>Professionally</span>.</h1>
            
            <p className="py-6">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-[42px] font-bold text-primary'>500+</h1>
                    <p className='text-[16px]'>Happy Customer</p>
                </div>     
                <div>
                    <h1 className='text-[42px] font-bold text-primary'>16+</h1>
                    <p>Total Service</p>
                </div>     
            </div>
           </div>
         
          <img src={img} className=" lg:w-[580px]  rounded-lg shadow-2xl flex-1" />
        </div>
        </div>
        
    );
};

export default Professionally;