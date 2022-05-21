import React from 'react';
import { Icon } from 'react-icons-kit'
import {mapMarker ,} from 'react-icons-kit/fa/mapMarker'
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'
import {instagram} from 'react-icons-kit/fa/instagram'
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay'
const Footer = () => {
    return (
        <footer class=" grid lg:grid-cols-11  sm:grid-cols-1   lg:gap-4 lg:pt-14 lg:pb-32 pb-12   lg:px-28  bg-primary px-8 pt-8 ">


        <div className='text-white  lg:col-span-3'>
         <div className=' flex gap-2 items-center'>
         <span>
             <Icon icon={mapMarker} size={30}></Icon>
            </span>
         <span>
         <p>H#000 (0th Floor), Road #00,</p>
          <p>New DOHS,Mohakhali,Dhaka Bangladesh</p>
         </span>
         </div>
        </div> 


    <div className='lg:hidden flex gap-x-6 my-4'>
      <span className='text-white'>
       <span class="text-white footer-title">Services</span> 
          <div className='flex flex-col	gap-2 mt-4'>
            <a class="link link-hover">Branding</a> 
            <a class="link link-hover">Design</a> 
            <a class="link link-hover">Marketing</a> 
            <a class="link link-hover">Advertisement</a>
          </div>
      </span>
      <span className='text-white'>
      <span class="footer-title text-white">Company</span> 
          <div className='flex flex-col gap-2 mt-4'>
          <a class="link link-hover">About us</a> 
          <a class="link link-hover">Contact</a> 
          <a class="link link-hover">Jobs</a> 
          <a class="link link-hover">Press kit</a>
          </div>
      </span>
      
    </div>
        <div className='text-white hidden lg:block  lg:col-span-2'>
          <span>
          <span class="text-white footer-title">Services</span> 
          <div className='flex flex-col	gap-2 mt-4'>
            <a class="link link-hover">Branding</a> 
            <a class="link link-hover">Design</a> 
            <a class="link link-hover">Marketing</a> 
            <a class="link link-hover">Advertisement</a>
          </div>
          </span>
          
        </div> 
       
        <div className='text-white hidden lg:block  lg:col-span-2'>
          <span class="footer-title">Company</span> 
          <div className='flex flex-col gap-2 mt-4'>
          <a class="link link-hover">About us</a> 
          <a class="link link-hover">Contact</a> 
          <a class="link link-hover">Jobs</a> 
          <a class="link link-hover">Press kit</a>
          </div>
        </div> 




        <div className='text-white lg:col-span-4'>
          <span class="footer-title">About Us</span> 
          <p>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Purus commodo ipsum
                duis laoreet maecenas. Feugiat </p>
                <span className='flex pt-4 gap-x-4'>
               <Icon icon={facebookSquare} size={30}></Icon>
               <Icon icon={instagram} size={30}></Icon>
               <Icon icon={linkedinSquare} size={30}></Icon>
               <Icon icon={youtubePlay} size={30}></Icon>

                </span>
        </div>
      </footer>
    );
};

export default Footer;