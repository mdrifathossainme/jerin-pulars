import React from 'react';
import { useForm } from 'react-hook-form';

const HomeForm = () => {
    const { register, handleSubmit ,formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
    };
    return (
        <div className='bg-[#FFF8F5] pt-28 pb-12'>
            <div className='text-center'>
            <h1 className="text-[34px] leading-10 font-bold">Let us handle your</h1>
            <h1 className="text-[34px] leading-10 font-bold">project, professionally.</h1>
            </div>

      <div  className="w-[760px] mx-auto pt-20" >
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex gap-4'>
            <div className="form-control">
                    <input {...register("firstName", { required: true ,   
                    maxLength : {
                            value: 28,
                            message: 'Max Length 28 Character'
                        },
                        max: {
                            value: 0,
                            message: 'Only Use string, Number not Allow!'
                          }
                    })}
                    type="text" placeholder="FAST NAME" className="input  w-[360px] " />
                    <label className="label">
                        <span className="label-text-alt"> 
                          {errors.firstName?.type === 'required' && <p className='text-red-500 text-[12px] font-bold'>First name is required</p>}
                          {errors.firstName?.type === 'maxLength' && <p className='text-red-500 text-[12px] font-bold'>{errors.firstName.message}</p>}
                          {errors.firstName?.type === 'max' && <p className='text-red-500 text-[12px] font-bold'>{errors.firstName.message}</p>}
                          
                          </span>
                      
                    </label>
             </div>
            <div className="form-control ">
                    <input {...register("lastName", { required: true, maxLength : {
                            value: 28,
                            message: 'Max Length 28 Character'
                        },
                        max: {
                            value: 0,
                            message: 'Only Use string, Number not Allow!'
                          } })}  type="text" placeholder="LAST NAME" className="input   w-[360px] " />
                    <label className="label">
                        <span className="label-text-alt">   {errors.lastName?.type === 'required' && <p className='text-red-500 text-[12px] font-bold'>Last name is required</p>}
                        {errors.lastName?.type === 'maxLength' && <p className='text-red-500 text-[12px] font-bold'>{errors.lastName.message}</p>}
                          {errors.lastName?.type === 'max' && <p className='text-red-500 text-[12px] font-bold'>{errors.lastName.message}</p>}
                        </span>
                    </label>
             </div>
      </div>
      <div className='flex gap-4'>
            <div className="form-control">
                    <input {...register("email", { required: true, 
                    pattern: {
                    value: /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
                    message: 'Email is not valid' 
                    } })}
    
    type="email" placeholder="EMAIL" className="input  w-[360px]" />
                    <label className="label">
                        <span className="label-text-alt"> 
                          {errors.email?.type === 'required' && <p className='text-red-500 text-[12px] font-bold'>Email required</p>}
                          {errors.email?.type === 'pattern' && <p className='text-red-500 text-[12px] font-bold'>{errors.email.message}</p>}
                          
                          </span>
                    </label>
             </div>
            <div className="form-control ">
                    <input {...register("password", { required: true, 
                    pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                    message: 'Used minimum 1 uppercase 1 lowercase 1 special 1number 8 Min 8 characters Max 30 characters' 
                    } })}  type="text" placeholder="PASSWORD" className="input  w-[360px]" />
                    <label className="label">
                        <span className="label-text-alt"> 
                          {errors.password?.type === 'required' && <p className='text-red-500 text-[12px] font-bold'>Password required</p>}
                          {errors.password?.type === 'pattern' && <p className='text-red-500 text-[12px] font-bold'>{errors.password.message}</p>}
                          
                          </span>
                    </label>
             </div>
          </div>     
            <textarea placeholder="Your Message"  rows="5" {...register("message",{ required: true })} className='w-full pl-2 pt-2' ></textarea>      
            <label className="label">
                        <span className="label-text-alt">   {errors.message?.type === 'required' && <p className='text-red-500 text-[12px] font-bold'>Message required</p>}</span>
                    </label>
                    <div className='flex justify-center'>
                            <input  className='btn btn-primary hover:bg-primary text-white   w-[172px] h-[50px]' type="submit" />
                    </div>
            </form>
      </div>
        </div>
    );
};

export default HomeForm;