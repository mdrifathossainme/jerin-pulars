import React from 'react';
import Footer from '../../Components/Footer/Footer';
import WeddingMakeup from '../../Components/Tab/weddingmakeup';
import AwsomeService from './AwsomeService';
import HomeBannar from './HomeBannar';
import HomeForm from './HomeForm';
import Professionally from './Professionally';
import Testimonial from './Testimonial'
const Home = () => {
    return (
        <>
        <HomeBannar/>
        <AwsomeService/>
        <Professionally/>
        <div className='px-24'>
             <h1 className=' text-center text-[34px] font-bold pt-24'>Testimonial</h1>
               <div> <Testimonial/></div>
        </div>
      <div>
        <HomeForm/>
      </div>
      <Footer/>
        </>
    );

};

export default Home;