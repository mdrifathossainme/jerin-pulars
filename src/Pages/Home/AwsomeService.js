import React from 'react';
import SingleServis from './SingleServis';
import Face from '../../accsets/Icon/Group 1373.png'
import Hair from '../../accsets/Icon/Group 1372.png'
import Skin from '../../accsets/Icon/Group 1374.png'

const AwsomeService = () => {
    return (
        <div className='bg-white'>
            <h1 className=' text-center text-[34px] font-bold pt-24'>Our Awesome <span className='text-primary'>Services</span></h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-16'>
                <SingleServis title={'Anti Age Face Treatment'} img={Face} price={'199'} des={'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'}></SingleServis>
                <SingleServis title={'Hair Color & Styleing'} img={Hair} price={'99'} des={'Amazing flyers, social media posts and brand representations that would make your brand stand out.'}></SingleServis>
                <SingleServis title={'Skin Care Treatment'} img={Skin} price={'299'} des={'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'}></SingleServis>
            </div>
         <div className='flex justify-center my-10'>   <button className='btn btn-primary  rounded-md '>Explore more</button></div>
        </div>
    );
};

export default AwsomeService;