import React from 'react';

const SingleServis = ({title,des,img,price}) => {
    return (
        <div className="card w-[370px] h-[320px] bg-white shadow-xl mt-12">
        <div className="card-body">
            <div className='flex justify-center'>   <img className='w-[72px] h-[72px] text-center' src={img} alt=''></img></div>
          <h2 className="text-center text-[20px] font-bold">{title}</h2>
          <p className='text-center  text-[20px] text-primary'>$ {price}</p>
          
          <p  className='text-center'>{des}</p>
        </div>
      </div>
    );
};

export default SingleServis;