import React from 'react'
import logo from '@assets/nav/D4A-logo Only-final-vertical -1.png'
import zoho from '@assets/hero/Zoho advanced_partner Logo.png'
import qatar from '@assets/hero/QFZ-LOGO-COLOR1.png'
import Image from 'next/image'
import { footer } from './data'
export default function Footer() {
  return (
    
    <footer className='container mx-auto bg-primary p-4'>
<div className='grid md:place-items-center '>
    <div className='flex flex-col lg:flex-row gap-y-10 items-center lg:gap-x-32 xl:gap-x-60'>
        <Image src={logo} alt='footer-image' className='w-36 object-contain'/>

       <Image src={zoho}  alt='footer-image' className='w-36 object-contain' />
       <Image src={qatar} alt='footer-image' className='w-36 object-contain'/>
    </div>
    <div className='flex flex-col md:flex-row items-start md:items-center gap-x-4 lg:gap-x-14  xl:gap-x-28'>
        {footer.map(({id,icon,text})=>{
            return(
                <div key={id} className='flex mt-7 sm:mt-0 justify-center items-center gap-x-2 text-white'>
<span className='text-lg md:text-sm lg:text-md xl:text-lg'>{icon}</span>
<p className=' text-lg md:text-sm lg:text-md xl:text-lg'>{text}</p>
                </div>
            )
        })}
    </div>
    <p className='text-white text-xs  md:text-md xl:text-xl mt-10'>Copyright © 2022 D4A Cloud ERP Solutions QFZ LLC. All rights reserved.</p>
</div>
    </footer>
  )
}
