import React from 'react';
import img from '../../accsets/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
const HomeBannar = () => {
    return (
        <div className="hero min-h-screen bg-[#FFF8F5] lg:px-[135px]">
         <div  className="hero-content flex-col  lg:flex-row">
  
    <div className='flex-1'>
      <h1 className="text-5xl font-bold">BEAUTY SALON</h1>
      <h1 className="text-5xl font-bold">FOR EVERY WOMEN</h1>
      <p className="py-6">Irregular plural nouns are nouns that do not become plural by adding -s or -es, as most nouns in the English language do. You’re probably familiar with many of these already. For example, the plural form of man is men, not mans</p>
      <button className=" btn btn-primary hover:bg-primary rounded-md  text-white text-[16px] w-[220px] h-[50px]">Get an Appointment</button>
    </div>
    <img  src={img} className="max-w-sm flex-1  rounded-lg shadow-2xl" />
  </div>
</div>
    );
};

export default HomeBannar;